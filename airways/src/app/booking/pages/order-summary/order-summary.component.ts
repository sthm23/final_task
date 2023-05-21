import { Component, OnInit } from '@angular/core';
import { CartInfo, PassengerInfo, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';
import { CartService } from 'src/app/shopping/services/cart.service';
import { TotalPriceService } from '../../services/total-price.service';
import { Router } from '@angular/router';



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

  constructor(
    private totalPriceService: TotalPriceService,
    private cartService: CartService,
    private route: Router
    ) { }

  ngOnInit(): void {
    const ticket_result = JSON.parse(localStorage.getItem('ticket')!) as TicketResult;
    const search_result = JSON.parse(localStorage.getItem('search_result')!) as SearchResult;
    const passengerInfo = JSON.parse(localStorage.getItem('passengers_info')!) as PassengerInfo;

    this.ticket_result = ticket_result;
    this.search_result = search_result;
    this.passenger_info = passengerInfo;

    this.cartService.getAllTrips().pipe().subscribe(el=>{

    })

    this.totalPriceService.fares(this.passenger_info, this.search_result, this.ticket_result);

    this.fareAdult = this.totalPriceService.fareAdult;
    this.fareChild = this.totalPriceService.fareChild;
    this.fareInfant = this.totalPriceService.fareInfant;

  }

  totalFare(type: string) {
    const ticketPrice = this.ticket_result.from.price;
    if (type === 'adult') {
      return +(ticketPrice * this.search_result.passengers.adults).toFixed(2);
    } else if (type === 'child') {
      return +(ticketPrice * this.search_result.passengers.child).toFixed(2);
    } else if (type === 'infant') {
      return +(ticketPrice * this.search_result.passengers.infant).toFixed(2);
    }
    return 0;
  }

  get totalPrice() {
    return this.totalPriceService.totalFarePrice + this.totalFare('adult') + this.totalFare('child') + this.totalFare('infant');
  }

  addToCart() {
    this.cartService.addToCart({data: this.newTrip, passengerInfo: this.passenger_info}).subscribe(el=>{

    });
  }

  get newTrip(): CartInfo {
    return {
      flightType: this.ticket_result.return?.price ? 'Round Trip' : 'One way',
      passengerAmount: this.search_result.passengers,
      check: false,
      price: this.totalPrice,
      from:{
        flightNumber: this.ticket_result.from.flightNumber,
        flight: {
          from: this.ticket_result.from.from.state,
          destination: this.ticket_result.from.destination.state,
        },
        flightDate: {
          from: this.ticket_result.from.fromDate,
          return: this.ticket_result.from?.destinationDate,
          duration: this.ticket_result.from?.duration,
        },
      },
      return:{
        flightNumber: this.ticket_result.return?.flightNumber,
        flight: {
          from: this.ticket_result.return?.from.state,
          destination: this.ticket_result.return?.destination.state,
        },
        flightDate: {
          from: this.ticket_result.return?.fromDate,
          return: this.ticket_result.return?.destinationDate,
          duration: this.ticket_result.return?.duration,
        },
      },
    };
  }

  continueBtn() {
    this.addToCart()
    this.route.navigate(['/shop'])
  }


}
