import { Component, ViewEncapsulation } from '@angular/core';
import { DateFormatService } from '../../services/date-format.service';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  isFormat = false;

  isActive = new FormControl('MM/DD/YYYY');

  dateFormatList = ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY/DD/MM', 'YYYY/MM/DD']

  currency = 'EUR'

  constructor(private dateFormatService: DateFormatService, public dialog: MatDialog) {}

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
