import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateprice',
  templateUrl: 'updateprice.component.html',
  // styleUrls: ['city.component.css']
})
export class UpdatepriceComponent implements OnInit {

  selectedFile:File = null;
  form1:FormGroup;
  li;
  li_state;
  li_product;
  li_mandi;
  mandiId;
  productId;
  stateId;
  lowestPrice : string;
  highestPrice : string;

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() { 
    
    this.httpClient.post('https://bhav003.herokuapp.com/api/mandi/getAllMandi',null)
    .subscribe((Response:any)=> {
      this.li_mandi = Response.Data;
      console.log(this.li_mandi);
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/getState',null)
    .subscribe((Response:any)=> {
      this.li_state = Response.Data;
      // console.log(this.li_state);
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/product/getProducts',null)
    .subscribe((Response:any)=> {
      this.li_product = Response.Data;
      // console.log(this.li_product);
    });

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

  onsubmitt(person:Person){
    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/addProductUpdatePrice',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    });
  }

}
export interface Person {
  mandiId : object;
  stateId:object;
  productId : object;
  lowestPrice : string;
  highestPrice : string;
}