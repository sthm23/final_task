import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Airport, Country, CreateUser, LoginObj, LoginResult, LoginWithSocial, RegisterCountryType, User } from "src/app/material/interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class AuthLoginRegisterService {

  // url = 'http://localhost:3000';
  private readonly url = 'https://angular-final-task-server.onrender.com';

  constructor(private http: HttpClient) {}

  login(loginObj: LoginObj) {
    return this.http.post<LoginResult>(`${this.url}/auth/login`, loginObj)
  }

  register(userObj: CreateUser) {
    return this.http.post<User>(`${this.url}/auth/register`, userObj);
  }

  registerWithGoogle() {
    return this.http.get<LoginWithSocial>(`${this.url}/auth/google`)
  }

  registerWithFacebook() {
    return this.http.get<LoginWithSocial>(`${this.url}/auth/facebook`)
  }

  getCountry():Observable<RegisterCountryType[]> {
    return this.http.get<Country[]>(`${this.url}/country`)
      .pipe(
        map(el=>{
        return el.map(item=>({
          name: item.name,
          isoCode: item.isoCode,
          code: item.dialling_code
        }))
      }))
  }
}
