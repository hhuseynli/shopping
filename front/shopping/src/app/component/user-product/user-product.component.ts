import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { ImageViewComponent } from '../image-view/image-view.component';
import { API_URL } from 'src/app/constants';
import { UploadService } from 'src/app/service/upload.service';
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
  products:Product[]=[];
  download:string=`${API_URL}/filedownload/files/`;
  popoverTitle:string='Confirmation';
   popoverMessage:string='Do you want to continue?';
 constructor(private matDialog: MatDialog, private service: ProductService, private uploadService:UploadService) { }

 begin:number=0;
 ngOnInit() {
   this.service.findPartialByUsername(this.begin, "HH").subscribe(data => {
     this.products = data;
   });
   
 }
  onDeleteProduct(status:boolean,product:Product) {
    if(status){
        let id = product.id;
        this.service.deleteById(id).subscribe(
          cavab=>{
            alert("Selected row deleted");
            this.loadRows();
            }
          ); 
    }else{
      console.log("cancelled");
    }   
      }
    
    onUpdateProduct(product){
      this.service.selectedProduct=product;
         this.matDialog.open(AddProductComponent);
         
    
    }
    onProductSelected(product:Product){
      this.service.product=product;
      this.matDialog.open(ProductViewComponent);
  
    }
    viewImage(image){
      this.uploadService.image=image;
      this.matDialog.open(ImageViewComponent);
    }
    onScroll(){
      this.begin+=10;
      this.service.findPartialByUsername(this.begin,"HH").subscribe(data => {
        this.products.push(...data);
      });
      
      
    }
    loadRows() {
    
      this.service.findPartialByUsername(0,"HH").subscribe(
        resp => {
          this.products = resp;
        }
      );
      
    }


}
