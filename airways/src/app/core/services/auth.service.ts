import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Airport, Country, CreateUser, LoginObj, LoginResult, LoginWithSocial, RegisterCountryType, User } from "src/app/material/interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class AuthLoginRegisterService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(loginObj: LoginObj) {
    return this.http.post<LoginResult>(`${this.url}/auth/login`, loginObj)
  }

  register(userObj: CreateUser) {
    return this.http.post<User>(`${this.url}/auth/register`, userObj);
  }

  updateUser(id:string, obj: any, token:string) {
    return this.http.patch(this.url + '/users/'+id, obj, {headers: {
      Authorization: `Bearer ${token}`
    }})
  }

  registerWithGoogle() {
    // let headers = new HttpHeaders();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');


    return this.http.get<LoginWithSocial>(`${this.url}/auth/google`) //, {headers})
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
