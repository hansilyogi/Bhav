import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

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

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() { 
    
    this.httpClient.post('http://13.234.119.95/api/mandi/getAllMandi',null)
    .subscribe((Response:any)=> {
      this.li_mandi = Response.Data;
      // console.log(this.li_mandi);
    });

    this.httpClient.post('http://13.234.119.95/api/admin/getState',null)
    .subscribe((Response:any)=> {
      this.li_state = Response.Data;
      // console.log(this.li_state);
    });

    this.httpClient.post('http://13.234.119.95/api/product/getProducts',null)
    .subscribe((Response:any)=> {
      this.li_product = Response.Data;
      // console.log(this.li_product);
    });

    // var pro = { "mandiId" : "5fddf5a07e446273391d34f3" };

    this.form1 = this.formbuilder.group({
      
  });
  }

  updateprice(id1,id2,id3,price){
    console.log(id1);
    console.log(id2);
    console.log(id3);
    console.log(price);
    var data = {
      "stateId" : id1,
      "mandiId" : id2,
      "productId" : id3,
      "highestPrice" : price
    };
    this.httpClient.post('http://13.234.119.95/api/admin/addProductUpdatePrice',data)
    .subscribe((Response:any) =>{
      console.log(Response);
    })
  };

  onsub(id){
    console.log(id);
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

  onsubmitt(id){
    var pro = {"productId" : id};
    console.log(pro.productId);
    this.httpClient.post('http://13.234.119.95/api/admin/getCropPriceInAllMandi',pro.productId)
    .subscribe((Response:any) => {
      console.log(Response);
      // location.reload();
      this.li = Response.Data;
      console.log(this.li);
    });
  }

}
export interface Person {
  // mandiId : object;
  // stateId:object;
  productId : object;
  // lowestPrice : string;
  // highestPrice : string;
}