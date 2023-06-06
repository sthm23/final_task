import { Controller, Get, Param, Res, Post, Body } from '@nestjs/common';
import {Response} from 'express'
import { AirportService } from '../service/airport.service';
import { CountryEnum } from '../json-files/country/interfaces';
import { FlightTicket } from '../json-files/airports/interface';

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

    @Post()
    async getCountry(@Res() res: Response, @Body() body: FlightTicket) {
        return await this.airport.getSpecificCountry(res, body);
    }
}
