import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { Response } from 'express';
import MOCKED_RESPONSE from '../json-files/fly-reys/MOCK_DATA.json';
import { AirlineFly } from '../json-files/fly-reys/interface';

@Injectable()
export class FlyService {

    constructor(private readonly httpService: HttpService) {}

    async getAll(res: Response):Promise<Response<AirlineFly[], Record<string, AirlineFly[]>>> {
        return res.status(HttpStatus.OK).json(MOCKED_RESPONSE);
    }

    async getOneCountry(res: Response, isoCode: string) {
        const one = MOCKED_RESPONSE.filter(el=>el?.from_code.toLowerCase() === isoCode.toLowerCase());
        if(!one) {
            throw new HttpException('Country is not found', HttpStatus.NOT_FOUND);
        }
        return res.status(HttpStatus.OK).json(one);
    }
}