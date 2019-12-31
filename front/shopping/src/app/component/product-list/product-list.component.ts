import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { AgGridAngular } from 'ag-grid-angular';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private matDialog: MatDialog, private service: ProductService) { }

  ngOnInit() {
    
  }

  onSaveProduct() {
    this.matDialog.open(AddProductComponent);
  }
  onSaveCategory(){
    this.matDialog.open(AddCategoryComponent);
    
  }
  onDeleteProduct() {
    let selectedRows = this.agGrid.api.getSelectedRows();
   if(selectedRows.length>0 ){
    for (let index = 0; index < selectedRows.length; index++) {
      let product = selectedRows[index];
      let id = product.id;
      this.service.deleteById(id).subscribe(
        cavab=>{
          alert("Selected row(s) deleted");
          this.loadRows();
          console.log('The product in id:'+cavab+"deleted")
          }
        );    
    }
   }else{
     alert("Select a row")
   }
  }
  onUpdateProduct(){
    let selectedRows = this.agGrid.api.getSelectedRows();
    if(selectedRows.length>0 ){
     
       let product = selectedRows[0];
       this.matDialog.open(AddProductComponent);
       this.service.selectedProduct=product;
       
    }else{
      alert("Select a row")
    } 
  }



  columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true, width: 100 },
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Category', field: 'category.name', sortable: true, filter: true },
    { headerName: 'Image', field: 'image', sortable: true, filter: false },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true },
    { headerName: 'City', field: 'city', sortable: true, filter: true },
    { headerName: 'Seller', field: 'seller', sortable: true, filter: true },
    { headerName: 'Phone', field: 'phone', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },




  ];
 
@ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
private gridApi;
 
onGridReady(event) {
   this.gridApi = event.api;
}

searchText: string = '';

quickSearch() {
   this.gridApi.setQuickFilter(this.searchText);
}

  loadRows() {
    this.service.getAllProducts().subscribe(
      resp => {
        this.products = resp;
      }
    );
  }
}
