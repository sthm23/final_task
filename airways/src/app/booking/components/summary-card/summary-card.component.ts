import { Component, Input, OnInit } from '@angular/core';
import { CarouselData, PassengerInfo } from 'src/app/material/interfaces/interfaces';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit{
  @Input() ticket_result!: CarouselData;
  passengerInfo!: PassengerInfo;
  date!: string;

  ngOnInit(): void {
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    this.date = `${new Date(new Date(this.ticket_result.destinationDate).getTime() - 49920000)}`;
    // const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    // const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;

    this.passengerInfo = passengerInfo
  }

}
