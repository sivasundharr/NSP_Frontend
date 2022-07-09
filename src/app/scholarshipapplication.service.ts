import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicDetails } from './scholarshipapplicationdetails';

@Injectable({
  providedIn: 'root'
})
export class ScholarshipapplicationService {

  constructor(private myhttp:HttpClient) { }
  restUrl:string="http://localhost:8989";

  getStudent(){
    return this.myhttp.get(this.restUrl+"/student")
  }

  addStudent(add:BasicDetails){
    return this.myhttp.post(this.restUrl+"/studentapplication",add)
  }
}
