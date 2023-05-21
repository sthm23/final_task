import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CarouselData, PassengerInfo } from 'src/app/material/interfaces/interfaces';
import { CartService } from 'src/app/shopping/services/cart.service';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit{
  @Input() ticket_result!: CarouselData;
  passengerInfo!: PassengerInfo;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.cartService.getOneTrips(id)
      .subscribe(el=>{
        this.passengerInfo = el.passengerInfo
    })
  }

}
