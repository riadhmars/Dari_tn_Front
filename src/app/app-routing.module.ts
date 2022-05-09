import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { CrudAnnouncementComponent } from './crud-announcement/crud-announcement.component';
import { PageComponent } from './page/page.component';
import { UpdateAnnouncementComponent } from './update-announcement/update-announcement.component';

const routes: Routes = [
  { path: 'announcements', component: PageComponent },
  { path: 'crud-announcement', component: CrudAnnouncementComponent },
  { path: 'update-announcement/:id', component: UpdateAnnouncementComponent },
  { path: 'announcement-details/:id', component: AnnouncementDetailsComponent },
  { path: '', redirectTo: 'announcements', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
