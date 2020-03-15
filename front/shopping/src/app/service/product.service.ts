import { Injectable } from '@angular/core';
import { Product, Category, SearchModel } from '../component/model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

selectedProduct:Product;
product:Product;
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
  public findPartial(begin:number){
    return this.http.get<Product[]>(`${API_URL}/products/findRange/${begin}`);

  }

  public findPartialByUsername(begin:number,username:string){
    return this.http.get<Product[]>(`${API_URL}/products/findRange/${begin}/${username}`);
  }

  public searchPartial(search:SearchModel){
    return this.http.post<Product[]>(`${API_URL}/products/searchRange`,search);
  }

  
 
}
