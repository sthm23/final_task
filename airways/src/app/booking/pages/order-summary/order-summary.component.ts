import { Component, OnInit } from '@angular/core';
import { CarouselData, PassengerInfo, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';



@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {



  ngOnInit(): void {
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    console.log(ticket_result);
    console.log(search_result);
    console.log(passengerInfo);

  }

}
