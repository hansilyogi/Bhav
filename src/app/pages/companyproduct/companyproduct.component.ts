import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-comapanyproduct',
  templateUrl: 'companyproduct.component.html',
  // styleUrls: ['city.component.css']
})
export class CompanyproductComponent implements OnInit {

  selectedFile:File = null;
  form1:FormGroup;
  li;
  companyId;
  productId =[];
  li_product;
  

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() {
    
    this.httpClient.post('https://bhav003.herokuapp.com/api/product/getProducts',null)
    .subscribe((Response:any)=> {
      this.li_product = Response.Data;
      console.log(this.li_product);
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/company/getComapnyList',null)
    .subscribe((response: any) => {
      console.log(response);
      this.li = response.Data[0];
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

  onprocomp(person:Person){
    console.log(person);
    this.httpClient.post('https://bhav003.herokuapp.com/api/company/addProductToComapny',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    });
  }

}
export interface Person {
    companyId : object;
    productId : object;
}