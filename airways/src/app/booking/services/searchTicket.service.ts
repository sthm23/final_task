import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CarouselData, Country } from "src/app/material/interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class SearchTicketService {
  private readonly url = 'http://localhost:3000';


  constructor(private http: HttpClient) {}

  getTicket(body: any) {
    return this.http.post<{start: CarouselData[], end: CarouselData[]}>(`${this.url}/airport`, body);
  }

  getPhoneNumbers() {
    return this.http.get<Country[]>(`${this.url}/country`).pipe(
      map(item=>item.map(el=>({code:el.dialling_code, name: el.name})))
    )
  }
}
