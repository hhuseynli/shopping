import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material';
import { BasketComponent } from '../basket/basket.component';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  count:number;


  constructor(private userService: UserService, private matDialog: MatDialog, private basket:BasketService) { }

  ngOnInit() {
    this.basket.productCountChanged.subscribe(
      resp=>{
        this.count=resp;
      }
    );
  }
  isUserLoggedIn(): boolean {
    return this.userService.checkLoggedIn();
  }
  onCart() {
    this.matDialog.open(BasketComponent);
  }

}
