import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/services/user.service';
import { CreateUserDto } from 'src/users/dto/createuser.dto';
import { Response } from 'express';
import { GetTokenOptions, PayloadDataInRefresh } from '../interface/interfaces';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userServ: UserService
  ) {}

  async validateUser(username: string, pass: string): Promise<UserEntity> {
    const user = await this.userServ.getUserByLoginAndPassword(username);
    if(!user) return null
    const isValid = bcrypt.compareSync(pass, user.password);
    if (user && isValid) {
      return user;
    }
    return null;
  }

  async login(user: GetTokenOptions) {
    const tokens = await this.getToken({id: user.id, login: user.login});
    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken
    };
  }

  async register(dto: CreateUserDto) {
    return await this.userServ.createUser(dto);
  }

  async registerWithGoogle(dto: CreateUserDto) {
    return await this.userServ.createUser(dto);
  }

  async checkToken(token: string) {
    const payload:PayloadDataInRefresh = await this.jwtService
    .verifyAsync(token, {
      secret: process.env.JWT_KEY,
    })
    .catch(() => {
        throw new ForbiddenException()
    });

    return payload;
  }

  async refreshToken(body: {refreshToken:string}) {

    const payload = await this.checkToken(body.refreshToken);
    const tokens = await this.getToken({id:payload.userId, login:payload.login}, body.refreshToken)
    return tokens
  }

  async getToken({id, login}: GetTokenOptions, rfCheck?:string) {
    const [at, rt] = await Promise.all([
        this.jwtService.sign({
            userId: id,
            login: login,
        }, {
            secret: process.env.JWT_KEY,
            expiresIn: process.env.ACCESS_TOKEN_EXPIRE
        }),
        this.jwtService.sign({
          userId: id,
          login: login
        }, {
            secret: process.env.JWT_KEY_REFRESH,
            expiresIn: process.env.REFRESH_TOKEN_EXPIRE
        })
    ]);

    if(rfCheck) {
      return {
        accessToken: at,
        refreshToken: rfCheck
      }
    }

    return {
        accessToken: at,
        refreshToken: rt
    }
  }

  async logOut(res: Response) {
    res.clearCookie('jwt-access');
    res.clearCookie('jwt-refresh');
    return true
  }
}