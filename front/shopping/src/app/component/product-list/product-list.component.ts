import { ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { AgGridAngular } from 'ag-grid-angular';
import { Product } from '../model/product';
import { ProductService } from 'src/app/service/product.service';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { API_URL } from 'src/app/constants';
import { UploadService } from 'src/app/service/upload.service';
import { ImageViewComponent } from '../image-view/image-view.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit,OnDestroy {
  products: Product[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
   download:string=`${API_URL}/filedownload/files/`;
   popoverTitle:string='Confirmation';
    popoverMessage:string='Do you want to continue?';
  constructor(private matDialog: MatDialog, private service: ProductService, private uploadService:UploadService) { }

  ngOnInit() {
    this.uploadService.download=this.download;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.service.getAllProducts().subscribe(data => {
      this.products = data;
      this.dtTrigger.next();
    });
    
  }

  onSaveProduct() {
    this.matDialog.open(AddProductComponent);
  }
  onSaveCategory(){
    this.matDialog.open(AddCategoryComponent);
    
  }

  onDeleteProduct(status:boolean,product) {
  if(status){
      let id = product.id;
      this.service.deleteById(id).subscribe(
        cavab=>{
          alert("Selected row deleted");
          this.loadRows();
          }
        ); 
  }else{
    console.log("cancelled");
  }   
    }
  
  onUpdateProduct(product){
       this.matDialog.open(AddProductComponent);
       this.service.selectedProduct=product;
  
  }
  viewImage(image){
    this.uploadService.image=image;
    this.matDialog.open(ImageViewComponent);
  }



//   columnDefs = [
//     { headerName: 'ID', field: 'id', sortable: true, filter: true, checkboxSelection: true, width: 100 },
//     { headerName: 'Name', field: 'name', sortable: true, filter: true,width: 150  },
//     { headerName: 'Category', field: 'category.name', sortable: true, filter: true, width: 120  },
//     { headerName: 'Image', field: 'image', sortable: true, filter: false, width: 80 },
//     { headerName: 'Description', field: 'description', sortable: true, filter: true,width: 250  },
//     { headerName: 'Price', field: 'price', sortable: true, filter: true,width: 100  },
//     { headerName: 'City', field: 'city', sortable: true, filter: true, width: 80  },
//     { headerName: 'Seller', field: 'seller', sortable: true, filter: true, width: 100  },
//     { headerName: 'Phone', field: 'phone', sortable: true, filter: true, width: 150  },
//     { headerName: 'Email', field: 'email', sortable: true, filter: true,width: 150  },




//   ];
 
// @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
// private gridApi;
 
// onGridReady(event) {
//    this.gridApi = event.api;
// }

// searchText: string = '';

// quickSearch() {
//    this.gridApi.setQuickFilter(this.searchText);
// }

  loadRows() {
    this.service.getAllProducts().subscribe(
      resp => {
        this.products = resp;
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
