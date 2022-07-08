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
UserData:any;
  ngOnInit(): void 
  {
    this.logedin=sessionStorage.getItem("userlogedIn");
    this.add.ShowDetails(this.logedin).subscribe(
      (data)=>{
        console.log(data);
        this.UserData=data;
       if(this.UserData.scheme==null)
       {
         this.UserData.Fixscheme=this.UserData.girlscheme;
       }
       else
       {
        this.UserData.Fixscheme=this.UserData.scheme;
       }
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }
  }
 

