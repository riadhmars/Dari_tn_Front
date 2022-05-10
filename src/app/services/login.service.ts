import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

login(email:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email+ ':' + password) });
  return this.http.get("http://localhost:8080/",{headers,responseType: 'text' as 'json'})
}

 
  


}