import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentloginService } from '../studentlogin.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  constructor(private add:StudentloginService,private myRouter:Router) { }

  ngOnInit(): void {
  }
  user:any;
  Student:Student=new Student();
  loginValues:any;
  loginpass:any;
  loginValid:any;
  form=new FormGroup({
    'Email':new FormControl('',Validators.required),
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
  }
}
