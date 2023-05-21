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
      newTrip.id - 1;
      const filtered = this.items.findIndex((val: CartInfo) => val.id === newTrip.id - 1);

      //delete from items
      this.items.splice(filtered, 1);

      // add to items and save to storage
      this.pushToItems([newTrip]);
      this.toLocalstorage();
    } else {
      this.pushToItems([newTrip]);
    }
  }

  pushToItems(item: CartInfo[]) {
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
