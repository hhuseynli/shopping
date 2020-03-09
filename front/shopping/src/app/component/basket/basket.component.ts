import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { OrderProduct, Product } from '../model/product';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  download: string = `${API_URL}/filedownload/files/`;
  products: OrderProduct[] = [];
  constructor(public service: BasketService) { }

  ngOnInit() {
    this.products = this.service.orderProducts;
  }
  onDelete(product: Product) {
    let id: number = product.id;
    this.products.splice(id, 1);
  }

}
