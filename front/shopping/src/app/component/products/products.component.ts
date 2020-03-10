import { Component, OnInit } from '@angular/core';
import { Product, OrderProduct } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { API_URL } from 'src/app/constants';
import { MatDialog } from '@angular/material';
import { ProductViewComponent } from '../product-view/product-view.component';
import { UploadService } from 'src/app/service/upload.service';
import { ImageViewComponent } from '../image-view/image-view.component';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  begin: number = 0;
  download: string = `${API_URL}/filedownload/files/`;

  constructor(private service: ProductService, private matDialog: MatDialog, private upload: UploadService, private basket: BasketService) { }

  ngOnInit() {
    this.service.findPartial(this.begin).subscribe(
      resp => {
        this.products = resp;
      }
    );



  }

  onScroll() {
    this.begin += 10;
    this.service.findPartial(this.begin).subscribe(
      resp => {
        this.products.push(...resp);
      }
    );

  }

  onProductSelected(product: Product) {
    this.service.product = product;
    this.matDialog.open(ProductViewComponent);

  }
  viewImage(image) {
    this.upload.image = image;
    this.matDialog.open(ImageViewComponent);
  }

  onCart(product: Product) {
    let alreadyInBasket: boolean = false;
    for (let index = 0; index < this.basket.orderProducts.length; index++) {
      const element = this.basket.orderProducts[index];
      if (element.product.id == product.id) {
        alreadyInBasket = true;
        this.basket.orderProducts[index].quantity++;
        break;
      }
    }
    if (!alreadyInBasket) {
      let orderP: OrderProduct = new OrderProduct();
      orderP.product = product;
      orderP.quantity = 1;
      this.basket.orderProducts.push(orderP);
    }
    this.basket.changeProductCount();



  }

}
