import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[];
  begin:number=0;
  download:string=`${API_URL}/filedownload/files/`;
  constructor(private service:ProductService) { }

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

}
