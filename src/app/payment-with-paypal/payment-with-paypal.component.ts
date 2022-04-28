import { Component, OnInit } from '@angular/core';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-payment-with-paypal',
  templateUrl: './payment-with-paypal.component.html',
  styleUrls: ['./payment-with-paypal.component.css']
})
export class PaymentWithPaypalComponent implements OnInit {

  constructor() {
   
   render(

    { id: "#myPaypalButtons",
    currency: "USD",
    value: "100.00",
    onApprove:(details) => { alert("Transaction Successful");}
  }
   );

   }

  ngOnInit(): void {
  }

}
