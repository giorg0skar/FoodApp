import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
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
  order_cost: number;
  categories: string[] = ['Appetizers', 'Main dishes', 'Salads', 'Desserts', 'Drinks'];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(
      (data: Food[]) => {
        this.itemList = data;
        console.log(data);
      }
    );
  }


  addToCart(item: Food) {
    this.cart.push(item);
    this.order_cost += item.price;
    // needs to send item to database
  }

  removeFromCart(item: Food) {
    for(let i = 0; i < this.cart.length; i++) {
      if (this.cart[i] === item) {
        this.cart.splice(i, 1);
        this.order_cost -= item.price;
        break;
      }
    }
    // item needs to also be removed from
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

  submitOrder() {
    // submit order
    console.log('Order submitted');
    // send order to provider: cart data -> provider component

    // afterwards empty the cart
    this.cart = [];
    this.order_cost = 0;
  }

}
