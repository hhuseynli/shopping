import { Injectable, EventEmitter } from '@angular/core';
import { OrderProduct } from '../component/model/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  productCountChanged:EventEmitter<number>=new EventEmitter();
  orderProducts:OrderProduct[]=[];
  totalPriceChanged:EventEmitter<number>=new EventEmitter();

  changeProductCount(){
    let orderSum:number=0;
    for (let index = 0; index < this.orderProducts.length; index++) {
      const element = this.orderProducts[index];
      orderSum+=element.quantity;
    }
    this.productCountChanged.emit(orderSum);
  }

  changeTotalPrice(){
      let totalSum:number=0;
      for (let index = 0; index < this.orderProducts.length; index++) {
        const element = this.orderProducts[index];
        totalSum+=(element.quantity*element.product.price);
      }
      this.totalPriceChanged.emit(totalSum);
    
  }



  constructor() { }
}
