import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;

  // ici on passe soit un objet complet de type Order
  // soit aucun objet
  // Avec Partial, on peut passer un objet incomplet
  constructor(obj?: Partial<Order>) {
    if (obj) {
      // Object.assign(target, source)
      Object.assign(this, obj);
    }
  }
}

// new Order({tva: 30})
