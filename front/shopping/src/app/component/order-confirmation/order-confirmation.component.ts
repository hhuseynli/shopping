import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { OrderModel } from '../model/product';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  order:OrderModel= new OrderModel();
  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  phonePattern="^((\\+994-?)|0)?[0-9]{9}$";
  letterPattern="^[a-zA-Z \-\']+";
  constructor(private bS:BasketService, private orderService:OrderService) { }

  ngOnInit() {
  }
  onConfirm(){
    this.order.orderProducts=this.bS.orderProducts;
    console.log(this.order);
    this.orderService.saveOrder(this.order).subscribe(
      resp=>{
        
        console.log(resp);
      }
    );
  }

}