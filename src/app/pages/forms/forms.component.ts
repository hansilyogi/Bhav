import { Component,ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
//   styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit{

  @ViewChild(LoginComponent) login;

  data_2 :any;
  name;
  img;
  date_of_birth;
  gender;
  address;
  spouse_name;
  spouse_birth_date;
  number_of_child;
  company_name;
  business_category;
  company_address;
  about_business;
  keyword :[];
  experience:String;
  lis= ['Prime','Bronze','Platinum','Gold','Silver'];

  
  constructor(private httpClient : HttpClient,private router: Router) {}

  ngOnInit(): void {
  }


  onsubb(form:NgForm)  {
    var name1 = form.value;
    var i = form.value.experience;
    console.log(name1);
    console.log(i);
      this.httpClient.post('http://15.207.46.236/api/person/'+form.value.name,
      name1)
      .subscribe(Response => {
        this.router.navigateByUrl('/dashboard');
        console.log(Response);
      });
  }
}