import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class SearchTicketService {
  private readonly url = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  getTicket(body: any) {
    return this.http.post(`${this.url}/country`, body);
  }
}
