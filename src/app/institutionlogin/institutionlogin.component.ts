import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Institution } from '../institution';
import { InstitutionloginService } from '../institutionlogin.service';

@Component({
  selector: 'app-institutionlogin',
  templateUrl: './institutionlogin.component.html',
  styleUrls: ['./institutionlogin.component.css']
})
export class InstitutionloginComponent implements OnInit {

  constructor(private add:InstitutionloginService,private myrouter:Router) { }

  ngOnInit(): void {}
  user:any;
  Institution: Institution=new Institution();
  loginValues:any;
  loginpass:any;
  loginValid:any;
  
  form=new FormGroup({
    'loginid':new FormControl('',Validators.required),
    'password':new FormControl('',Validators.required)
  });
  login()
  {
      console.log(this.form.value);
      this.add.login(this.form.value).subscribe(data=>{
        let res=data;
          if(res.status==200)
          {
            this.myrouter.navigate(['/institutionhome']);
          }
      })
      
  }

}