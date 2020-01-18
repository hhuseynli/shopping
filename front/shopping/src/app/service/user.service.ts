import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../component/model/product';

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
    this.http.post<User>("http://localhost:8080/users",user).subscribe(
      ans=>{
        alert("Success");
        console.log(ans);
      }
    );
  }
}
