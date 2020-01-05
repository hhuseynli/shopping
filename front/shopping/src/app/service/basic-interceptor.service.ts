import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let authorization: string = sessionStorage.getItem('authorization');
    if(authorization){
      let basicAuthHeaderString = authorization;
      request = request.clone(

        {
  
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
  
        }
      );
    }else{
    }
    

    return next.handle(request);
  }





}
