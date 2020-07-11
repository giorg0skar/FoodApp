import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Food } from '../food';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  foodList: Food[] = []

  constructor() { }

  ngOnInit(): void {
  }

  // Minimum info of a food: name, price
  // addFood(name, price, cat) {
  //   let new_food = new Food({title: name, price: price, category: cat});
  //   this.foodList.push(new_food);
  // }
  addFood(info) {
    console.log(info);
    let new_food = new Food({title: info.title, price: info.price, category: info.category});
    this.foodList.push(new_food);
    // needs to add food to database
  }

}
