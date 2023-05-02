import { Component, Input, OnInit } from '@angular/core';


type DirectionType = 'goTo' | 'return'
@Component({
  selector: 'app-select-flight',
  templateUrl: './select-flight.component.html',
  styleUrls: ['./select-flight.component.scss']
})
export class SelectFlightComponent implements OnInit{

  @Input() direction: DirectionType = 'goTo'


  ngOnInit(): void {

  }

}
