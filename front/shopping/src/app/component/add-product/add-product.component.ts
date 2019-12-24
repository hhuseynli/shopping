import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
product:Product= new Product();

//
  constructor(private service:ProductService ) { }

  ngOnInit() {

  }
  onSaveProduct(){
this.service.addProductToBackend(this.product);

  }

  

}
