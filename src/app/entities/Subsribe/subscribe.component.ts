import { Component } from '@angular/core';
import { Subscription } from '../Subsription/subscription.component';


@Component({
    selector: 'app-subscribe',
    templateUrl : './subscribe.component.html'
})

export class Subscribe {
    subscription: Subscription = new Subscription;
    dateD!: Date;
    paid: boolean = false;



}