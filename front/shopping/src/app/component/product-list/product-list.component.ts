import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { AgGridAngular } from 'ag-grid-angular';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[]=[];
  constructor(private matDialog:MatDialog , private service:ProductService) { }

  ngOnInit() {
  }

onSaveProduct(){
 this.matDialog.open(AddProductComponent);
  }
  
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
private gridApi;

  columnDefs = [
    {headerName: 'Name', field: 'name', sortable: true, filter: true, checkboxSelection: true,width:100},
    {headerName: 'Description', field: 'description', sortable: true, filter: true},
    {headerName: 'Image', field: 'birthday', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
 ];
 onGridReady(event) {
  this.gridApi = event.api;
}
searchText: string = '';

quickSearch() {
   this.gridApi.setQuickFilter(this.searchText);
}
loadRows(){
  this.products= this.service.products;
}
}
