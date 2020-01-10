import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
