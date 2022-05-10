import { NgModule } from '@angular/core';
import {
  HttpClient,
  HttpClientModule,
  HttpEventType,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { CrudAnnouncementComponent } from './crud-announcement/crud-announcement.component';
import { UpdateAnnouncementComponent } from './update-announcement/update-announcement.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CrudAnnouncementComponent,
    UpdateAnnouncementComponent,
    AnnouncementDetailsComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxDropzoneModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
