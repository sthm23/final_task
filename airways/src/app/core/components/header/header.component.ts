import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthModalResult, CurrencyType, LoginResult, LoginWithSocial, User } from 'src/app/material/interfaces/interfaces';
import { Store } from '@ngrx/store';
import { selectDate, selectCurrency, selectUser } from 'src/app/redux/selectors/airways.selector';
import { loginAction, selectCurrencyAction, selectTypeOfDateAction } from 'src/app/redux/actions/airways.action';
import { Observable } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { CdkStep, CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

type RouterUrl = '/main' | '/booking' | '/shop'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class HeaderComponent implements OnInit {

  currencyList:CurrencyType[] = ['EUR', 'USA', 'RUB', 'PLN']
  dateFormatList = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/DD/MM', 'YYYY/MM/DD']

  isActive$ = this.store.select(selectDate)
  currency$:Observable<CurrencyType> = this.store.select(selectCurrency);

  userName: string | null = null;

  toggleHeader = '/main'
  headerBgToggler = true;

  @ViewChild('stepper') private stepper!: MatStepper;

  constructor(
    public dialog: MatDialog,
    private route: Router,
    private store: Store,
    ) {}

  ngOnInit(): void {
    this.route.events.subscribe((e:any)=>{
      const urlObj = e?.routerEvent as NavigationEnd | undefined
      if(e?.routerEvent) {
        const str = urlObj?.url as any;
        this.toggleHeader = str
        this.headerBgToggler = str === '/main'

        if(str==='/booking') {
          setTimeout(() => {
            this.stepper.reset()
          }, 0);
        }
        if(str === '/booking/order') {
          setTimeout(() => {
            this.stepper.reset();
            this.stepper.next()
          }, 0);
        }
        if(str==='/booking/summary') {
          setTimeout(() => {
            this.stepper.selectedIndex = 2
          }, 0);
        }

      }
    })

    this.store.select(selectUser).subscribe(user => {
      const userString = localStorage.getItem('user_name');
      if(userString) {
        const user = JSON.parse(userString) as User;
        this.userName = `${user.firstName} ${user.lastName}`;
      } else {
        if(user) {
          this.userName = `${user.firstName} ${user.lastName}`
        } else {
          this.userName = user
        }
      }
    })
  }

  nextStep(e:MatStepper) {
    if(e.selectedIndex === 0) {
      e.reset()
      this.route.navigate(['booking'])
    }
    if(e.selectedIndex === 1) {
      e.reset()
      e.next()
      this.route.navigate(['booking/order'])
    }
    if(e.selectedIndex === 2) {
      e.selectedIndex = 2
      this.route.navigate(['booking/summary'])
    }
  }

  openAuthDialog() {
    if(!this.userName) {
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
    } else {
      this.route.navigate(['user'])
    }

  }

  setUserDataToLocalStorage(data:LoginResult | LoginWithSocial) {
    this.store.dispatch(loginAction({user: data.user}))
    localStorage.setItem('user_name', JSON.stringify(data.user));
    localStorage.setItem('ac_token', data.accessToken);
    localStorage.setItem('ref_token', data.refreshToken);
  }

  chooseCurrency(currency: CurrencyType) {
    this.store.dispatch(selectCurrencyAction({currency}));
  }

  selectDate(e: MatSelectChange ) {
    this.store.dispatch(selectTypeOfDateAction({typeOfDate: e.value}))
  }
}
