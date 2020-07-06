import { Component, OnInit } from '@angular/core';

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
  categories: string[] = ['Appetizers', 'Main dishes', 'Salads', 'Desserts', 'Drinks'];

  ngOnInit() {}

  // Minimum info of a food: name, price
  addFood(name, price, cat) {
    let new_food = new Food({title: name, price: price, category: cat});
    this.itemList.push(new_food);
  }

  addToCart(item: Food) {
    this.cart.push(item);
    // needs to send item to database
  }

  removeFromCart(item: Food) {
    for(let i = 0; i < this.itemList.length; i++) {
      if (this.itemList[i] === item) {
        this.itemList.splice(i, 1);
        break;
      }
    }
    // item needs to also be removed from the database
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
  }

}
