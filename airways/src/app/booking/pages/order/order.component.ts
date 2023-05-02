import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { airplane_icon, airport_Icon } from './icon';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  flightArr = [
    {
      id: 1,
      from: '2022-10-10T09:26:32Z',
      price: '257',
      currency: '$'
    },
    {
      id: 2,
      from: '2022-10-13T09:26:32Z',
      price: '257',
      currency: '$'
    },
    {
      id: 3,
      from: '2022-10-16T09:26:32Z',
      price: '257',
      currency: '$'
    },
    {
      id: 4,
      from: '2022-10-15T09:26:32Z',
      price: '257',
      currency: '$'
    }
  ]

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('airplane_icon', sanitizer.bypassSecurityTrustHtml(airplane_icon));
    iconRegistry.addSvgIconLiteral('airport_Icon', sanitizer.bypassSecurityTrustHtml(airport_Icon));
  }
}
