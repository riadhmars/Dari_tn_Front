import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //baseUrl="http://localhost:8082/api/v1/registration"
  readonly API_URL ='http://localhost:8082';
  constructor(private httpClient:HttpClient) {}


  registerUser(user:User): Observable<Object>{
    console.log(user);
    return this.httpClient.post('http://localhost:8082/api/v1/registration',user)
0   
  }
}
