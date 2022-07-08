import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string |any;
  loginSuccess = false;

  constructor(private router:Router,private loginService:AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin() {
    let dealer={
      "email":this.username,
      "password":this.password
    }
    const header= {'Content-Type':'application/json'};
    this.loginService.login(dealer).subscribe((response) => {
      console.log(response);
      if(response)
      {
        this.router.navigate(['']);
        sessionStorage.setItem('username', this.username)
        this.invalidLogin = false;
        this.loginSuccess = true;
        this.successMessage = 'Login Successful.';
      }
      else{
        this.invalidLogin = true
      }
    });
 
    this.loginSuccess = false;
  }

























  /*
  constructor(private add:StudentloginService,private myRouter:Router) { }

  ngOnInit(): void {
  }
  user:any;
  Student:Student=new Student();
  loginValues:any;
  loginpass:any;
  loginValid:any;
  form=new FormGroup({
    'email':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  });
  login()
  {
      console.log(this.form.value);
      this.add.login(this.form.value).subscribe(data=>{
        let res=data;
          if(res.status==200)
          {
            sessionStorage.setItem("userlogedIn",this.form.value.Email);
            this.myRouter.navigate(['/studenthome']);
          }
      })
  }*/
}
