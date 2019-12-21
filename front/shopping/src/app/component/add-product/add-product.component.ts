import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product:Product= new Product();

  constructor() { }

  ngOnInit() {

  }
  onSaveProduct(){
console.log(this.product);
  }

}
