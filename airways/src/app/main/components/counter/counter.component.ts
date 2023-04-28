import { Component, Input, OnInit } from '@angular/core';
import { PassengersService } from '../../services/passengers.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() age!: string;
  @Input() counter!: number;

  constructor(private passengerService: PassengersService) { }

  ngOnInit(): void {
    return;
  }
  decrementCounter() {
    this.counter = this.counter - 1
    if (this.counter <= 0) {
      this.counter = 0
    }
    this.passengerService.summaryPassengers(this.counter, this.age);
  }

  incrementCounter() {
    this.counter = this.counter + 1
    this.passengerService.summaryPassengers(this.counter, this.age);
  }
}
