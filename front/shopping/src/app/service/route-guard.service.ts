import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let result: boolean = false;
    
if(sessionStorage.getItem('authorization')){
  result=true;
}else{
  this.router.navigate(['login']);
}

    return result;

  }
  constructor(private router: Router ) { }
  
}