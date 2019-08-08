import { Component, OnInit } from '@angular/core';
import { ProductsServicesServices } from 'src/app/services/products-services.service';
import { Producto } from 'src/app/classes/producto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public productsObservable : Observable<Producto[]>
  
  constructor(
    private productsSvc: ProductsServicesServices
  ) { }

  ngOnInit() {
    this.productsObservable = this.productsSvc.getProducts()
    .pipe(
      map( (acts: any) => {
        if (!acts.error) {
          let arr = acts.productos.map((res) => {          
            let prod: Producto[] = res;
            return prod;
          })
          return arr;   
        } else {
         return []; 
        }     
      })
    )    
  }

}
