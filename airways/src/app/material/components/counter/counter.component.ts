import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @Input() counter!: number;
  @Output() counterChange:EventEmitter<number> = new EventEmitter();

  decrementCounter() {
    this.counter = this.counter - 1
    if (this.counter <= 0) {
      this.counter = 0
    }
    this.counterChange.emit(this.counter)
  }

  incrementCounter() {
    this.counter = this.counter + 1
    this.counterChange.emit(this.counter)
  }
}
