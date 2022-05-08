import { Subscribe } from './../../entities/Subsribe/subscribe.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'src/app/entities/Subsription/subscription.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubscriptionService {

  private subUrl: string;
  private addSubUrl : string
  private getSubUrl : string
  private changeSubUrl : string
  private saveSubUrl : string
  private deleteSubUrl : string

  constructor(private http: HttpClient) {
    this.subUrl = 'http://localhost:8081/Subscription/GetAll';
    this.addSubUrl = 'http://localhost:8081/Subscription/addsub';
    this.getSubUrl = 'http://localhost:8081/Subscription/getOne/';
    this.changeSubUrl = 'http://localhost:8081/Subscription/Modify';
    this.saveSubUrl = 'http://localhost:8081/Subscription/addsubscribe';
    this.deleteSubUrl = 'http://localhost:8081/Subscription/delete/';
  }

  public findAll(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.subUrl);
  }

  public save(sub: Subscription) {
    return this.http.post<Subscription>(this.addSubUrl, sub);
  }

  public getSubscription(id : any) : Observable<Subscription> {
    return this.http.get<Subscription>(this.getSubUrl+id)
  }
  public changeSubscription(sub: Subscription) {
    return this.http.post<Subscription>(this.changeSubUrl, sub)
  }
  public buySubscription(sub: Subscribe) {
    return this.http.post<Subscribe>(this.saveSubUrl, sub)
  }
  public deleteSubscription(id : any) : Observable<Subscription> {
    return this.http.get<Subscription>(this.deleteSubUrl+id)

  }
}