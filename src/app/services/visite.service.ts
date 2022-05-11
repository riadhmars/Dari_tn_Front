import { Injectable } from '@angular/core';
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


   addVisite(visite: Visite): Observable<Object> {
    return this.httpClient.post<Visite[]>(this.baseURL, visite);
  }
}

