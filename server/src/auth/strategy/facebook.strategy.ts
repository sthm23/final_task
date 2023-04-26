import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-facebook";
import { CreateUserDto } from "src/users/dto/createuser.dto";

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, "facebook") {
  constructor() {
    super({
      clientID: process.env.APP_ID,
      clientSecret: process.env.APP_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook-redirect",
      scope: "email",
      profileFields: ["emails", "name"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void
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