import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const REFRESH_TOKEN_KEY = 'ref_token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private route: Router) { }

  signOut(): void {
    localStorage.clear();
    this.route.navigate(['/main'])
  }


  public getToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  }

}
