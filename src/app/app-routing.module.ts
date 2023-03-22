import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { PageListOrdersComponent } from './orders/pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './orders/pages/page-add-order/page-add-order.component';


const routes: Routes = [
  // lazy loading = ne pas charger ses composants inutilement
  // mais uniquement si l'utilisateur visite la route
  // {path : '**', component : PageNotFoundComponent}
  // wildcard

  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){
    console.log(this.router.config, 'tableau de routes')
  }
}
