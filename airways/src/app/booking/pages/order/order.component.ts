import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { airplane_icon, airport_Icon } from './icon';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectSearchOrder, selectUser } from 'src/app/redux/selectors/airways.selector';
import { User, UserOrder } from 'src/app/redux/state.model';
import { SearchTicketService } from '../../services/searchTicket.service';
import { AuthModalResult, CarouselData, LoginResult, LoginWithSocial } from 'src/app/material/interfaces/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { chooseTicketAction, enterMain, loginAction } from 'src/app/redux/actions/airways.action';
import { AuthModalComponent } from 'src/app/core/auth-modal/auth-modal.component';

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

  user:User | null = null;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private route: Router,
    private store: Store,
    private searchService: SearchTicketService,
    private dialog: MatDialog,
    ) {
    iconRegistry.addSvgIconLiteral('airplane_icon', sanitizer.bypassSecurityTrustHtml(airplane_icon));
    iconRegistry.addSvgIconLiteral('airport_Icon', sanitizer.bypassSecurityTrustHtml(airport_Icon));
  }

  ngOnInit(): void {
    this.searchOrder$ = this.store.select(selectSearchOrder) as Observable<UserOrder>;
    // const search = JSON.parse(localStorage.getItem('search_result')!);
    // const count = search.passengers.adults + search.passengers.child + search.passengers.infant;
    // const range = search.rangeDate;
    const ticket_result = JSON.parse(localStorage.getItem('ticket_result')!) as {start: CarouselData[], end: CarouselData[]};
    this.flightArr = ticket_result.start
    this.flightReturnArr = ticket_result.end
    this.returnFlight = ticket_result.end
    this.selectedFlight = ticket_result.start[2]
    this.selectedReturnFlight = ticket_result.end[2]

    const user_json = localStorage.getItem('user_name');
    let user: User | null = null
    if(user_json) {
      user = JSON.parse(user_json) as User;
    }
    this.store.dispatch(enterMain({user}));
    this.store.select(selectUser).subscribe(user=>{
      this.user = user
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
    if(!this.returnFlight.length && !this.checkCarousel && !this.checkReturnCarousel && this.user !== null) {
      localStorage.setItem('ticket', JSON.stringify({from: this.selectedFlight, return: this.selectedReturnFlight}))
      this.store.dispatch(chooseTicketAction({
        ticket: {
          from: this.selectedFlight,
          return: this.selectedReturnFlight
        }
      }))
      this.route.navigate(['/booking/order'])
    } else if(!this.checkCarousel && this.user !== null) {
      localStorage.setItem('ticket', JSON.stringify({from: this.selectedFlight, return: this.selectedReturnFlight}))
      this.store.dispatch(chooseTicketAction({
        ticket: {
          from: this.selectedFlight,
          return: this.selectedReturnFlight
        }
      }))
      this.route.navigate(['/booking/order'])
    } else {
      this.openAuthDialog()
    }
  }

  openAuthDialog() {
    const dialogRef = this.dialog.open(AuthModalComponent);

    dialogRef.afterClosed().subscribe((answer: AuthModalResult | undefined) => {
      if(answer) {
        const {type, result} = answer;
        switch (type) {
          case 'facebook':
            this.setUserDataToLocalStorage(result)
            break;
          case 'google':
            this.setUserDataToLocalStorage(result)
            break;
          case 'login':
            this.setUserDataToLocalStorage(result)
            break;
          default:
              break;
        }
      }
    });
  }

  setUserDataToLocalStorage(data:LoginResult | LoginWithSocial) {
    this.store.dispatch(loginAction({user: data.user}))
    localStorage.setItem('user_name', JSON.stringify(data.user));
    localStorage.setItem('ac_token', data.accessToken);
    localStorage.setItem('ref_token', data.refreshToken);
    localStorage.setItem('ticket', JSON.stringify({from: this.selectedFlight, return: this.selectedReturnFlight}))
    this.store.dispatch(chooseTicketAction({
      ticket: {
        from: this.selectedFlight,
        return: this.selectedReturnFlight
      }
    }))
    this.route.navigate(['/booking/order'])
  }
}
