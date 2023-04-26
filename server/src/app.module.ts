import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';


@Module({
  imports: [
    AuthModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    DbModule
  ],
  controllers: [],
})
export class AppModule {}
