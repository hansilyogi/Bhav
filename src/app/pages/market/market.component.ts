import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-market',
  templateUrl: 'market.component.html',
  // styleUrls: ['city.component.css']
})
export class MarketComponent implements OnInit {

  selectedFile:File = null;
  form1:FormGroup;
  li;
  li_city;
  li_state;
  li_product;
  MandiName;
  productId = [];
  State;
  selectedItems = [];
  dropdownSettings = {};

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() {
    this.httpClient.post('http://13.234.119.95/api/mandi/getAllMandi',null)
    .subscribe((Response:any)=> {
      this.li = Response.Data;
      console.log(this.li);
    });

    this.httpClient.post('http://13.234.119.95/api/admin/getCity',null)
    .subscribe((Response:any)=> {
      this.li_city = Response.Data;
      // console.log(this.li_city);
    });

    this.httpClient.post('http://13.234.119.95/api/admin/getState',null)
    .subscribe((Response:any)=> {
      this.li_state = Response.Data;
      // console.log(this.li_state);
    });

    this.httpClient.post('http://13.234.119.95/api/product/getProducts',null)
    .subscribe((Response:any)=> {
      this.li_product = Response.Data;
      console.log(this.li_product);
    });

    this.form1 = this.formbuilder.group({ 
  });
  }

  // onItemSelect(item) {
  //   console.log(item);
  //   this.Product.push(item);
  // }


  // onsubmitt()  {
  //   const fd = new FormData;
  //   fd.append('MandiName',this.form1.get('MandiName').value);
  //   fd.append('Product',this.form1.get('Product').value);
  //   fd.append('State',this.form1.get('State').value);
  //   fd.append('City',this.form1.get('City').value);
  //     this.httpClient.post('http://13.234.119.95/api/mandi/addMandi',fd)
  //   .subscribe(Response => {
  //     // location.reload();
  //     console.log(Response);
  //   });
  // }

  onsubmitt(person:Person){
    console.log(person);
    this.httpClient.post('http://13.234.119.95/api/mandi/addMandi',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    });
  }

}
export interface Person {
  MandiName:string;
  productId : object;
  State : object;
}