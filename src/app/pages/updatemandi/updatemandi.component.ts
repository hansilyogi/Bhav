import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatemandi',
  templateUrl: 'updatemandi.component.html',
  // styleUrls: ['city.component.css']
})
export class UpdatemandiComponent implements OnInit {

  selectedFile:File = null;
  form1:FormGroup;
  li;
  li_product;
  li_mandi;
  mandiId;
  productId = [];

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() { 
    
    this.httpClient.post('http://13.234.119.95/api/mandi/getAllMandi',null)
    .subscribe((Response:any)=> {
      this.li_mandi = Response.Data;
      console.log(this.li_mandi);
    });

    this.httpClient.post('http://13.234.119.95/api/product/getProducts',null)
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
  //     this.httpClient.post('http://13.234.119.95/api/mandi/addMandi',fd)
  //   .subscribe(Response => {
  //     // location.reload();
  //     console.log(Response);
  //   });
  // }

  updatepro(person:Person){
    this.httpClient.post('http://13.234.119.95/api/mandi/updateMandiProduct',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    });
  }

}
export interface Person {
  mandiId:object;
  productId : object;
}