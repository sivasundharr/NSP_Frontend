import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-studentapplications',
  templateUrl: './studentapplications.component.html',
  styleUrls: ['./studentapplications.component.css']
})
export class StudentapplicationsComponent implements OnInit {

  stuapplications:any
  ShowDetails:any;

  constructor(private stu:StudentapplicationsService,private myRouter:Router) { }

  ngOnInit(): void {
    this.stuapplications=sessionStorage.getItem("aadhar");
    this.stu.ShowDetails(this.stuapplications).subscribe(
      (data)=>{
        console.log(data);
        this.stuapplications=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
