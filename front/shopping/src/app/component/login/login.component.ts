import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { API_URL } from 'src/app/constants';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {

  }
  constructor(private http: HttpClient, private router:Router, private matDialog:MatDialog, private userService:UserService) {

  }


  username: string = '';
  password: string = '';

  onSignUp(){
    this.matDialog.open(SignUpComponent);
  }


  onLogin() {
    
    let HeaderString = 'Basic ' + window.btoa(this.username + ':' + this.password);
    let HeaderObject = new HttpHeaders(
      {
        Authorization: HeaderString
      }
    );

    this.http.get<boolean>(`${API_URL}/validations`, {
      headers: HeaderObject
    }).subscribe(
      success => {
        sessionStorage.setItem("username",this.username);
        sessionStorage.setItem("authorization", HeaderString);
        this.router.navigate(['products']);

      },error=>{
        alert('Bad credentials');
      }


    );
  }

  

isUserLoggedIn():boolean{
  return this.userService.checkLoggedIn();
}

}
