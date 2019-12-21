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

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent]
})
export class AppModule { }
