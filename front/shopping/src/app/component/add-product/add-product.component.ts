import { Component, OnInit } from '@angular/core';
import { Product, Category, ImageBean } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { CategoryService } from 'src/app/service/category.service';
import { HttpClient } from '@angular/common/http';
import { UploadService } from 'src/app/service/upload.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  categories:Category[]= [];
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonePattern="^((\\+994-?)|0)?[0-9]{9}$";
  letterPattern="^[a-zA-Z \-\']+";


  //
  constructor(private service: ProductService, private matDialog:MatDialog, private c_service: CategoryService, private upload:UploadService, private userService:UserService) { }

  ngOnInit() {
    this.product.username=this.userService.username;
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
