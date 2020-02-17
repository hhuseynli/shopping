import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { API_URL } from 'src/app/constants';
import { MatDialog } from '@angular/material';
import { ProductViewComponent } from '../product-view/product-view.component';
import { UploadService } from 'src/app/service/upload.service';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  begin:number=0;
  download:string=`${API_URL}/filedownload/files/`;
  constructor(private service:ProductService, private matDialog:MatDialog, private upload:UploadService) { }

  ngOnInit() {
    this.service.findPartial(this.begin).subscribe(
      resp=>{
        this.products=resp;
      }
    );
  
  }
  
  onScroll(){
    this.begin+=10;
    this.service.findPartial(this.begin).subscribe(
      resp=>{
        this.products.push(...resp);
      }
    );

  }

  onProductSelected(product:Product){
    this.service.product=product;
    this.matDialog.open(ProductViewComponent);

  }
  viewImage(image){
    this.upload.image=image;
    this.matDialog.open(ImageViewComponent);
  }

}
