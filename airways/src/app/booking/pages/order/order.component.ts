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
  returnFlight:CarouselData[] = []
  selectedFlight!:CarouselData;
  selectedReturnFlight!:CarouselData;

  searchOrder$!:Observable<UserOrder>;

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
    this.searchService.getTicket({
      from: search.from.id,
      destination: search.destination.id,
      date: search.date,
      count:2
    }).subscribe((res)=>{
      this.flightArr = res.start
      this.returnFlight = res.end
      this.selectedFlight = res.start[3]
      this.selectedReturnFlight = res.end[3]
    })

  }

  chooseFlight(flight:CarouselData) {
    console.log(flight);

  }

  nextSection() {
    this.route.navigate(['/booking/order'])
  }
}
