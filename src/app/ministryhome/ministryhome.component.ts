import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MinistryhomeService } from '../ministryhome.service';

@Component({
  selector: 'app-ministryhome',
  templateUrl: './ministryhome.component.html',
  styleUrls: ['./ministryhome.component.css']
})
export class MinistryhomeComponent implements OnInit {

  constructor(private myhttp:HttpClient,private min:MinistryhomeService,private myRouter:Router) { 
    this.restURL="http://localhost:8989/"
  }

  ministryId:any;
  ministryData:any;
  restURL: string | undefined;
  
  ngOnInit(): void {
    this.ministryId=sessionStorage.getItem("ministryId");
    this.min.ShowDetails(this.ministryId).subscribe(
      (data)=>{
        console.log(data);
        this.ministryData=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
    getapplicationList()
  }

}
function getapplicationList(this: any) {
  return this.myhttp.get(`${this.restURL}Instituteapplication`);
    }

