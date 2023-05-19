import { Injectable } from '@angular/core';
import { PassengerInfo, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
  fareAdult = 0;
  fareChild = 0;
  fareInfant = 0;

  get totalFarePrice(): number {
    return this.fareAdult + this.fareChild + this.fareInfant;
  }

  fares(passenger_info: PassengerInfo, search_result: SearchResult, ticket_result: TicketResult): void {
    for (const key in passenger_info) {
      this.fareCharge(passenger_info, key, ticket_result);
    }
  }

  fareCharge(passenger_info: PassengerInfo, type: string, ticket_result: TicketResult) {
    if (type === 'child') {
      let chargeSum = 0
      passenger_info.child?.forEach((item) => {
        if (item.assist) {
          chargeSum += 10
        }
      })
      this.fareChild = chargeSum * (ticket_result.return?.destinationDate ? 2 : 1);
    }
    else if (type === 'infant') {
      let chargeSum = 0
      passenger_info.infant?.forEach((item) => {
        if (item.assist) {
          chargeSum += 5
        }
      })
      this.fareInfant = chargeSum * (ticket_result.return?.destinationDate ? 2 : 1);
    }
    else if (type === 'adults') {
      let chargeSum = 0
      passenger_info.adults?.forEach((item) => {
        if (item.assist) {
          chargeSum += 15
        }
      })
      this.fareAdult = chargeSum * (ticket_result.return?.destinationDate ? 2 : 1);
    }
  }
}
