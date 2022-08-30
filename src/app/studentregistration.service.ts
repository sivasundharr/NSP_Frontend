import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  response:any;
  constructor(private myhttp:HttpClient) { }
  restURL:string="http://localhost:8087";
  
  getStudent()
  {
    return this.myhttp.get(`${this.restURL}/student`)
  }
  addStudent(studentData:any)
  {
    console.log("add student");
    console.log(studentData);
    return this.myhttp.post(`${this.restURL}/student`,studentData)
  }

  addBankDetailsForStudent(bankData:any){
    console.log("inside bank");
    return this.myhttp.post(`${this.restURL}/bank-details`,bankData);
  }

}