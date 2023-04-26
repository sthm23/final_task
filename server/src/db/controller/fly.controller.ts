import { Controller, Get, Param, Res } from '@nestjs/common';
import {Response} from 'express'
import { FlyService } from '../service/flyService.service';

@Controller('fly')
export class FlyController {

    constructor(private country: FlyService) {}

    @Get()
    async getCountries(@Res() res: Response) {
        return await this.country.getAll(res);
    }

    @Get(':id')
    async getOneCountry(@Res() res: Response, @Param('id') id: string) {
        return this.country.getOneCountry(res, id);
    }


}
