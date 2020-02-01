import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageBean } from '../component/model/product';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }
  download:string="";
  image:string="";

      uploadImage(formData:FormData){
        return this.http.post<ImageBean>(`${API_URL}/fileupload`,formData);
      }
}
