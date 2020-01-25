import { Component, OnInit } from '@angular/core';
import { Product, Category, ImageBean } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { CategoryService } from 'src/app/service/category.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from 'src/app/service/upload.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categories:Category[]= [];

  //
  constructor(private service: ProductService, private matDialog:MatDialog, private c_service: CategoryService, private upload:UploadService) { }

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
    image:File;
  fileSelected(event){
    let image= event.target.files[0];
    let formData:FormData = new FormData();
    formData.append('file',image);
    this.upload.uploadImage(formData).subscribe(
      resp=>{
        this.product.image=resp.image;
      }
    );
    

  }



}
