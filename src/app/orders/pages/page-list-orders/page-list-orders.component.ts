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

  // tableau de headers
  public headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];

  // initialiser une variable globale
  public data!: Order[];

  constructor(private ordersService: OrdersService) {
    // déclencher getDatas()
    this.ordersService.getDatas().subscribe((data) => {
      // console.log(data);
      this.data = data;
    });
  }

  // public total(val: number, coef: number, tva ?: number){
  //   console.log('déclenché')
  //   if (tva) return val * coef * (1 + tva / 100);
  //   return val * coef;
  // }

  // change detection
}
