import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-passengers-card',
  templateUrl: './passengers-card.component.html',
  styleUrls: ['./passengers-card.component.scss']
})
export class PassengersCardComponent {
  @Input() passenger!: {title: string};
}
