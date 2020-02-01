import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Category } from '../component/model/product';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  public getAllCategories(){
 
    return this.http.get<Category[]>(`${API_URL}/categories/category`);

  }

  public addCategoryToBackend(category:Category){
    this.http.post<Category>(`${API_URL}/categories/category`,category).subscribe(
      
      ans=>{
        alert('Category added successfully');
      }
    );
  }
}
