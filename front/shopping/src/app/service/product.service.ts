import { Injectable } from '@angular/core';
import { Product } from '../component/model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[]=[];

selectedProduct:Product;

  constructor( private http:HttpClient) { }

  addProductToBackend(product:Product ){
    this.http.post<Product>("http://localhost:8080/products/product", product).subscribe(
      ans=>{
        console.log(ans);
        alert('Product Added Successfully');
      }
    );
  }
  getAllProducts(){
    return this.http.get<Product[]>("http://localhost:8080/products/product") ;
  }

 public deleteById(id:number){
    return this.http.delete(`http://localhost:8080/products/${id}`);
  }
}
