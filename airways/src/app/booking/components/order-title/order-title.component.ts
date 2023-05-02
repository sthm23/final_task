import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-title',
  templateUrl: './order-title.component.html',
  styleUrls: ['./order-title.component.scss']
})
export class OrderTitleComponent {

  @Input() direction!: string;
}
