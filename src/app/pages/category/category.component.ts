import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { setConstantValue } from 'typescript';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
//   styleUrls: ['./login.component.scss']
})

export class CategoryComponent {
  
    newsType;
    categoryImage;

    constructor(private httpClient : HttpClient,private router: Router) {}

    onsubmitt(form:NgForm)  {
        var name1 = form.value;
        var i = form.value.newsType;
        this.httpClient.post('http://15.207.46.236/admin/addNewsCategory',
      name1)
      .subscribe(Response => {
        // this.router.navigateByUrl('/dashboard');
        console.log(Response);
        location.reload();
      });
        this.router.navigateByUrl('/news');
    }
}