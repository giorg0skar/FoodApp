import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  api_key = 'ed44d1cc0324feda8b944f31b78b7584';
  baseUrl = 'http://data.fixer.io/api';
  // symbolResponse = {'success': true, symbols: {} };

  currencyUrl = `${this.baseUrl}/latest?access_key=${this.api_key}&symbols=USD,AUD,CAD,PLN,MXN`;
  // curr = this.baseUrl + '/latest?' + this.api_key;

  constructor(private http: HttpClient) { }

  // get different rates with base currency EUROs
  getCurrencies() {
    return this.http.get(this.currencyUrl);
  }

  getSupportedSymbols() {
    let url = `${this.baseUrl}/symbols?access_key=${this.api_key}`;
    return this.http.get(url);
  }
}
