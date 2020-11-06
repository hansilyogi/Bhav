import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    lis=[];
    xhr = new XMLHttpRequest();
  
    constructor(private http : HttpClient) {}
  
  
    ngOnInit() {
      this.http.get('http://15.207.46.236/api/person/') 
      .subscribe(Response => { 
        console.log(Response);
        this.li=Response;
        this.lis=this.li.list;
        var res = [];
        for (var x in this.li){
          this.li.hasOwnProperty(x) && res.push(this.li[x])
        }
        this.lis = res[1];
        console.log(this.lis);
      }); 
    }
  
  }