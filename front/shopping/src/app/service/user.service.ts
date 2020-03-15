import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../component/model/product';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username:string="";
   result:boolean=false;
  checkLoggedIn(): boolean {
    let result:boolean= false;
    if(sessionStorage.getItem("authorization")){
      result=  true;
    }

    return result;
  }

  isUserRoleAdmin(){
    
    
    return this.result;
  }

  constructor(private http:HttpClient) {
    this.http.get<boolean>(`${API_URL}/validations/admin`).subscribe(
      resp=>{
        this.result=resp;
      }
    );
   }

  public createAccount(user:User){
    this.http.post<User>(`${API_URL}/users`,user).subscribe(
      ans=>{
        alert("Success");
        console.log(ans);
      }
    );
  }
}
