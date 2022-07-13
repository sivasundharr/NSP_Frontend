import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstituteapplicationsService } from '../instituteapplications.service';

@Component({
  selector: 'app-instituteapplications',
  templateUrl: './instituteapplications.component.html',
  styleUrls: ['./instituteapplications.component.css']
})
export class InstituteapplicationsComponent implements OnInit {

  instituteapplications:any
  restURL: string;

  constructor(private inst:InstituteapplicationsService,private myRouter:Router) {
    this.restURL="http://localhost:8989/"
   }

  ngOnInit(): void {
    this.reloadData();
    
  }
  reloadData() {
    this.instituteapplications=this.inst.getInstitutesList();
  }

}
