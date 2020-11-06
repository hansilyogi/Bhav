import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { setConstantValue } from 'typescript';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
//   styleUrls: ['./login.component.scss']
})

export class BannerComponent {

    title;
    type;
    img_1;
  lis= ['TOP','BOTTOM','OFFER'];

    constructor(private httpClient : HttpClient,private router: Router) {}

    OpenModal() {
        console.log("asd");
        this.title = "";
        this.type = "";
        this.img_1 = "";
      };

      saveBanner(form:NgForm)  {
        var name1 = form.value;
        var i = form.value.title;
        console.log(name1);
        console.log(i);
          this.httpClient.post('http://15.207.46.236/admin/addBanner',
          name1)
          .subscribe(Response => {
            // this.router.navigateByUrl('/dashboard');
            console.log(Response);
          });
      }

}