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

  currentIndex = 3

  days!: {day:Date, id:number, check: boolean}[];
  @Input() flightList!: any[];
  @Input() chosenFlightDay!: any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('no_reys', sanitizer.bypassSecurityTrustHtml(no_reys));
  }

  ngOnInit(): void {
    this.days = this.createCarouselDates();
    this.currentIndex = this.chosenFlightDay.id
  }

  selectCard(e:HTMLButtonElement, day:{day:Date, id:number}){
    this.currentIndex = day.id
    e.classList.add('active-card');
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
    return [{id:1, day: yesterday1, check: true}, {id:2, day: yesterday, check: false}, {id:3, day: currentDay, check: true}, {id:4, day: tomorrow, check: false}, {id:5, day: tomorrow1, check: true},]
  }
}
