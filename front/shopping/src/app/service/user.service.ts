import { Injectable } from '@angular/core';

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

  constructor() { }
}
