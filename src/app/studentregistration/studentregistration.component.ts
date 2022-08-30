import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { student } from '../student';
import { StudentregistrationService } from '../studentregistration.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {

  form:FormGroup;

  constructor(private myrouter:Router,private vhs:StudentregistrationService,fb:FormBuilder) { 

    this.form = fb.group({
      'name':['',Validators.required],
      'dob':['',Validators.required],
      'gender':['',Validators.required],
      'mobileNumber':['',Validators.required],
      'email':['',Validators.compose([Validators.email, Validators.required])],
      'institutionCode':['',Validators.required],
      'aadharNumber':['',Validators.required],
      'password':['',Validators.required],
      'ifscCode':['',Validators.required],
      'accountNo':['',Validators.required],
      'holderName':['',Validators.required],
      
    })

  }



  ngOnInit(): void {

  }
 
  //student:student=new student();
  saveStudent(formData:any)
  {
    const studentData = {
      name:formData.name,
      dob:formData.dob,
      gender:formData.gender,
      mobileNumber:formData.mobileNumber,
      email:formData.email,
      aadharNumber:formData.aadharNumber,
      password:formData.password,
      collegeId:formData.institutionCode
    };
    const bankDetail = {
      accountNo:formData.accountNo,
      holderName:formData.holderName,
      ifscCode:formData.ifscCode
    }
    console.log(student);
    console.log(bankDetail);
    alert("registration done");
      this.myrouter.navigate(['/studentlogin']);
      this.vhs.addStudent(studentData).subscribe(
        (data)=>{
          console.warn("submited successfully")
          console.log(data);
          const newBankDetail = {...bankDetail,student:data};
          this.vhs.addBankDetailsForStudent(newBankDetail).subscribe((b)=>{
            console.log(b);
          })
        },
        (error)=>
        {
          console.log(error)
        }
      )
  }
}