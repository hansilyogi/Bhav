import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-state',
  templateUrl: 'state.component.html',
  // styleUrls: ['state.component.css']
})
export class StateComponent implements OnInit {

  selectedFile:File = null;
  stateform :FormGroup;
  li;
  State : string;

  constructor(private httpClient : HttpClient,private router: Router, private formbuilder : FormBuilder) {}

  ngOnInit() {
    this.stateform = this.formbuilder.group({
      State:['']
    });

    this.httpClient.post('http://13.234.119.95/api/admin/getState',null)
    .subscribe((Response:any)=> {
      // console.log(Response);
      this.li = Response.Data;
      console.log(this.li);
    });
  }

  // submit_state() {
  //   const fd = new FormData;
  //   fd.append("State",this.stateform.get("State").value);
  //     this.httpClient.post('http://13.234.119.95/api/admin/addState',fd)
  //   .subscribe(Response => {
  //     location.reload();
  //     console.log(Response);
  //   });
  // }

  submit_state(person:Person){
    this.httpClient.post('http://13.234.119.95/api/admin/addState',person)
    .subscribe(Response => {
      console.log(Response);
      location.reload();
    })
  }

}
export interface Person {
  State : string;
}