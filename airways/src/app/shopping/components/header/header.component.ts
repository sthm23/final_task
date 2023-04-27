import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from 'src/app/core/auth-modal/auth-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isFormat = false;

  isActive = new FormControl('MM/DD/YYYY');

  dateFormatList = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/DD/MM', 'YYYY/MM/DD']

  currency = 'EUR'

  currencyList = ['EUR', 'USA', 'RUB', 'PLN']

  constructor(public dialog: MatDialog) {}

  openAuthDialog() {
    const dialogRef = this.dialog.open(AuthModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  dropDown() {
    this.isFormat = !this.isFormat
  }

  onCheckDate(format: string) {
    // this.isActive = this.dateFormatService.chechFormat(format);
    this.isFormat = false;
  }

  chooseCurrency(currency: string) {
    this.currency = currency;
  }
}
