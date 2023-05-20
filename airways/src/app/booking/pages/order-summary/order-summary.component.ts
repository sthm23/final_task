import { Component, OnInit } from '@angular/core';
import { concatAll, from, fromEvent, interval, map, merge, of, race, take } from 'rxjs';
import { CarouselData, CartInfo, PassengerInfo, SearchResult, TicketResult } from 'src/app/material/interfaces/interfaces';
import { CartService } from 'src/app/shopping/services/cart.service';
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

  constructor(private totalPriceService: TotalPriceService, private cartService: CartService) { }

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
    console.log(this.ticket_result.from);

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
    this.cartService.addToCart(this.newTrip);
  }

  get newTrip(): CartInfo {
    return {
      id: this.cartService.getCartItems.length + 1,
      flightNumber: this.ticket_result.from.flightNumber,
      destination: {
        from: this.ticket_result.from.destination.state,
        return: this.ticket_result.return?.destination.state,
      },
      flightType: this.ticket_result.return?.price ? 'Round Trip' : 'One way',
      departureDate: {
        from: this.ticket_result.from.destinationDate,
        return: this.ticket_result.return?.destinationDate,
      },
      arrivalDate: {
        from: this.ticket_result.from.duration,
        return: this.ticket_result.return?.duration,
      },
      passengerAmount: this.search_result.passengers,
      price: this.totalPrice,
    };
  }



}
