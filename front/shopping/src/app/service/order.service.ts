import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../component/model/product';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  saveOrder(order:OrderModel){
    return this.http.post(`${API_URL}/orders`,order);
  }

}
