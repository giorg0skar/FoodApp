import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ApiService } from '../api.service';
import { Food } from '../food';

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
    console.log(info);
    let new_food = new Food({title: info.title, price: info.price, category: info.category,
      description: info.description,
      available: info.availability
    });
    this.foodList.push(new_food);
    // needs to add food to database
    this.apiService.create(new_food);
  }

  deleteFood(data) {
    let item_id = data.id;
    this.apiService.delete(item_id).subscribe(
      (response) => {
        console.log(response);
        // this.foodList = this.apiService.getAll();
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
      }
    );
  }

}
