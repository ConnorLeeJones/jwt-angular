import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  text: string;
  user: User;
  cookieService: CookieService;


  constructor(cookieService: CookieService) { 
    this.cookieService = cookieService;
    this.text = "Home Screen"
  }

  ngOnInit() {
    // this.user = this.cookieService.get('token');
  }

}
