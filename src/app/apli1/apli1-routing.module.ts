import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Apli1ListComponent } from './apli1-list/apli1-list.component';
import { Apli1DetailComponent } from './apli1-detail/apli1-detail.component';

const routes: Routes = [
  {
    path: '',
    component: Apli1ListComponent
  },
  { path: 'detail', component: Apli1DetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Apli1RoutingModule {}
