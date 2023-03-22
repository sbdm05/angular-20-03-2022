import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent {
  // créer un new Order
  // item
  public item: Order = new Order();

  constructor(private ordersService: OrdersService, private router : Router) {}

  public onAdd(item: Order) {
    // console.log(item, 'depuis page add');

    // déclencher  la méthode add
    // ici on n'oublie pas de subscribe car appel http est de type observable
    this.ordersService.add(item).subscribe((data) => {
      console.log(data);
      // redirection à l'intérieur du . subscribe
      this.router.navigate([''])
    });

  }
}
