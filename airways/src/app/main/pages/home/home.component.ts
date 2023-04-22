import { Component } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  from = 'option2';
  destination = 'option1'
  passangers = 'option1'
  flightType = '1'

  selectFlightType(event: MatRadioChange) {
    this.flightType = event.value;
  }
}
