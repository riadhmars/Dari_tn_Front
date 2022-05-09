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
import { CrudAnnouncementComponent } from './crud-announcement/crud-announcement.component';
import { UpdateAnnouncementComponent } from './update-announcement/update-announcement.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CrudAnnouncementComponent,
    UpdateAnnouncementComponent,
    AnnouncementDetailsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
