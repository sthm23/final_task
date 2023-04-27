import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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

  passenger = false;
  @ViewChild('option', { static: false }) element!: ElementRef;
  @ViewChild('options', { static: false }) options!: ElementRef;

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    if (this.element.nativeElement.contains(e.target)) {
      this.passenger = !this.passenger;
    }
    else if(this.options?.nativeElement.contains(e.target)){
      this.passenger = true;
    }
    else {
      this.passenger = false;
    }
  }

  selectFlightType(event: MatRadioChange) {
    this.flightType = event.value;
  }

  // onToggleSelect() {
  //   this.passenger = !this.passenger;
  // }
}
