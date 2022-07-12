import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { applicationDetails } from '../scholarshipapplicationdetails';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-studentapplications',
  templateUrl: './studentapplications.component.html',
  styleUrls: ['./studentapplications.component.css']
})
export class StudentapplicationsComponent implements OnInit {

  StudentApplication:any
  ShowDetails:any;
  applications : Observable<applicationDetails[]> | any;
  restURL: string;
  constructor(private stu:StudentapplicationsService,private myRouter:Router) {
    this.restURL="http://localhost:8989/"
   }

  ngOnInit(): void {
    this.reloadData();
    this.StudentApplication=sessionStorage.getItem("");
    /*this.stu.ShowDetails(this.StudentApplication).subscribe(
      (data)=>{
        console.log(data);
        this.StudentApplication=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )*/
  }
  reloadData() {
    this.applications=this.stu.getapplicationList();
  }

}
