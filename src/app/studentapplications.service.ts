import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentapplicationsService {

  constructor(private myhttp:HttpClient) { }

  restURL:string="http://localhost:8989/"
  ShowDetails()
  {
    return this.myhttp.get(`${this.restURL}/Studentapplication`);
  }
}
