import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Category } from '../model/product';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category:Category = new Category();
  constructor(private service:ProductService, private matDialog:MatDialog) { }

  ngOnInit() {
  }
  onSaveCategory(){
    this.service.addCategoryToBackend(this.category);
    setTimeout(function(){ this.matDialog.closeAll();}, 1000);
      
    
    
  }
}
