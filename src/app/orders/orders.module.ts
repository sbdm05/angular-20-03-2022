import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-orders/page-edit-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageEditOrderComponent,
    PageAddOrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PageAddOrderComponent, PageEditOrderComponent, PageListOrdersComponent],
})
export class OrdersModule { }
