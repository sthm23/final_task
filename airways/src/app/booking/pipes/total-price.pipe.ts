import { Pipe, PipeTransform } from '@angular/core';
import { PassengerInfo } from 'src/app/material/interfaces/interfaces';


interface Passengers {
  adults: number,
  child: number,
  infant: number
}

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(passengers: Passengers, price: number, passenger_info: PassengerInfo): unknown {

    const { adults, child, infant } = passengers;

    return Math.round((price * adults) + (price * child) + (infant * price) + this.chargeService(passenger_info));
  }

  chargeService(passenger_info: PassengerInfo) {
    let chargeSum = 0
    for (const key in passenger_info) {
      if (key === 'adults') {
        passenger_info.adults.forEach((item) => {
          if (item.assist) {
            chargeSum += 15
          }
        })
      } else if (key === 'child') {
        passenger_info.child.forEach((item) => {
          if (item.assist) {
            chargeSum += 10
          }
        })
      } else if (key === 'infant') {
        passenger_info.infant.forEach((item) => {
          if (item.assist) {
            chargeSum += 5
          }
        })
      }
    }

    return chargeSum;
  }

}
