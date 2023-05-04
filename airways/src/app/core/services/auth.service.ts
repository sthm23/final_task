import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateUser, LoginObj, LoginResult, LoginWithSocial, User } from "src/app/material/interfaces/interfaces";


@Injectable({
  providedIn: 'root'
})
export class AuthLoginRegisterService {

  url = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  login(loginObj: LoginObj) {
    return this.http.post<LoginResult>(`${this.url}/login`, loginObj)
  }

  register(userObj: CreateUser) {
    return this.http.post<User>(`${this.url}/google`, userObj);
  }

  registerWithGoogle() {
    return this.http.get<LoginWithSocial>(`${this.url}/google`)
  }

  registerWithFacebook() {
    return this.http.get<LoginWithSocial>(`${this.url}/facebook`)
  }
}
