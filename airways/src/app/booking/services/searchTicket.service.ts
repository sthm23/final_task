import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarouselData } from "src/app/material/interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class SearchTicketService {
  private readonly url = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  getTicket(body: any) {
    return this.http.post<{start: CarouselData[], end: CarouselData[]}>(`${this.url}/airport`, body);
  }
}
