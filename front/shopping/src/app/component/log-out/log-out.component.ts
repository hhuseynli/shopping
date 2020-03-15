import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private router:Router, private basket:BasketService) { }

  ngOnInit() {
    this.basket.orderProducts=[];
    this.basket.changeProductCount();
    sessionStorage.clear();
    setTimeout(()=>{
      this.router.navigate(["login"]);
    },1000);
  }

}
