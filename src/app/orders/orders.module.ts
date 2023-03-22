import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageEditOrderComponent } from './pages/page-edit-orders/page-edit-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageDemoObservableFroidComponent } from './pages/page-demo-observable-froid/page-demo-observable-froid.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageEditOrderComponent,
    PageAddOrderComponent,
    PageDemoObservableFroidComponent,
  ],
  imports: [CommonModule, SharedModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
  exports: [
    PageAddOrderComponent,
    PageEditOrderComponent,
    PageListOrdersComponent,
  ],
})
export class OrdersModule {}
