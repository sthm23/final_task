import { Injectable } from '@angular/core';
import { CartInfo } from 'src/app/material/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items!: CartInfo[];

  constructor() {
    this.items = this.oldItem().length > 0 ? this.oldItem() : [];
  }

  addToCart(newTrip: CartInfo) {
    if (this.items.length > 0) {
      for (const key in newTrip) {
        console.log(key);
        if (this.items.length > 0) {
          if (key === 'price') {
            const filtered = this.items.find((val: CartInfo) => val.price === newTrip.price);
            this.pushToItems(filtered?.price ? [] : [newTrip]);
          } else if (key === 'flightType') {
            const filtered = this.items.find((val: CartInfo) => val.flightType === newTrip.flightType);
            this.pushToItems(filtered?.price ? [] : [newTrip]);
          } else if (key === 'flightNumber') {
            const filtered = this.items.find((val: CartInfo) => val.flightNumber === newTrip.flightNumber);
            this.pushToItems(filtered?.price ? [] : [newTrip]);
          }
        } else {
          this.pushToItems([newTrip]);
        }
      }
    } else {
      this.pushToItems([newTrip]);
    }
  }

  pushToItems(item: CartInfo[]) {
    console.log(this.items);
    this.items.push(...item);
    this.toLocalstorage();
  }

  toLocalstorage() {
    localStorage.setItem('cart-items', JSON.stringify(this.items));
  }

  oldItem(): CartInfo[] {
    return JSON.parse(localStorage.getItem('cart-items')!);
  }
}
