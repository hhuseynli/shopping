import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  product:Product;
  download:string=`${API_URL}/filedownload/files/`;


  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.product=this.productService.product;
  }

}
