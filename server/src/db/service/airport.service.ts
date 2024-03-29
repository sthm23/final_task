import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable, HttpException } from '@nestjs/common';
import { Response } from 'express';
import MOCKED_RESPONSE from '../json-files/airports/airport_list.json';
import { Airport, FlightResult, FlightTicket } from '../json-files/airports/interface';


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

    async getSpecificCountry(res: Response, body: FlightTicket) {
        const from = (MOCKED_RESPONSE as Airport[]).find(el=>el.id === body.from);
        const destination = (MOCKED_RESPONSE as Airport[]).find(el=>el.id === body.destination);
        
        if(body.date) {
            const resArr = this.createFlights(from, destination, body.date)
            return res.status(HttpStatus.OK).json({
                start: resArr,
                end: []
            });
        }
        
        if(body.rangeDate) {
            const resStartArr = this.createFlights(from, destination, body.rangeDate.start);
            const resEndArr = this.createFlights(destination, from, body.rangeDate.end);
            return res.status(HttpStatus.OK).json({
                start: resStartArr,
                end: resEndArr
            });
        }


    }

    private createFlights(from: Airport, dest: Airport, date: Date):FlightResult[] {
        const arr = [100, 212, 82, 13, 3, 226, 85, 208, 129];
        return arr.map((item, ind)=>{
            const fromDate = this.generateRandomDestinationDate(date, ind)
            const destinationDate = this.generateRandomDestinationDate(fromDate);
            const duration = this.countDuration(fromDate, destinationDate);
            const flightNumber = this.generateFlightNumber(from);
            const seats = Math.floor(Math.random() * 130);
            const flight = Math.floor(Math.random() * 4) === 1;
            const luggage = this.generateLuggage();
            const price = Number(Math.ceil((Math.random() * item)) + Math.random().toFixed(2))
            return {
                id: ind+1,
                from: from,
                fromDate: fromDate,
                destination: dest,
                destinationDate: destinationDate,
                duration: duration,
                flightNumber: flightNumber,
                seats: seats,
                price: price,
                luggage,
                flight: ind===2 ? false : flight
            }
        })

    }

    private generateLuggage() {
        const arr = [20, 25, 30, 35]
        const random = Math.floor(Math.random() * 4);
        return  random !== 1 ? arr[random] : 0;
    }

    private generateRandomDestinationDate(date: Date, num?:number) {
        const time = new Date(date);
        const destination = new Date(date);
        if(num !== undefined) {
            const dest = destination.setDate(time.getDate() + num - 2);
            const randomHour = Math.floor(Math.random() * 23);
            const randomMinute = Math.floor(Math.random() * 59);
            const dest2 = new Date(dest).setHours(time.getHours() + randomHour, time.getMinutes() - randomMinute);
            return new Date(dest2);
        }
        const randomHour = Math.floor(Math.random() * 23);
        const randomMinute = Math.floor(Math.random() * 59);
        const dest = destination.setHours(time.getHours() + randomHour, time.getMinutes() + randomMinute);

        return new Date(dest);
    }

    private countDuration(start:Date, end:Date) {
        const s = new Date(start)
        const e = new Date(end)
        return (e.getTime() - s.getTime())
    }

    private generateFlightNumber(from: Airport) {
        const num = Math.floor(Math.random() * 2000);
        const flight = from.code
        return `${flight} ${num}`;
    }

}