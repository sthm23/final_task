import { Component } from '@angular/core';
import { DateFormatService } from '../../services/date-format.service';
import { AuthModalComponent } from '../../auth-modal/auth-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isFormat = false;

  isActive = 'MM/DD/YYYY';

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
    this.isActive = this.dateFormatService.chechFormat(format);
    this.isFormat = false;
  }

  chooseCurrency(currency: string) {
    this.currency = currency;
  }
}
