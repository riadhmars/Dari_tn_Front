import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User= new User()
  constructor(private registerService: RegisterService ) { }

  ngOnInit(): void {
  }
  userRegister(){
    console.log(this.user);
    this.registerService.registerUser(this.user).subscribe(data=>{ alert("Successfully User id registred?")},
    error=>alert("Sorry User not registered"));
    

  }

}
