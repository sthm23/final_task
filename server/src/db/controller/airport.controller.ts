import { Controller, Get, Param, Res } from '@nestjs/common';
import {Response} from 'express'
import { AirportService } from '../service/airport.service';

@Controller('airport')
export class AirportController {

    constructor(private airport: AirportService) {}

    @Get()
    async getCountries(@Res() res: Response) {
        return await this.airport.getAll(res);
    }

    @Get(':id')
    async getOneCountry(@Res() res: Response, @Param('id') id: string) {
        return this.airport.getOneCountry(res, +id);
    }
}
