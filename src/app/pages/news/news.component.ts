import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { forEachChild } from 'typescript';
import { from } from 'rxjs';


@Component({
  selector: 'app-news',
  templateUrl: 'news.component.html',
})

export class NewsComponent implements OnInit{
  img_path="uploads/newsPictures/"
  newsType;
  content;
  headline;
  newsImage;
  li ;
  lis = ['Sports','Religion','Domestic','International','Politics','Entertainment'];

  constructor(private httpClient : HttpClient,private router: Router) {}
  
  ngOnInit(){
    this.httpClient.post('http://15.207.46.236/admin/getNewsCategory',null)
    .subscribe((Response:any)=> {
      console.log(Response);
      this.li = Response.Data;
      console.log(this.li);
    })
  }


  onSubmit(form:NgForm)  {
    var name1 = form.value;
    var i = form.value.newsType;
    console.log(name1);
    console.log(i);
      this.httpClient.post('http://15.207.46.236/admin/addnews',
      name1)
      .subscribe(Response => {
        this.router.navigateByUrl('/dashboard');
        console.log(Response);
      });
  }


  // public onFileChanged(event){
  //   console.log(event);
  //   this.selected_file = event.tagret.files[0];

  //   let reader = new FileReader();
  //   reader.readAsDataURL(event.tagret.files[0]);
  //   reader.onload = (event2) => {
  //     this.imgURL = reader.result;
  //   };
  // }

  // onChange(file: File) {
  //   if (file) {
  //     this.fileName = file.name;
  //     this.file = file;
  //     console.log(this.file);

  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);

  //     reader.onload = event => {
  //       this.imageUrl = reader.result;
  //     };
  //   }
  // }

}