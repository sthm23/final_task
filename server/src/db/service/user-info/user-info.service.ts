import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { v4 as uuid } from 'uuid';

type FlightDetail = {
    flightNumber: string,
    flight: {
      from: string,
      destination: string
    },
    flightDate: {
      from: string
      return: string
      duration: number
    },
  }
export interface CartInfo {
    id: string
    flightType: 'Round Trip' | 'One way',
    passengerAmount: {
      adults: number
      child: number
      infant: number
    }
    check: boolean,
    price: number,
    from:FlightDetail
    return:FlightDetail
  }
@Injectable()
export class UserInfoService {
    private dbUser = new Map<string, CartInfo[]>()

    async getAll(res:any) {
        const userId = res.req.user.userId;
        const a = this.dbUser.get(userId);
        if(a){
            return res.status(HttpStatus.OK).json(a);
        }else {
            this.dbUser.set(userId, [])
            return res.status(HttpStatus.OK).json([]);
        }

    }

    getOne(id:string,res:any) {
        const userId = res.req.user.userId;
        const data = this.dbUser.get(userId);
        if(data) {
            const result = data.find(el=>el.id === id);
            return res.status(HttpStatus.OK).json(result);
        } else {
            return res.status(HttpStatus.OK).json([]);
        }
    }

    removeOne(id:string,res:any) {
        const userId = res.req.user.userId
        const data = this.dbUser.get(userId).filter(el=>el.id !== id);
        this.dbUser.set(userId, data)
        return res.status(HttpStatus.OK).json(data);
    }

    updateOne(id: string, body: any,res:any) {
        const userId = res.req.user.userId
        const data = this.dbUser.get(userId)

        const arr = data.map(el=>{
            if(el.id === id) {
                return {
                    ...el,
                    ...body
                }
            }
        });
        this.dbUser.set(userId, arr)
        return res.status(HttpStatus.OK).json(arr);
    }

    createOne(body: any,res:any) {
        const id: string = uuid();
        const userId = res.req.user.userId
        const data = this.dbUser.get(userId);
        if(data) {
            const user = data.find(el=> el.price === body.price);
            if(user) {
                throw new HttpException('book already exist', HttpStatusCode.NotFound)
            }
            data.push({...body, id});
            this.dbUser.set(userId, data)
            return res.status(HttpStatus.OK).json(data);
        } else {
            this.dbUser.set(userId, []);
            const data = this.dbUser.get(userId);
            data.push({...body, id});
            this.dbUser.set(userId, data)
            return res.status(HttpStatus.OK).json(data);
        }
    }
}
