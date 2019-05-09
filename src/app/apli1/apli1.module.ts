import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Apli1RoutingModule } from './apli1-routing.module';
import { Apli1ListComponent } from './apli1-list/apli1-list.component';
import { Apli1DetailComponent } from './apli1-detail/apli1-detail.component';

@NgModule({
  imports: [CommonModule, Apli1RoutingModule],
  declarations: [Apli1ListComponent, Apli1DetailComponent]
})
export class Apli1Module {}
