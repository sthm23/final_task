import { Controller, Get, Param, Res } from '@nestjs/common';
import {Response} from 'express'
import { CountryService } from '../service/country.service';

@Controller('country')
export class CountryController {

    constructor(private country: CountryService) {}

    @Get()
    async getCountries(@Res() res: Response) {
        return await this.country.getAll(res);
    }

    @Get(':id')
    async getOneCountry(@Res() res: Response, @Param('id') id: string) {
        return this.country.getOneCountry(res, id);
    }


}
