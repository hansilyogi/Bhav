import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: 'forms.component.html',
//   styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

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
  keyword;
  experience;
  
  constructor(private httpClient : HttpClient,private router: Router) {}

  ngOnInit(): void {
  }

  onFileSelected(event){
    console.log(event);
  }

  onsubb(form:NgForm)  {
    var name1 = form.value;
    var i = form.value.company_name;
    console.log(name1);
    console.log(i);
      this.httpClient.post('https://blogproject-33.herokuapp.com/api/person/'+form.value.name,
      name1)
      .subscribe(Response => {
        this.router.navigateByUrl('/dashboard');
        console.log(Response);
      });
  }
}