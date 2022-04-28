import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { PaymentWithCreditCardComponent } from './payment-with-credit-card/payment-with-credit-card.component';
import { PaymentWithPaypalComponent } from './payment-with-paypal/payment-with-paypal.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [

  {  component:PageComponent,
    path:''
  },
  
  {  component:PaymentComponent,
    path:'payment'
  },

  
  {  component:PaymentWithCreditCardComponent,
    path:'payment/payment-with-credit-card'
  }
  ,

  
  {  component:PaymentWithPaypalComponent,
    path:'payment/payment-with-paypal'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
