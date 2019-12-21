import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { AgGridAngular } from 'ag-grid-angular';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[]=[];
  constructor(private matDialog:MatDialog ) { }

  ngOnInit() {
  }

onSaveProduct(){
 this.matDialog.open(AddProductComponent);
  }
  
//   @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
// private gridApi;

//   columnDefs = [
//     {headerName: 'Name', field: 'name', sortable: true, filter: true, checkboxSelection: true,width:100},
//     {headerName: 'Surname', field: 'surname', sortable: true, filter: true},
//     {headerName: 'Birthday', field: 'birthday', sortable: true, filter: true}
//  ];
//  onGridReady(event) {
//   this.gridApi = event.api;
// }
// searchText: string = '';

// quickSearch() {
//    this.gridApi.setQuickFilter(this.searchText);
// }
// loadRows(){

// }
}
