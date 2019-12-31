import { Component, OnInit } from '@angular/core';
import { Product, Category } from '../model/product';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categories:Category[]= [];

  //
  constructor(private service: ProductService) { }

  ngOnInit() {
    this.service.getAllCategories().subscribe(
      resp=>{
        this.categories = resp;
      }
    );


    if (this.service.selectedProduct != null) {
      this.product = this.service.selectedProduct;
    }

    
  }
  onSaveProduct() {
    this.service.addProductToBackend(this.product);
    this.service.selectedProduct = null;
  }



}
