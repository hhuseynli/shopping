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
import { HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent
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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[AddProductComponent]
})
export class AppModule { }
