import { ProductsServicesServices } from './services/products-services.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http/';

//Components
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ProductComponent } from './shared/product/product.component'; 

//ANGULAR MATERIAL
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ProductsServicesServices], //Service
  bootstrap: [AppComponent],
  entryComponents: [
    
  ]
})
export class AppModule { }
