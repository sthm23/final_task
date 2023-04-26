import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dto/createuser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserEntity } from '../entities/user.entity';
import { DBService } from 'src/db/service/service.service';

@Injectable()
export class UserService {

    constructor(private userRepo: DBService) {}

    async getAllUsers(): Promise<UserEntity[]> {
        return this.userRepo.find();
    }

    async getOneUser(id: string): Promise<UserEntity> {
        const user = await this.userRepo.findOneBy(id);
        if(user) {
            return user;
        }
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    async getUserByLoginAndPassword(login: string) {
        const user = await this.userRepo.findOne(login);

        if(!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        return user;
    }

    async createUser(dto:CreateUserDto) {
        const userDTO = new CreateUserDto(dto);
        const salt = bcrypt.genSaltSync(10);

        const userCheck = await this.userRepo.findOne(dto.login);
        if(userCheck) {
            throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
        }
        userDTO.password = bcrypt.hashSync(dto.password, salt);

        const user = this.userRepo.create(userDTO);
        return await this.userRepo.save(user);
    }


    async deleteUser(id: string): Promise<void> {
        const user = await this.userRepo.findOne(id);
        if(!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND); 
        }
        await this.userRepo.delete(id);
    }

    async updateUserInfo(id:string, dto: UpdateUserDto) {
        const user = await this.userRepo.findOne(id);
        if(!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND); 
        }
        const updUser = {...user, ...dto};
        return await this.userRepo.update(id, updUser);
    }

    async findOrCreate(profile: any) {
        const user = this.userRepo.findOne(profile.id);
        if(!user) {
            const newUser = this.createUser(profile);
            return newUser
        }
        return user
    }
}