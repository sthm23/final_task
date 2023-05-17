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

  totalPrice!: number;

  constructor(private totalPriceService: TotalPriceService) { }

  ngOnInit(): void {
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    this.ticket_result = ticket_result;
    this.search_result = search_result;
    this.passenger_info = passengerInfo;
    console.log(ticket_result);
    console.log(search_result);
    console.log(passengerInfo);

    this.totalPrice = this.totalPriceService.totalPrice(search_result.passengers, this.ticket_result, this.passenger_info);
  }


}
