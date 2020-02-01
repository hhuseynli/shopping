import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../component/model/product';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  checkLoggedIn(): boolean {
    let result:boolean= false;
    if(sessionStorage.getItem("authorization")){
      result=  true;
    }

    return result;
  }

  constructor(private http:HttpClient) { }

  public createAccount(user:User){
    this.http.post<User>(`${API_URL}/users`,user).subscribe(
      ans=>{
        alert("Success");
        console.log(ans);
      }
    );
  }
}
