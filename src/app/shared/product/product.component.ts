import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  @Input('product') product;

  constructor() { }

  ngOnInit() {

  }

}
