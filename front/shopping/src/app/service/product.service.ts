import { Injectable } from '@angular/core';
import { Product, Category } from '../component/model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

selectedProduct:Product;

  constructor( private http:HttpClient) { }

  public addProductToBackend(product:Product ){
    this.http.post<Product>(`${API_URL}/products/product`, product).subscribe(
      ans=>{
        console.log(ans);
        alert('Product Added Successfully');
      }
    );
  }
  public getAllProducts(){
    return this.http.get<Product[]>(`${API_URL}/products/product`);
  }

 public deleteById(id:number){
    return this.http.delete(`${API_URL}/products/${id}`);
  }

  
 
}
