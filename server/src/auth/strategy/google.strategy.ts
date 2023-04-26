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
      password: 'test',
      firstName: String(name.givenName),
      lastName: String(name.familyName),
      phoneNumber: '123456789',
      country: 'uzbekistan',
      birthday: '',
      citizenship: 'uzb',
      gender: 'male'
    } as CreateUserDto;

    done(null, {...user, accessToken, refreshToken});
  }
}

/**
 * {
  id: '114299679822685574084',
  displayName: 'Sanjar Tukhtamishev',
  name: { familyName: 'Tukhtamishev', givenName: 'Sanjar' },
  emails: [ { value: 'stuxtamixhev@gmail.com', verified: true } ],
  photos: [
    {
      value: 'https://lh3.googleusercontent.com/a/AGNmyxbBeYuBaKjph_CkJzeJzZgew1QVd9rCh39vVXbVmQ=s96-c'
    }
  ],
  provider: 'google',
  _raw: '{\n' +
    '  "sub": "114299679822685574084",\n' +
    '  "name": "Sanjar Tukhtamishev",\n' +
    '  "given_name": "Sanjar",\n' +
    '  "family_name": "Tukhtamishev",\n' +
    '  "picture": "https://lh3.googleusercontent.com/a/AGNmyxbBeYuBaKjph_CkJzeJzZgew1QVd9rCh39vVXbVmQ\\u003ds96-c",\n' +
    '  "email": "stuxtamixhev@gmail.com",\n' +
    '  "email_verified": true,\n' +
    '  "locale": "ru"\n' +
    '}',
  _json: {
    sub: '114299679822685574084',
    name: 'Sanjar Tukhtamishev',
    given_name: 'Sanjar',
    family_name: 'Tukhtamishev',
    picture: 'https://lh3.googleusercontent.com/a/AGNmyxbBeYuBaKjph_CkJzeJzZgew1QVd9rCh39vVXbVmQ=s96-c',
    email: 'stuxtamixhev@gmail.com',
    email_verified: true,
    locale: 'ru'
  }
}
 */