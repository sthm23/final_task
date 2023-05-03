import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "src/app/material/interfaces/interfaces";

@Injectable({
  providedIn: 'platform'
})
export class HttpRequestService {
  private readonly url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllCountry() {
    return this.http.get<Country[]>(this.url+'/country')
  }
}
