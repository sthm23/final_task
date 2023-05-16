import { Component, OnInit } from '@angular/core';
import { CarouselData, PassengerInfo, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';



@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  ticket_result!: TicketResult;
  search_result!: SearchResult;
  passenger_info!: PassengerInfo;



  ngOnInit(): void {
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    this.ticket_result = ticket_result;
    this.passenger_info = passengerInfo;
    this.search_result = search_result;
    console.log(ticket_result);
    console.log(search_result);
    console.log(passengerInfo);

  }

}
