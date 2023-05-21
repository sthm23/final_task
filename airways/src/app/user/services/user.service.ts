import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CartInfo } from "src/app/material/interfaces/interfaces";
// import { CartInfo } from '../pages/user-table/user-table.component';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {

  }

  updateUser(id:string, obj: any, token:string) {
    return this.http.patch(this.url + '/users/'+id, obj, {headers: {
      Authorization: `Bearer ${token}`
    }})
  }

  get getData(): CartInfo[] {
    return JSON.parse(localStorage.getItem('cart-items')!);
  }
}
