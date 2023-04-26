import { IsString, IsOptional } from 'class-validator';
import { GenderType } from '../entities/user.entity';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  login: string;

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
  document: string;

  @IsString()
  @IsOptional()
  gender: GenderType;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsString()
  region: string;
}