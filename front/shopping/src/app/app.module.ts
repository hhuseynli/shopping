import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule }
from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AddCategoryComponent } from './component/add-category/add-category.component';
import { BasicInterceptorService } from './service/basic-interceptor.service';
import { LoginComponent } from './component/login/login.component';
import { MenuComponent } from './component/menu/menu.component';
import { LogOutComponent } from './component/log-out/log-out.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DataTablesModule } from 'angular-datatables';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ImageViewComponent } from './component/image-view/image-view.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductsComponent } from './component/products/products.component';
import { ProductViewComponent } from './component/product-view/product-view.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    AddCategoryComponent,
    LoginComponent,
    MenuComponent,
    LogOutComponent,
    SignUpComponent,
    ImageViewComponent,
    ProductsComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    DataTablesModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'success',cancelButtonType:'danger',confirmText:'Confirm',cancelText:'Cancel'
    }),
    InfiniteScrollModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS ,useClass:BasicInterceptorService,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent,AddCategoryComponent,SignUpComponent,ImageViewComponent, ProductViewComponent]
})
export class AppModule { }
