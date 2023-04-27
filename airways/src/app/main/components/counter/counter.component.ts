import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  counter = 0;

  decrementCounter(){
    this.counter = this.counter-1
    if(this.counter<=0) {
      this.counter = 0
    }
  }

  incrementCounter(){
    this.counter = this.counter+1
  }
}
