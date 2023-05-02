import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { no_reys } from './icon';

@Component({
  selector: 'app-carousel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {

  // flightList = [
  //   {
  //     id: 1,
  //     from: '2022-10-10T09:26:32Z',
  //     price: '257',
  //     currency: '$'
  //   },
  //   {
  //     id: 1,
  //     from: '2022-10-13T09:26:32Z',
  //     price: '257',
  //     currency: '$'
  //   },
  //   {
  //     id: 1,
  //     from: '2022-10-16T09:26:32Z',
  //     price: '257',
  //     currency: '$'
  //   },
  //   {
  //     id: 1,
  //     from: '2022-10-15T09:26:32Z',
  //     price: '257',
  //     currency: '$'
  //   }
  // ];
  currentIndex = 3

  days!: {day:Date, id:number}[];
  @Input() flightList!: any[];
  @Input() chosenFlightDay!: any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('no_reys', sanitizer.bypassSecurityTrustHtml(no_reys));
  }

  ngOnInit(): void {
    this.days = this.createCarouselDates();
  }

  selectCard(e:HTMLButtonElement, day:{day:Date, id:number}){
    this.currentIndex = day.id
    e.classList.toggle('active-card');
  }

  createDay(currentDay: Date, day:number) {
    const now = new Date(currentDay);
    const now2 = new Date(currentDay);
    const yes = now2.setDate(now.getDate()+day);
    return new Date(yes);
  }

  createCarouselDates() {
    const currentDay = new Date(this.chosenFlightDay.from);
    const yesterday = this.createDay(currentDay, -1);
    const yesterday1 = this.createDay(currentDay, -2);
    const tomorrow = this.createDay(currentDay, 1);
    const tomorrow1 = this.createDay(currentDay, 2);
    return [{id:1, day: yesterday1}, {id:2, day: yesterday}, {id:3, day: currentDay}, {id:4, day: tomorrow}, {id:5, day: tomorrow1},]
  }
}
