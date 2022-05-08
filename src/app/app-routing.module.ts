import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { SubscribeComponent } from './page/Subscribes/subscribe.component';

const routes: Routes = [
  { path: 'home', component: PageComponent },
  { path: 'subscribe/:id', component: SubscribeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
