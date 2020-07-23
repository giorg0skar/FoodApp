import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  emptyOrder: Food[] = [];
  private orderSource = new BehaviorSubject(this.emptyOrder);
  currentOrder = this.orderSource.asObservable();

  constructor() { }

  // a new order has been received
  nextOrder(message) {
    this.orderSource.next(message);
  }
}
