import { EventEmitter, Injectable, Output } from '@angular/core';

enum PassengerType {
  Adult = 'adult',
  Child = 'child',
  Infant = 'infant'
}

@Injectable({
  providedIn: 'root'
})
export class PassengersService {
  @Output() adult = new EventEmitter<number>();
  @Output() child = new EventEmitter<number>();
  @Output() infant = new EventEmitter<number>();

  summaryPassengers(count: number, type: string) {
    switch (type) {
      case PassengerType.Adult:
        this.adult.emit(count);
        break;
      case PassengerType.Child:
        this.child.emit(count);
        break;
      case PassengerType.Infant:
        this.infant.emit(count);
        break;
      default:
        break;
    }
  }

}
