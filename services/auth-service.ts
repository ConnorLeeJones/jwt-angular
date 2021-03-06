import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './node_modules/src/environments/environment';
import { TokenService } from './token-service';

export class AuthService {
    public authUrl: string;
    public newUserUrl: string;
  
    constructor(private http: HttpClient, private tokenService: TokenService) {
      this.authUrl = environment.apiUrl + '/signin';
      this.newUserUrl = environment.apiUrl + '/signup';
    }
  
  
    signin(username: string, password: string): Observable <string> {
      return this.http.post(this.authUrl, {}, {
        params: {username, password},
        responseType: 'text'
      });
    }
  
    signup(user: User): Observable <string> {
      return this.http.post(this.newUserUrl, user, {responseType: 'text'});
    }


}
