import { Component } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public title: string = 'CRM';

  // initialiser une variable globale
  public data!: Order[];

  constructor(private ordersService: OrdersService) {
    // déclencher getDatas()
    this.ordersService.getDatas().subscribe((data) => {
      // console.log(data);
      this.data = data;
    });
  }
}
