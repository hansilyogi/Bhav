import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, NgForm,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  li:any; 
  lis=[];
  li_city;
  li_state;
  regform:FormGroup;
  name;
  mobile;
  lat;
  long;
  completeAddress;
  landSizeOwned;
  State;
  City;

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}
  
  ngOnInit() {
    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/getCity',null)
    .subscribe((Response:any)=> {
      this.li_city = Response.Data;
      console.log(this.li_city);
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/getState',null)
    .subscribe((Response:any)=> {
      this.li_state = Response.Data;
      console.log(this.li_state);
    });

    this.regform = this.formbuilder.group({
      
    });
  }

  // onsub() {
  //   const fd = new FormData;
  //   fd.append('name',this.regform.get('name').value);
  //   fd.append('mobile',this.regform.get('mobile').value);
  //   fd.append('lat',this.regform.get('lat').value);
  //   fd.append('long',this.regform.get('long').value);
  //   fd.append('completeAddress',this.regform.get('completeAddress').value);
  //   fd.append('landSizeOwned',this.regform.get('landSizeOwned').value);
  //   fd.append('State',this.regform.get('State').value);
  //   fd.append('City',this.regform.get('City').value);
  //   this.httpClient.post('https://bhav003.herokuapp.com/api/customer/register',fd)
  //     .subscribe(Response => {
  //       alert('registration successfull!!');
  //       // this.router.navigateByUrl('/table');
  //     console.log(Response);
  //     });
  // }

  onsub(person:Person){
    console.log(person);
    this.httpClient.post('https://bhav003.herokuapp.com/api/customer/register',person)
    .subscribe(Response => {
      console.log(Response);
      alert("Registration successfull!!");
      location.reload();
    })
  }
}
export interface Person {
  name:string;
  mobile:string;
  lat:string;
  long:string;
  completeAddress:string;
  landSizeOwned:string;
  State : object;
  City: object;
}