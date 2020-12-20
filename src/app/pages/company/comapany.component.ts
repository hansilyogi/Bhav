import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-comapany',
  templateUrl: 'comapany.component.html',
  // styleUrls: ['city.component.css']
})
export class CompanyComponent implements OnInit {

  selectedFile:File = null;
  form1:FormGroup;
  li;
  li_state;
  companyName : string;
  stateId;
  lat : string;
  long : string;
  completeAddress : string;

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() {

    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/getState',null)
    .subscribe((Response:any)=> {
      this.li_state = Response.Data;
      // console.log(this.li_state);
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/company/getComapnyList',null)
    .subscribe((response: any) => {
      console.log(response);
      this.li = response.Data;
      console.log(this.li);
    })


    this.form1 = this.formbuilder.group({
      
  });
  }

  // onsubmitt()  {
  //   const fd = new FormData;
  //   fd.append('MandiName',this.form1.get('MandiName').value);
  //   fd.append('Product',this.form1.get('Product').value);
  //   fd.append('State',this.form1.get('State').value);
  //   fd.append('City',this.form1.get('City').value);
  //     this.httpClient.post('https://bhav003.herokuapp.com/api/mandi/addMandi',fd)
  //   .subscribe(Response => {
  //     // location.reload();
  //     console.log(Response);
  //   });
  // }

  oncomp(person:Person){
    console.log(person);
    this.httpClient.post('https://bhav003.herokuapp.com/api/company/addComapny',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    });
  }

}
export interface Person {
    companyName:object;
    stateId : object;
    lat : string;
    long : string;
    completeAddress : string;
}