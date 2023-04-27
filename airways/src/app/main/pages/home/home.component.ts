import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  from = 'option2';
  destination = 'option1'
  passangers = 'option1'
  flightType = '1'
  passengerText = ''

  constructor(private passengerService: PassengersService) { }

  adult = 0;
  child = 0;
  infant = 0;

  passenger = false;
  @ViewChild('option', { static: false }) element!: ElementRef;
  @ViewChild('options', { static: false }) options!: ElementRef;

  @HostListener('click', ['$event']) onClick(e: MouseEvent) {
    this.passengerText = `${this.adult} Adults, ${this.child} Child, ${this.infant} Infant`
    if (this.element.nativeElement.contains(e.target)) {
      this.passenger = !this.passenger;
    }
    else if (this.options?.nativeElement.contains(e.target)) {
      this.passenger = true;
    }
    else {
      this.passenger = false;
    }
  }

  ngOnInit(): void {
    this.passengerService.adult.subscribe(val => {
      this.adult = val
    })
    this.passengerService.child.subscribe(val => {
      this.child = val
    })
    this.passengerService.infant.subscribe(val => {
      this.infant = val
    });
  }

  selectFlightType(event: MatRadioChange) {
    this.flightType = event.value;
  }
}
