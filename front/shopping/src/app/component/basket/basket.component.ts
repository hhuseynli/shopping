import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { OrderProduct, Product } from '../model/product';
import { API_URL } from 'src/app/constants';
import { UploadService } from 'src/app/service/upload.service';
import { MatDialog } from '@angular/material';
import { ImageViewComponent } from '../image-view/image-view.component';
import { OrderConfirmationComponent } from '../order-confirmation/order-confirmation.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  download: string = `${API_URL}/filedownload/files/`;
  products: OrderProduct[] = [];
  price:number=0;
  constructor(public service: BasketService,private uploadService:UploadService, private matDialog:MatDialog) { }

  ngOnInit() {
    this.products = this.service.orderProducts;
    
   this.service.totalPriceChanged.subscribe(
      resp=>{
        this.price=resp;
      }
    );
    this.service.changeTotalPrice();
  }
  onDelete(count) {
    this.products.splice(count, 1);
    this.service.changeProductCount();
    this.service.changeTotalPrice();
  }

  onProductQuantityChanged(product:OrderProduct, count:number){
    let quantity=product.quantity;
    if(quantity==0){
      this.onDelete(count);
    }else{
    this.service.changeProductCount();
    this.service.changeTotalPrice();
    }
  }
  viewImage(image){
    this.uploadService.image=image;
    this.matDialog.open(ImageViewComponent);
  }

  onConfirmOrder(){
    this.matDialog.open(OrderConfirmationComponent);
  }

}
