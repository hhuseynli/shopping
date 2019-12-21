import { Injectable } from '@angular/core';
import { Product } from '../component/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[]=[];
  constructor() { }
}
