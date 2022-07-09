import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { InstitutionregistrationComponent } from './institutionregistration/institutionregistration.component';
import { InstitutionloginComponent } from './institutionlogin/institutionlogin.component';
import { InstitutionhomeComponent } from './institutionhome/institutionhome.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DisplayComponent } from './display/display.component';
import { ScholarapplicationComponent } from './scholarapplication/scholarapplication.component';
import { StudentapplicationsComponent } from './studentapplications/studentapplications.component'
@NgModule({
  declarations: [
    AppComponent,
    StudentloginComponent,
    StudenthomeComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    StudentregistrationComponent,
    InstitutionregistrationComponent,
    InstitutionloginComponent,
    InstitutionhomeComponent,
    ContactComponent,
    AboutComponent,
    DisplayComponent,
    ScholarapplicationComponent,
    StudentapplicationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
