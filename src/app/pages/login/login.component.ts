import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  // styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {
  li:any; 
  lis=[];
  succ: any;
  data_1 :any;
  loggedin = false;

  constructor(private httpClient : HttpClient,private router: Router) {}

  onpost(dataa) {
      this.httpClient.post('http://15.207.46.236/api/login', 
      dataa)
      .subscribe(responsedata => {
      this.data_1=responsedata;
      console.log(this.data_1);
      this.loggedin= true;
      this.succ = responsedata["IsSuccess"];
      if(this.succ){
          alert('Login Successfull!!');
          this.router.navigateByUrl('/dashboard');
        }
      else{
          alert('Enter valid number to Login');
        }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
