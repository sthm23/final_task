import { Injectable } from '@angular/core';
import { CartInfo } from 'src/app/material/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartInfo[] = [];

  constructor() {
    console.log('cart serc');
  }

  addToCart(newTrip: CartInfo) {
    this.items.push(newTrip);
    localStorage.setItem('cart-items', JSON.stringify(this.items));
  }

  get getCartItems() {
    return this.items;
  }


}
