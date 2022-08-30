import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nodal } from '../nodal'

@Component({
  selector: 'app-nodalofficer',
  templateUrl: './nodalofficer.component.html',
  styleUrls: ['./nodalofficer.component.css']
})
export class NodalofficerComponent implements OnInit {

  form:FormGroup
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService,fb:FormBuilder) {
    this.form = fb.group({
      'email':['',Validators.required],
      'password':['',Validators.required]
    });
   }

  ngOnInit(): void {
  }

  nodal:nodal=new nodal();
  checkLogin(formData) {

    this.nodal=formData;
    console.log(this.nodal)
    this.loginService.nodallogin(this.nodal).subscribe((response) => {
      console.log(response);
      if(response)
      {
        sessionStorage.setItem('nodalId', formData.email);
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.router.navigate(['/nodalhome']);
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
  }

}
