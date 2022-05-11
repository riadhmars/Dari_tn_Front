import { Injectable, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visite } from '../visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {
  readonly baseURL =
    'http://localhost:8090/DariTn/Visitecontroller/visite';
  constructor(private httpClient: HttpClient) {}


  createVisite(visite: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, visite);
  }
  deleteVisite(visite: Object): Observable<Object> {  
    return this.httpClient.delete(`${this.baseURL}/delete-visite/${ɵAPP_ID_RANDOM_PROVIDER}`, { responseType: 'text' });  
  }  
}

