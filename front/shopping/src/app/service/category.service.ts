import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Category } from '../component/model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  public getAllCategories(){
 
    return this.http.get<Category[]>("http://localhost:8080/categories/category");

  }

  public addCategoryToBackend(category:Category){
    this.http.post<Category>('http://localhost:8080/categories/category',category).subscribe(
      
      ans=>{
        alert('Category added successfully');
      }
    );
  }
}
