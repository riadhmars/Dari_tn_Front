import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dari_tn';
  user_id:any = 2;

  constructor( ){

     //let token = 2;

     //localStorage.setItem('token', token);

      } 


      auth(){
       alert('je suis connecter');
      }


}
