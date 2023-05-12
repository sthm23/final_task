import { Component, Input } from '@angular/core';
import { CarouselData } from 'src/app/material/interfaces/interfaces';

@Component({
  selector: 'app-order-title',
  templateUrl: './order-title.component.html',
  styleUrls: ['./order-title.component.scss']
})
export class OrderTitleComponent {

  @Input() direction!: string;
  @Input() flight!: CarouselData;
}
