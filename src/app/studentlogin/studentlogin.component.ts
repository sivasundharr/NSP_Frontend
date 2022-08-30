import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  sloginForm:FormGroup;
  
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService,fb:FormBuilder) { 

    this.sloginForm = fb.group({
      'email':['',Validators.required],
      'password':['',Validators.required]
    })

  }

  ngOnInit(): void {}
  
  checkLogin(formValue:any) {
    
    this.loginService.login(formValue).subscribe((response) => {
 
    if(response)  // response -> true or false
    {
      sessionStorage.setItem('email',formValue.email);
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.router.navigate(['/studenthome']);
      this.successMessage = 'Login Successful.';
    }

   
    
  });

  this.invalidLogin = true;
  this.loginSuccess = false;
  }
}