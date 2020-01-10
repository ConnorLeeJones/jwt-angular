import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: User;

  constructor(public authService: AuthService, private tokenService: TokenService) {
    this.user = new User();
  }

  ngOnInit() {
  }


  onSubmit() {
    this.authService.signup(this.user).subscribe(jwt => this.tokenService.token = jwt);
    console.log(this.tokenService.token)
  }

}
