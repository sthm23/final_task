import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import * as dotenv from 'dotenv';
import { LocalStrategy } from './strategy/local.strategy';
import { DbModule } from 'src/db/db.module';
import { GoogleStrategy } from './strategy/google.strategy';
import { FacebookStrategy } from './strategy/facebook.strategy';
dotenv.config();

@Module({
  imports: [
    UsersModule,
    DbModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: { expiresIn: '20s' },
    }),
  ],
  providers: [JwtStrategy, AuthService, LocalStrategy, GoogleStrategy, FacebookStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
