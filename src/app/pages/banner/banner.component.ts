import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
//   styleUrls: ['./login.component.scss']
})

export class BannerComponent implements OnInit{
  
  selectedFile:File = null;

  productform :FormGroup;
  li;
  x;
  banner:any;
  toDayPrice;
  productName;
  productImage;
  yesterDayPrice;
  lis_banner = [];
    constructor(private httpClient : HttpClient,private router: Router,private formbuilder : FormBuilder) {}

    ngOnInit() {
      this.httpClient.post('https://bhav003.herokuapp.com/api/product/getProducts',null)
    .subscribe((Response:any)=> {
      // console.log(Response);
      this.li = Response.Data;
      console.log(this.li);
    });
      
      this.productform = this.formbuilder.group({
        productImage:[''],
        toDayPrice:[''],
        productName:[''],  
        yesterDayPrice:['']
      });
    }

    onChaa(event){
      this.selectedFile = event.target.files[0];
      this.productform.get('productImage').setValue(this.selectedFile);
    }

    // saveproduct(person:Person){
    //   this.x = this.productform.get('productImage');
    //   person.productImage = this.x;
    //   this.httpClient.post('https://bhav003.herokuapp.com/api/product/addProduct',person)
    //   .subscribe(Response => {
    //     console.log(Response);
    //     // location.reload();
    //   })
    // }

    saveproduct(){
      const fd = new FormData;
      fd.append('productName',this.productform.get('productName').value);
      fd.append('toDayPrice',this.productform.get('toDayPrice').value);
      fd.append('productImage',this.productform.get('productImage').value);
      fd.append('yesterDayPrice',this.productform.get('yesterDayPrice').value);
      this.httpClient.post('https://bhav003.herokuapp.com/api/product/addProduct',fd)
      .subscribe(Response => {
        console.log(Response);
        // location.reload();
      })
    }

}
interface Person {
  productName : string;
  productImage : FormDataEntryValue;
  yesterDayPrice: string;
  toDayPrice: string;
}