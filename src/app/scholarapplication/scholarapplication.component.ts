import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScholarshipapplicationService } from '../scholarshipapplication.service';
import { BasicDetails } from '../scholarshipapplicationdetails';


@Component({
  selector: 'app-scholarapplication',
  templateUrl: './scholarapplication.component.html',
  styleUrls: ['./scholarapplication.component.css']
})
export class ScholarapplicationComponent implements OnInit {
  optionValue:any;
  schemeValue:any;
  constructor(private myrouter:Router,private bas:ScholarshipapplicationService) { }

  ngOnInit(): void {
  }
  basicDetails:BasicDetails = new BasicDetails();

   savescholarshipDetails(basicDetailsForm:any){
    this.basicDetails=basicDetailsForm.value;
    console.log(basicDetailsForm.value);
    console.log(this.basicDetails);
    this.bas.addBasicDetails(this.basicDetails).subscribe(
      (data)=>{
        console.log(data);
        console.log("Persisted");
        alert("Registration done")
      },
      (error)=>{
         console.log(error)
      }
      )
   }

}
