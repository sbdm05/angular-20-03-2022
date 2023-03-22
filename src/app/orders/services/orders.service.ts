import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // injecter ce service dans pageListOrders

  constructor(private http: HttpClient) {
    console.log('depuis service');
  }

  // méthode getDatas pour récupérer le tableau d'objets
  public getDatas(): Observable<Order[]> {
    // appel http avec HttpClient
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  // POST
  // return this.http.post<Order[]>('http://localhost:3000/orders', obj);
  public add(obj: Order): Observable<Order> {
    return this.http.post<Order>('http://localhost:3000/orders', obj);
  }

  // méthode getItemById()
  public getItemById(id: number): Observable<Order> {
    return this.http.get<Order>(`http://localhost:3000/orders/${id}`);
  }

  // méthode update
  // this.http.put(url/id, obj)
  public update(obj: Order): Observable<Order>{
    return this.http.put<Order>(`http://localhost:3000/orders/${obj.id}`, obj);
  }

}
