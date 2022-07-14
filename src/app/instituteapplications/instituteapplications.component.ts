import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteapplicationService } from '../instituteapplication.service';
import { StudentapplicationsService } from '../studentapplications.service';

@Component({
  selector: 'app-instituteapplications',
  templateUrl: './instituteapplications.component.html',
  styleUrls: ['./instituteapplications.component.css']
})
export class InstituteapplicationsComponent implements OnInit {

  instituteapplication:any
  restURL: string;
  
  constructor(private inst:InstituteapplicationService,private myRouter:Router) {
    this.restURL="http://localhost:8989/"
   }
   
   ngOnInit(): void {
    this.instituteapplication=this.inst.getapplicationList();
    this.reloadData();
  }
  
   reloadData() {
      this.instituteapplication=this.inst.getapplicationList();
    }
  }

