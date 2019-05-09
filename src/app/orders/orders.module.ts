import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { AutoComplateComponent } from './autoComplate/autoComplate.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [OrderListComponent, AutoComplateComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrdersRoutingModule,
    HttpClientModule,
    TypeaheadModule
  ],
  providers: [PostsService]
})
export class OrdersModule {}
