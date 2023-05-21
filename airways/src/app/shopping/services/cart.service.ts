import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartInfo, CartInfoResult } from 'src/app/material/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:CartInfo[] = []
  url = 'http://localhost:3000'
  constructor(private http:HttpClient) {

  }

  addToCart(newTrip: CartInfoResult) {
    return this.http.post<CartInfo[]>(this.url+'/user-info', newTrip)
  }

  getAllTrips() {
    return this.http.get<CartInfoResult[]>(this.url+'/user-info')
  }

  getOneTrips(id:string) {
    return this.http.get<CartInfoResult>(this.url+'/user-info/'+id)
  }

  removeTrip(id:string) {
    return this.http.delete<CartInfoResult[]>(this.url+'/user-info/'+id)
  }

  // pushToItems(item: CartInfo[]) {
  //   // console.log(this.items);
  //   this.items.push(...item);
  //   this.toLocalstorage();
  // }

  // toLocalstorage() {
  //   localStorage.setItem('cart-items', JSON.stringify(this.items));
  // }

  // oldItem(): CartInfo[] {
  //   const arr = localStorage.getItem('cart-items');
  //   if(arr) {
  //     return JSON.parse(arr);
  //   }else {
  //     return []
  //   }
  // }
}
