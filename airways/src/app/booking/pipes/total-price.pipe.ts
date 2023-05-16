import { Pipe, PipeTransform } from '@angular/core';
import { PassengerInfo, TicketResult } from 'src/app/material/interfaces/interfaces';


interface Passengers {
  adults: number,
  child: number,
  infant: number
}

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {

  transform(passengers: Passengers, ticket_result: TicketResult, passenger_info: PassengerInfo): unknown {

    const { adults, child, infant } = passengers;
    const { from } = ticket_result;

    return (from.price * adults) + (from.price * child) + (from.price * infant)
      + (ticket_result.return?.price * adults) + (ticket_result.return?.price * child) + (ticket_result.return?.price * infant)
      + (ticket_result.return?.price ? this.chargeService(passenger_info) * 2 : this.chargeService(passenger_info));
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
