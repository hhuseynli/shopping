import { Component, OnInit } from '@angular/core';
import { Product, Category } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categories:Category[]= [];

  //
  constructor(private service: ProductService, private matDialog:MatDialog, private c_service: CategoryService) { }

  ngOnInit() {
    this.c_service.getAllCategories().subscribe(
      resp=>{
        this.categories = resp;
      }
    );


    if (this.service.selectedProduct != null) {
      this.product = this.service.selectedProduct;
    }
    if(this.matDialog.afterAllClosed){
      this.service.selectedProduct=null;
    }


    
  }
  onSaveProduct() {
    this.service.addProductToBackend(this.product);
    this.service.selectedProduct = null;
    this.matDialog.closeAll();

  }



}
