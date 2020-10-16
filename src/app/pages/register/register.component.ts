import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name;
  mobile;
  email;
  company_name;
  referred_by;
  li:any; 
  lis=[];

  constructor(private httpClient : HttpClient,private router: Router) {}
  
  ngOnInit() {
  }

  onsub(data) {
    console.log(data);
    console.log(data.name);
    this.httpClient.post('https://blogproject-33.herokuapp.com/api/registration',
      data)
      .subscribe(Response => {
        alert('registration successfull!!');
        this.router.navigateByUrl('/login');
      console.log(Response);
      });
  }
}
