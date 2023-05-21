import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Airport, CarouselData, Country } from "src/app/material/interfaces/interfaces";

@Injectable({
  providedIn: 'platform'
})
export class HttpRequestService {
  // private readonly url = 'http://localhost:3000';
  private readonly url = 'https://angular-final-task-server.onrender.com';

  constructor(private http: HttpClient) {}

  getAllCountry() {
    return this.http.get<Country[]>(this.url+'/country')
  }

  getAllAirport() {
    return this.http.get<Airport[]>(this.url+'/airport')
  }

  getTicket(body: any) {
    return this.http.post<{start: CarouselData[], end: CarouselData[]}>(`${this.url}/airport`, body);
  }
}
