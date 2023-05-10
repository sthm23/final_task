import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarouselData } from 'src/app/material/interfaces/interfaces';


type DirectionType = 'goTo' | 'return'
@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.scss']
})
export class SelectFlightComponent {

  @Input() direction: DirectionType = 'goTo'
  @Input() flight!: CarouselData;
  @Output() selectedFlight: EventEmitter<boolean> = new EventEmitter();

  checkSelect = true

  setDuration(time:number) {
    const minute = new Date(time)
    const hour =  Math.floor(time/60/60/1000)
    return { minute, hour}
  }

  selectFlight() {
    this.checkSelect = !this.checkSelect
    this.selectedFlight.emit(this.checkSelect)
  }

}
