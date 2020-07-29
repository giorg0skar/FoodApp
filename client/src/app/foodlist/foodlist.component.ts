import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { OrderService } from '../order.service';
import { CurrencyService } from '../currency.service';
import { Food } from '../food';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {

  title = 'foodapp';
  itemList: Food[] = [];
  cart: Food[] = [];
  currencies: string[] = [];
  order_cost: number;
  categories: string[] = ['Appetizers', 'Main dishes', 'Salads', 'Desserts', 'Drinks'];
  fx = {};

  constructor(private apiService: ApiService, private orderService: OrderService,
    private currencyService: CurrencyService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(
      (data: Food[]) => {
        this.itemList = data;
        console.log(data);
      }
    );

    this.currencyService.getCurrencies().subscribe(
      (res) => {
        // let arr = res.symbols;
        // for(let key in arr) {
        //   this.currencies.push(key);
        // }
        this.fx = res;
        console.log(res);
      }
    );

    this.order_cost = 0;
  }

  getFoodsfromCategory(cat: string) {
    let list_of_foods: Food[] = [];
    for(let i =0; i < this.itemList.length; i++) {
      if (this.itemList[i].category === cat) {
        list_of_foods.push(this.itemList[i]);
      }
    }
    return list_of_foods;
  }

  addToCart(item: Food) {
    this.cart.push(item);
    this.order_cost += Number(item.price);
  }

  removeFromCart(item: Food) {
    for(let i = 0; i < this.cart.length; i++) {
      if (this.cart[i] === item) {
        this.cart.splice(i, 1);
        this.order_cost -= Number(item.price);
        break;
      }
    }
  }

  submitOrder() {
    // submit order
    console.log('Order submitted');
    // send order to provider: cart data -> provider component

    this.orderService.nextOrder(this.cart);
    // afterwards empty the cart
    this.cart = [];
    this.order_cost = 0;
  }


}
