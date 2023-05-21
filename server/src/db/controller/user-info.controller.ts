import { Body, Controller, Delete, Get, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { UserInfoService } from '../service/user-info/user-info.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user-info')
export class UserInfoController {
    constructor(private userInfo: UserInfoService) {}

    @Get()
    async getCountries(@Res() res:any) {
        return this.userInfo.getAll(res);
    }

    @Get(':id')
    async getOneCountry(@Param('id') id: string, @Res() res:any) {
        return this.userInfo.getOne(id, res);
    }

    @Post()
    async getCountry(@Body() body: any, @Res() res:any) {
        return this.userInfo.createOne(body, res);
    }

    @Put(':id')
    async updateOne(@Param('id') id: string, @Body() body: any, @Res() res:any) {
        return this.userInfo.updateOne(id, body, res);
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: string, @Res() res:any) {
        return this.userInfo.removeOne(id, res);
    }
}
