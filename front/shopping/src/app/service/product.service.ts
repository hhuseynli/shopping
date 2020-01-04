import { Injectable } from '@angular/core';
import { Product, Category } from '../component/model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

selectedProduct:Product;

  constructor( private http:HttpClient) { }

  public addProductToBackend(product:Product ){
    this.http.post<Product>("http://localhost:8080/products/product", product).subscribe(
      ans=>{
        console.log(ans);
        alert('Product Added Successfully');
      }
    );
  }
  public getAllProducts(){
    return this.http.get<Product[]>("http://localhost:8080/products/product");
  }

 public deleteById(id:number){
    return this.http.delete(`http://localhost:8080/products/${id}`);
  }

  
 
}
