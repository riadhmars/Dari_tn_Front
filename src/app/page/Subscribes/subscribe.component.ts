import { Component } from "@angular/core";
import { SubscriptionService } from "src/app/services/subscriptionService/subscription.service";
import { Subscription } from "src/app/entities/Subsription/subscription.component";
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';


@Component({
    selector : 'app-subscribe',
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent {
    changeSubForm!: FormGroup;
    baseUrl : String = "http"
    subscription!: Subscription; 
    title!: string;
    description!: string;
    price!: number;
    id :string | null | undefined
    constructor(private _fb: FormBuilder, private subscriptionService: SubscriptionService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id)
      this.subscriptionService.getSubscription(this.id).subscribe(data => {
        this.changeSubForm= this._fb.group({  
          idSub : this.id,
          title : data.title,
          description : data.description,
          price : data.price ,
      });  
        this.subscription = data;
      });
    
      }
    successNotification() {
        Swal.fire('Dear Sir', 'Your info has been sucessfully changed!', 'success');
      }
    changeSub(e:any) {
      this.subscriptionService.changeSubscription(e).subscribe(data => {
        this.successNotification()
    })
  }
}