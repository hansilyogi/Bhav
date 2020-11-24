import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: 'city.component.html',
  // styleUrls: ['city.component.css']
})
export class CityComponent implements OnInit {

  selectedFile:File = null;
  cityform :FormGroup;
  li;
  li_state;
  State;
  City;
  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() {
    this.cityform = this.formbuilder.group({
     
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/getCity',null)
    .subscribe((Response:any)=> {
      this.li = Response.Data;
      console.log(this.li);
    });

    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/getState',null)
    .subscribe((Response:any)=> {
      this.li_state = Response.Data;
      console.log(this.li_state);
    });
  }

  // onsubmitt()  {
  //   const fd = new FormData;
  //   fd.append('State',this.cityform.get('State').value);
  //   fd.append('City',this.cityform.get('City').value);
  //     this.httpClient.post('https://bhav003.herokuapp.com/api/admin/addCity',fd)
  //   .subscribe(Response => {
  //     // location.reload();
  //     console.log(Response);
  //   });
  // }

  onsubmitt(person:Person) {
    this.httpClient.post('https://bhav003.herokuapp.com/api/admin/addCity',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    })
  }

}
export interface Person {
  State : object;
  City : string;
}