import { Component, OnInit } from '@angular/core';
import { User } from '../model/product';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user:User=new User();
  

  constructor(private service:UserService) { }

  ngOnInit() {

  }

  onNewAccount(){
    
    this.service.createAccount(this.user);
  }

}
