import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { student } from '../student';
import { StudenthomeService } from '../studenthome.service';

@Component({
  selector: 'app-studenthome',
  templateUrl: './studenthome.component.html',
  styleUrls: ['./studenthome.component.css']
})
export class StudenthomeComponent implements OnInit {

  constructor(private add:StudenthomeService,private myRouter:Router) { }
logedin:any;
studentData:any;
  ngOnInit(): void 
  {
    this.logedin=sessionStorage.getItem("userlogedIn");
    this.add.ShowDetails(this.logedin).subscribe(
      (data)=>{
        console.log(data);
        this.studentData=data;
       if(this.studentData.scheme==null)
       {
         this.studentData.Fixscheme=this.studentData.girlscheme;
       }
       else
       {
        this.studentData.Fixscheme=this.studentData.scheme;
       }
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }
  }
 

