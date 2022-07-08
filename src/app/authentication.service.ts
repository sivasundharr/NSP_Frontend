import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  saveDealer(dealer:Object):Observable<Object>
  {
    return this.http.post("http://localhost:8989/register-student",Student);
  }

  login(dealer:any):Observable<any>
  {
    return this.http.post("http://localhost:8989/login-student",Student);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('username')
  }

  getDealersList():Observable<any>{
    return this.http.get("http://localhost:8989/Students");
  }
}