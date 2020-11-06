import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { setConstantValue } from 'typescript';

@Component({
  selector: 'app-events',
  templateUrl: 'events.component.html',
//   styleUrls: ['./login.component.scss']
})

export class EventsComponent {
  
    eventOrganiseBy;
    startDte;
    endDate;
    eventName;
    eventImage;

    constructor(private httpClient : HttpClient,private router: Router) {}

    onsubmitt(form:NgForm)  {
        var name1 = form.value;
        this.httpClient.post('http://15.207.46.236/admin/addEvent',name1)
      .subscribe(Response => {
        // this.router.navigateByUrl('/dashboard');
        console.log(Response);
      });
        // this.router.navigateByUrl('/news');
    }
}