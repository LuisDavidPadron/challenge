import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesServices {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(){
    const t = this

    return t.http.get('https://testapi.io/api/hilderh//product/all')
  }

}
