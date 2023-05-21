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

  ngOnInit(): void {
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    // console.log(this.ticket_result.fromDate);
    this.passengerInfo = passengerInfo
  }

}
