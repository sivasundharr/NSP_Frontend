import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { InstitutionhomeComponent } from './institutionhome/institutionhome.component';
import { InstitutionloginComponent } from './institutionlogin/institutionlogin.component';
import { InstitutionregistrationComponent } from './institutionregistration/institutionregistration.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DisplayComponent } from './display/display.component';
import { ScholarapplicationComponent } from './scholarapplication/scholarapplication.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'studentlogin',component:StudentloginComponent},
  {path:'studenthome',component:StudenthomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'institutionhome',component:InstitutionhomeComponent},
  {path:'institutionlogin',component:InstitutionloginComponent},
  {path:'institutionregistration',component:InstitutionregistrationComponent},
  {path:'studentregistration',component:StudentregistrationComponent},
  {path:'Display',component:DisplayComponent},
  {path:'scholarshipapplication',component:ScholarapplicationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
