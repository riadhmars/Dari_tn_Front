import { Component } from "@angular/core";
import { Subscribe } from "../Subsribe/subscribe.component";

@Component({
    selector: 'subscription-list',
    templateUrl: './subscription.component.html'
})

export class Subscription {
    id!: number;
    title!: string;
    description!: string;
    price!: number;
    subsribes: Subscribe[] = []
}