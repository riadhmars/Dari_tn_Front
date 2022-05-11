import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
//import { CrudAnnouncementComponent } from './crud-announcement/crud-announcement.component';
import { PageComponent } from './page/page.component';
//import { UpdateAnnouncementComponent } from './update-announcement/update-announcement.component';


import { AuthComponent } from './page/auth/auth.component';

import { ReserveComponent } from './page/reserve/reserve.component';
//import { MapComponent } from './page/map/map.component';

import { PayementComponent } from './page/payement/payement.component';

const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'auth', component: AuthComponent },
  //{ path: 'map', component: MapComponent },
  {path: 'visite/:id', component: ReserveComponent},
  {path: 'checkout', component: PayementComponent},
 // { path: 'crud-announcement', component: CrudAnnouncementComponent },
 // { path: 'update-announcement/:id', component: UpdateAnnouncementComponent },
  //{ path: 'announcement-details/:id', component: AnnouncementDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
