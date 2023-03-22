import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  public item!: Order; // false

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    // extraire l'id de l'url
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(typeof id); // number ou string ???

    // service > méthode getItemById(id)
    this.ordersService.getItemById(id).subscribe((data) => {
      console.log(data);
      this.item = data;
    });
  }

  public onEdit(obj: Order) {
    this.ordersService.update(obj).subscribe(() => {
      // redirection avec Router
      this.router.navigate(['']);
    });
  }
}
