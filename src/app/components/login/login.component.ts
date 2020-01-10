import { Component, Input, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User = new User();


  username: string;
  password: string;

  authService: AuthService;
  tokenService: TokenService;
  cookieService: CookieService;

  constructor(authService: AuthService, tokenService: TokenService, cookieService: CookieService) {
    this.authService = authService;
    this.tokenService = tokenService;
    this.cookieService = cookieService;
   }

  ngOnInit() {
    this.cookieService.check('token');
    this.tokenService.token = this.cookieService.get('token');
  }

  onSubmit() {
    this.authService.signin(this.user.username, this.user.password).subscribe(jwt => {
      this.tokenService.token = jwt;
      this.cookieService.set('token', this.tokenService.token);
      this.cookieService.set('username', this.user.username)
    });
  }

}
