import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { LogOutComponent } from './component/log-out/log-out.component';
import { RouteGuardService } from './service/route-guard.service';
import { ProductsComponent } from './component/products/products.component';
import { UserProductComponent } from './component/user-product/user-product.component';
import { OrderComponent } from './component/order/order.component';


const routes: Routes = [
  {path:"",component:ProductsComponent },
  {path:"myproducts", component:UserProductComponent},
  {path:"orders", component:OrderComponent},
  {path:"products",component:ProductsComponent},
  {path:"login",component:LoginComponent},
  {path:"admin",component:ProductListComponent,canActivate:[RouteGuardService]},
  {path:"logout",component:LogOutComponent,canActivate:[RouteGuardService]},
  {path:"**",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
