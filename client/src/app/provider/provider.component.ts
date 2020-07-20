import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from '../api.service';
import { Food } from '../food';
import { error } from 'protractor';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  foodList: Food[] = [];
  orders: Food[] = [];
  categories: string[] = ['Appetizers', 'Main dishes', 'Salads', 'Desserts', 'Drinks'];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.retrieveItems();
  }

  // Minimum info of a food: name, price
  // addFood(name, price, cat) {
  //   let new_food = new Food({title: name, price: price, category: cat});
  //   this.foodList.push(new_food);
  // }
  addFood(info) {
    console.log('the new food data is');
    console.log(info);
    let new_food = new Food({
      title: info.title,
      price: info.price,
      category: info.category,
      description: info.description,
      available: info.availability
    });
    // this.foodList.push(new_food);
    // needs to add food to database
    this.apiService.create(new_food).subscribe(
      (res) => {
        this.retrieveItems();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteFood(data: Food) {
    // let item_id = data._id;
    let item_id = data.title;
    this.apiService.delete(item_id).subscribe(
      (response) => {
        console.log(response);
        this.retrieveItems();
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteAllItems() {
    this.apiService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.retrieveItems();
      },
      error => {
        console.log(error);
      }
    );
  }

  retrieveItems() {
    this.apiService.getAll().subscribe(
      (data: Food[]) => {
        this.foodList = data;
        console.log('Retrieved the following items from the database');
        // console.log(data);
        // console.log('foodlist is');
        console.log(this.foodList);
      },
      error => {
        console.log(error);
      }
    );
  }

}
