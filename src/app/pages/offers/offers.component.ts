import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: 'offers.component.html',
  styleUrls: ['offers.component.css']
})
export class OffersComponent implements OnInit {

  lis = ['Sports','Religion','Domestic','International','Politics','Entertainment'];
  type;
  title;
  dateTime;
  bannerImage;
  details;

  constructor(private httpClient : HttpClient,private router: Router) { }

  onSubmit(form:NgForm)  {
    var name1 = form.value;
    var i = form.value.offer;
    console.log(name1);
    console.log(i);
      this.httpClient.post('http://15.207.46.236/admin/offer',
      name1)
      .subscribe(Response => {
        // this.router.navigateByUrl('/dashboard');
        console.log(Response);
      });
  }

  ngOnInit(): void {
  }

}
