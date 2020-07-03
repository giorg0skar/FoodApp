import { Component } from '@angular/core';

import { Food } from './food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodapp';
  itemList: Food[] = [];
}
