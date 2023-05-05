import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createuser.dto';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google-redirect',
      scope: ['email', 'profile'],
    });
  }
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails } = profile;
    const user = {
      email: String(emails[0].value),
      login: String(emails[0].value),
      password: '',
      firstName: String(name.givenName),
      lastName: String(name.familyName),
      phoneNumber: '',
      country: '',
      birthday: '',
      citizenship: '',
      gender: 'male'
    } as CreateUserDto;

    done(null, {...user, accessToken, refreshToken});
  }
}
