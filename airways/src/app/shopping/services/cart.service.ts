import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartInfo, CartInfoResult } from 'src/app/material/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:CartInfo[] = []
  // url = 'http://localhost:3000'
  private readonly url = 'https://angular-final-task-server.onrender.com';

  cartNumber = new BehaviorSubject<number>(0)
  constructor(private http:HttpClient) {}

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

}
