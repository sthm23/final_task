import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AuthModalResult, LoginResult, LoginWithSocial } from 'src/app/material/interfaces/interfaces';


type RouterUrl = '/main' | '/booking' | '/shop'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  isFormat = false;

  isActive = new FormControl('MM/DD/YYYY');

  dateFormatList = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/DD/MM', 'YYYY/MM/DD']

  currency = 'EUR'

  currencyList = ['EUR', 'USA', 'RUB', 'PLN']

  userName:string | null = null;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  toggleHeader = '/main'
  headerBgToggler = true;

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private route: Router,
    ) {}

  ngOnInit(): void {
    this.route.events.subscribe((e:any)=>{
      const urlObj = e?.routerEvent as NavigationEnd | undefined
      if(e?.routerEvent) {
        const str = urlObj?.url as RouterUrl;
        this.toggleHeader = str
        this.headerBgToggler = str === '/main'
      }
    })

    this.userName = localStorage.getItem('user_name');

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
      localStorage.clear();
      this.userName = null
    }

  }

  setUserDataToLocalStorage(data:LoginResult | LoginWithSocial) {
    const name =  `${data.user.firstName} ${data.user.lastName}`;
    this.userName = name
    localStorage.setItem('user_name', name);
    localStorage.setItem('ac_token', data.accessToken);
    localStorage.setItem('ref_token', data.refreshToken);
  }

  dropDown() {
    this.isFormat = !this.isFormat
  }

  chooseCurrency(currency: string) {
    this.currency = currency;
  }
}
