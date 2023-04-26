import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { Response } from 'express';
import MOCKED_RESPONSE from '../json-files/country/country.json';
import { CountryInterface } from '../json-files/country/interfaces';

@Injectable()
export class CountryService {

    constructor(private readonly httpService: HttpService) {}

    async getAll(res: Response):Promise<Response<CountryInterface[], Record<string, CountryInterface[]>>> {
        return res.status(HttpStatus.OK).json(MOCKED_RESPONSE);
    }

    async getOneCountry(res: Response, isoCode: string) {
        const one = MOCKED_RESPONSE.find(el=>el?.isoCode === isoCode);
        if(!one) {
            throw new HttpException('Country is not found', HttpStatus.NOT_FOUND);
        }
        return res.status(HttpStatus.OK).json(one);
    }
}