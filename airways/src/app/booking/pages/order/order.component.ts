import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { airplane_icon, airport_Icon } from './icon';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSearchOrder } from 'src/app/redux/selectors/airways.selector';
import { UserOrder } from 'src/app/redux/state.model';
import { SearchTicketService } from '../../services/searchTicket.service';
import { CarouselData } from 'src/app/material/interfaces/interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  flightArr:CarouselData[] = []
  flightReturnArr:CarouselData[] = []
  returnFlight:CarouselData[] = []
  selectedFlight!:CarouselData;
  selectedReturnFlight!:CarouselData;

  searchOrder$!:Observable<UserOrder>;
  checkCarousel = true
  checkReturnCarousel = true

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private route: Router,
    private store: Store,
    private searchService: SearchTicketService,
    ) {
    iconRegistry.addSvgIconLiteral('airplane_icon', sanitizer.bypassSecurityTrustHtml(airplane_icon));
    iconRegistry.addSvgIconLiteral('airport_Icon', sanitizer.bypassSecurityTrustHtml(airport_Icon));
  }

  ngOnInit(): void {
    this.searchOrder$ = this.store.select(selectSearchOrder) as Observable<UserOrder>;
    const search = JSON.parse(localStorage.getItem('search_result')!);
    const count = search.passengers.adults + search.passengers.child + search.passengers.infant;
    const range = search.rangeDate;

    const obj = {
      from: search.from.id,
      destination: search.destination.id,
      date: undefined,
      rangeDate: undefined,
      count
    }
    if(range) {
      obj.rangeDate = range
    } else {
      obj.date = search.date
    }

    this.searchService.getTicket(obj).subscribe((res)=>{
      this.flightArr = res.start
      this.flightReturnArr = res.end
      this.returnFlight = res.end
      this.selectedFlight = res.start[2]
      this.selectedReturnFlight = res.end[2]
    })

  }

  chooseFlightCarousel(flight:CarouselData, type?:string) {
    if(type) {
      this.selectedFlight = flight
    } else {
      this.selectedReturnFlight = flight
    }
  }

  chooseFlightSelect(check:boolean, type?: string) {
    if(type) {
      this.checkCarousel = check
    } else {
      this.checkReturnCarousel = check
    }
  }

  nextSection() {
    if(!this.returnFlight.length && !this.checkCarousel && !this.checkReturnCarousel) {
      this.route.navigate(['/booking/order'])
    } else if(!this.checkCarousel) {
      this.route.navigate(['/booking/order'])
    }
  }
}
