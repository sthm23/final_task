import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { Response } from 'express';
import MOCKED_RESPONSE from '../json-files/airports/airport_list.json';
import { Airport } from '../json-files/airports/interface';

@Injectable()
export class AirportService {

    constructor(private readonly httpService: HttpService) {}

    async getAll(res: Response):Promise<Response<Airport[], Record<string, Airport[]>>> {
        return res.status(HttpStatus.OK).json(MOCKED_RESPONSE);
    }

    async getOneCountry(res: Response, id: number) {
        const one = MOCKED_RESPONSE.find(el=>el.id === id);
        if(!one) {
            throw new HttpException('Country is not found', HttpStatus.NOT_FOUND);
        }
        return res.status(HttpStatus.OK).json(one);
    }
}