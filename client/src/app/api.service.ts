import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8080/api/menu';

  constructor(private http: HttpClient) { }

  // returns all items on the store's menu
  getAll() {
    return this.http.get(this.baseUrl);
  }

  // returns a specific item
  get(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // creates a new item
  create(data) {
    return this.http.post(this.baseUrl, data);
  }

  // updates a specific item's data
  update(id, data) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  // deletes a specific item
  delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // deletes all items
  deleteAll() {
    return this.http.delete(this.baseUrl);
  }
}
