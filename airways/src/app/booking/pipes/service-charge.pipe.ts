import { Pipe, PipeTransform } from '@angular/core';
import { PassengerInfo } from 'src/app/material/interfaces/interfaces';

@Pipe({
  name: 'serviceCharge'
})
export class ServiceChargePipe implements PipeTransform {

  transform(value: PassengerInfo, type: string): number {
    if (type === 'child') {
      let chargeSum = 0
      value.child?.forEach((item) => {
        if (item.assist) {
          chargeSum += 10
        }
      })
      return chargeSum;
    }
    else if (type === 'infant') {
      let chargeSum = 0
      value.infant?.forEach((item) => {
        if (item.assist) {
          chargeSum += 5
        }
      })
      return chargeSum;
    }
    else if (type === 'adults') {
      let chargeSum = 0
      value.adults?.forEach((item) => {
        if (item.assist) {
          chargeSum += 15
        }
      })
      return chargeSum;
    }
    return 0;
  }

}
