import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  // styleUrls: ['login.component.css']
})

export class LoginComponent {
  li:any; 
  lis=[];
  succ: any;
  data_1 :any;
  loggedin = false;
  res_data;
  UserName:string;
  Password:string;

  constructor(private httpClient : HttpClient,private router: Router) {}

  onlog(person:Person) {
      this.httpClient.post('https://bhav003.herokuapp.com/api/admin/adminLogin',person)
      .subscribe(Response => {
        console.log(Response);
        this.router.navigateByUrl('/dashboard');
      })
  }

}
export interface Person {
  UserName:string;
  Password:string;
}
