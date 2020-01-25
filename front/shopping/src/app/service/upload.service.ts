import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageBean } from '../component/model/product';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }

      uploadImage(formData:FormData){
        return this.http.post<ImageBean>('http://localhost:8080/fileupload',formData);
      }
}
