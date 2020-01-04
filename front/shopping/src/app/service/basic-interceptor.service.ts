import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username: string = sessionStorage.getItem('username');
    let password: string =  sessionStorage.getItem('password');
    if(username && password){
      let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
      request = request.clone(

        {
  
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
  
        }
      );
    }else{
      alert('Username or password is empty')
    }
    

    return next.handle(request);
  }




  constructor() { }

}
