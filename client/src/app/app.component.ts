import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  current_url: string;

  ngOnInit() {
    this.current_url = this.router.url;
  }

  constructor(private router: Router) {}

  // change the current_url variable to highlight the component we are in
  customerActive() {
    this.current_url = '/';
  }
  providerActive() {
    this.current_url = '/providers';
  }

}
