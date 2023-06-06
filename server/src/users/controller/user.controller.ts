import { Body, Controller, Get, HttpCode, Param, ParseUUIDPipe, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { Delete, Patch } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserDto } from '../dto/createuser.dto';
import { UpdateUserDto } from '../dto/updateUser.dto';
import { UserService } from '../services/user.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getOneUser(@Param('id', new ParseUUIDPipe()) id:string) {
    return this.userService.getOneUser(id);
  }

  @Post()
  createUser(@Body(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  })) dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }


  @Patch(':id')
  updateUsers(@Param('id', new ParseUUIDPipe()) id:string, @Body(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  })) dto: UpdateUserDto) {
    return this.userService.updateUserInfo(id, dto);
  }

  @HttpCode(204)
  @Delete(':id')
  async deleteUser(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.userService.deleteUser(id);
  }
}