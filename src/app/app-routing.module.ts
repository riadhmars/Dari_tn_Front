import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [ { path: '', component: PageComponent },
  {path: 'reserve', component: ReserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
