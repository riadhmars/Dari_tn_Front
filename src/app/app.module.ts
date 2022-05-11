import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpEventType,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { ReserveComponent } from './page/reserve/reserve.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    ReserveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
