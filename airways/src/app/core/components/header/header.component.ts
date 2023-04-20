import { Component } from '@angular/core';
import { DateFormatService } from '../../services/date-format.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isFormat = false;

  isActive = 'MM/DD/YYYY';

  currency = 'EUR'

  constructor(private dateFormatService: DateFormatService) { }

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
