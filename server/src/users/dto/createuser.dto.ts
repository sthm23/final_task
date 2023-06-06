import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import {v4} from 'uuid';
import { GenderType } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  id: string = v4();

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail(undefined, { message: 'Not a valid e-mail' })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  createDate: string = Date.now().toString();

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsOptional()
  birthday: string;

  @IsString()
  @IsOptional()
  citizenship: string;

  @IsString()
  @IsOptional()
  gender: GenderType;


  constructor(user:CreateUserDto) {
    Object.assign(this, user);
  }
}