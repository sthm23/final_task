import { Component, OnInit } from '@angular/core';
import { concatAll, from, fromEvent, interval, map, merge, of, race, take } from 'rxjs';
import { CarouselData, PassengerInfo, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';
import { TotalPriceService } from '../../services/total-price.service';



@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  ticket_result!: TicketResult;
  search_result!: SearchResult;
  passenger_info!: PassengerInfo;
  fareAdult = 0;
  fareChild = 0;
  fareInfant = 0;

  constructor(private totalPriceService: TotalPriceService) { }

  ngOnInit(): void {
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    this.ticket_result = ticket_result;
    this.search_result = search_result;
    this.passenger_info = passengerInfo;

    this.totalPriceService.fares(this.passenger_info, this.search_result, this.ticket_result);

    this.fareAdult = this.totalPriceService.fareAdult;
    this.fareChild = this.totalPriceService.fareChild;
    this.fareInfant = this.totalPriceService.fareInfant;

  }

  totalFare(type: string) {
    const ticketPrice = this.ticket_result.from.price;
    if (type === 'adult') {
      return ticketPrice * this.search_result.passengers.adults;
    } else if (type === 'child') {
      return ticketPrice * this.search_result.passengers.child;
    } else if (type === 'infant') {
      return ticketPrice * this.search_result.passengers.infant;
    }
    return 0;
  }

  get totalPrice() {
    return this.totalPriceService.totalFarePrice + this.totalFare('adult') + this.totalFare('child') + this.totalFare('infant');
  }


}
