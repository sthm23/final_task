import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import {Response} from 'express'
import { FlyService } from '../service/flyService.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('flight')
export class FlyController {

    constructor(private country: FlyService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getCountries(@Res() res: Response) {
        return await this.country.getAll(res);
    }
    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getOneCountry(@Res() res: Response, @Param('id') id: string) {
        return this.country.getOneCountry(res, id);
    }


}
