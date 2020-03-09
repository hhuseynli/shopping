import { Injectable, EventEmitter } from '@angular/core';
import { OrderProduct } from '../component/model/product';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  productCountChanged:EventEmitter<number>=new EventEmitter();
  orderProducts:OrderProduct[]=[];
  basketCount=0;
  constructor() { }
}
