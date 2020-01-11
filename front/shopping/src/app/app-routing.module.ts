import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { LogOutComponent } from './component/log-out/log-out.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"products",component:ProductListComponent,canActivate:[RouteGuardService]},
  {path:"logout",component:LogOutComponent,canActivate:[RouteGuardService]},
  {path:"**",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
