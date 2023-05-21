import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { no_reys } from './icon';
import { CarouselData } from 'src/app/material/interfaces/interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {

  currentIndex = 3

  widthCounter = 0

  @Input() flightList: CarouselData[] = [];
  @Input() chosenFlightDay!: CarouselData;
  @Output() selectedFlight: EventEmitter<CarouselData> = new EventEmitter();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('no_reys', sanitizer.bypassSecurityTrustHtml(no_reys));
  }

  ngOnInit(): void {
   this.currentIndex = this.flightList.findIndex(el=>this.chosenFlightDay.id === el.id) + 1;
  }

  checkStyle(day: CarouselData, currentIndex: number) {
    if(day.id === currentIndex && day.seats <= 130 && day.seats >= 130/2) {
      return 1
    }
    if(day.id === currentIndex && day.seats <= 130/2 && day.seats >= 11) {
      return 2
    }
    if(day.id === currentIndex && day.seats <= 10) {
      return 3
    }
   return false
  }

  selectCard(e:HTMLButtonElement, day:CarouselData){
    this.currentIndex = day.id
    this.selectedFlight.emit(day);
  }

  nextBtn(el:HTMLElement) {
    if(this.widthCounter === -900) {
      return
    }
    this.widthCounter -= 225;
    el.style.left = this.widthCounter + 'px';
  }

  prevBtn(el:any) {
    if(this.widthCounter === 0) {
      return
    }
    this.widthCounter += 225
    el.style.left = this.widthCounter + 'px';
  }
}
