import { Body, Controller, Get,
  HttpCode, Post, Req, Res, UseGuards,
  ValidationPipe,
  Request
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/createuser.dto';
import { AuthService } from '../service/auth.service';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import {Response} from 'express'
import { LocalAuthGuard } from '../guards/local.guard';
import { GoogleOAuthGuard } from '../guards/google-oauth.guard';
import { FacebookAuthGuard } from '../guards/facebook.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: any) {
    const token = await this.authService.login(req.user);
    return token
  }

  @Get('google')
  @UseGuards(GoogleOAuthGuard)
  async googleAuth(@Request() req: any) {
    return this.authService.registerWithGoogle(req?.user);
  }

  @Get('google-redirect')
  @UseGuards(GoogleOAuthGuard)
  googleAuthRedirect(@Request() req:any) {
    return this.authService.login(req.user);
  }

  @Get('facebook')
  @UseGuards(FacebookAuthGuard)
  async facebookAuth(@Request() req: any) {
    return this.authService.registerWithGoogle(req?.user);
  }

  @Get('facebook-redirect')
  @UseGuards(FacebookAuthGuard)
  facebookAuthRedirect(@Request() req:any) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  logOut(@Res({ passthrough: true }) res: Response) {
    return this.authService.logOut(res);
  }

  @HttpCode(201)
  @Post('register')
  async register(@Body(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  })) body: CreateUserDto) {
    const auth = await this.authService.register(body);
    return auth;
  }

  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @Post('refresh')
  async refresh(@Body() body) {
    const tokens = await this.authService.refreshToken(body);
    return tokens;
  }

}