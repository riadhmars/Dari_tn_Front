import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { SubscribeComponent } from './page/Subscribes/subscribe.component';
import { SubscriptionService } from './services/subscriptionService/subscription.service';
import { Modal } from './page/ModalForSub/modal.component';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MyFilterPipe } from './page/pipes/my-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SubscribeComponent,
    Modal,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    [
      MDBBootstrapModule.forRoot()
  ],
    ReactiveFormsModule
  ],
  providers: [SubscriptionService
  ,  { provide: MAT_DIALOG_DATA, useValue: {} },
  { provide: MatDialogRef, useValue: {} },
  {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})

export class AppModule { }
