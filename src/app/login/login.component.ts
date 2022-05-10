import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  email!: string;
  password!: string;
  message: any

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.loginService.login(this.email, this.password);
    resp.subscribe(data => {
      this.message = data;
   
    });
  }
}
