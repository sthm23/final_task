import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';


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

  }

  openAuthDialog() {
    const dialogRef = this.dialog.open(AuthModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dropDown() {
    this.isFormat = !this.isFormat
  }

  chooseCurrency(currency: string) {
    this.currency = currency;
  }
}
