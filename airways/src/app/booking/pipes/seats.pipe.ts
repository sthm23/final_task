import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seats'
})
export class Seats implements PipeTransform {

  transform(seats: number): string {
    const seat = ['A', 'B', 'C'];
    const sortSeats = seat.sort(() => (Math.random() > .5) ? 1 : -1);
    return `${Math.floor(Math.random() * 100)}${sortSeats[0]}`;
  }
}
