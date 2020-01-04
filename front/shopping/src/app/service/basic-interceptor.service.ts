import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username: string = 'HuseynLi2007';
    let password: string = 'ProGrammer1243';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone(

      {

        setHeaders: {
          Authorization: basicAuthHeaderString
        }

      }
    );
    
    return next.handle(request);
  }




  constructor() { }

}
