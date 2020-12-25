import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    // moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    li:any; 
    
    lis = [];

    xhr = new XMLHttpRequest();
    
    constructor(private httpClient : HttpClient,private router: Router) {}
  
    ngOnInit() {
      this.httpClient.post('http://13.234.119.95/api/customer/getUsers',null) 
      .subscribe(Response => { 
        this.li=Response;
        console.log(this.li);
        // this.lis=this.li.list;
        var res = [];
        for (var x in this.li){
          this.li.hasOwnProperty(x) && res.push(this.li[x])
        }
        this.lis = res[2];
      });

    }
  
    editt(){
      console.log("asd");
      this.router.navigateByUrl('/forms');
    }

    dellete(){
      alert("Your account is Deleted.!! ");
    }
  
  }