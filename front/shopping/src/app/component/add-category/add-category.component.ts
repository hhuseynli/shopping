import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Category } from '../model/product';
import { MatDialog } from '@angular/material';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category:Category = new Category();
  constructor(private service:CategoryService) { }

  ngOnInit() {
  }
  onSaveCategory(){
    this.service.addCategoryToBackend(this.category);   
    
    
  }
}
