import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../model/product';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders:OrderModel[]=[];
  begin:number=0;

  

  constructor(private order:OrderService, private router:Router ) { }
  

  ngOnInit() {
    this.order.findByUsername(0,sessionStorage.getItem("username")).subscribe(
      resp=>{
        this.orders=resp;
      },
      error=>{
        this.router.navigate(["login"]);
        alert("Please, sign in.");
      }
    );
  }

  onScroll(){
    this.begin+=12;
    this.order.findByUsername(this.begin,sessionStorage.getItem("username")).subscribe(
      resp=>{
        this.orders.push(...resp);
      }
    );
  }

}
