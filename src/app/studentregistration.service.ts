import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentloginService } from './studentlogin.service';
import { Studentregis } from './studentregis';

@Injectable({
  providedIn: 'root'
})
export class StudentregistrationService {

  response:any;
  constructor(private myhttp:HttpClient) { }
restURL:string="http://localhost:8989";
getStudent()
{
  return this.myhttp.get(this.restURL+"/register-student")
}
addStudent(add:Studentregis)
{
  console.log(add);
  return this.myhttp.post(this.restURL+"/register-student",add)
}

}