import { Component, Input, OnInit } from '@angular/core';


type DirectionType = 'goTo' | 'return'
@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.scss']
})
export class SelectFlightComponent implements OnInit{

  @Input() direction: DirectionType = 'goTo'
  utc = (new Date()).getTime() + (new Date().getTimezoneOffset() * 60000)
  myDate = new Date(77760000);

  hour = Math.floor(77760000/60/60/1000)

  ngOnInit(): void {

  }

}
