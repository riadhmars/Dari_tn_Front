import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { PaymentWithPaypalComponent } from './payment-with-paypal/payment-with-paypal.component';
import { PaymentWithCreditCardComponent } from './payment-with-credit-card/payment-with-credit-card.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    PaymentWithPaypalComponent,
   
    PaymentWithCreditCardComponent,
         PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
