import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  URL : string =  "http://localhost:8087";

  constructor(private http:HttpClient) { }

  saveStudent(student:Object):Observable<Object>
  {
    return this.http.post(`${this.URL}/student`,student);
  }

  login(student:any):Observable<any>
  {
    return this.http.post(`${this.URL}/student/login`,student);
  }
  nodallogin(stateNodal:any):Observable<any>
  {
    return this.http.post(`${this.URL}/state-nodal/login`,stateNodal);
  }

  ministrylogin(ministry:any):Observable<any>
  {
    return this.http.post(`${this.URL}/ministry/login`,ministry);
  }

  institutelogin(institute:any):Observable<any>
  {
    return this.http.post(`${this.URL}/institute/login`,institute);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('name')
    console.log(!(user === null))
    return !(user === null)
  }
 
  logOut() {
    sessionStorage.removeItem('name')
  }

  /*getDealersList():Observable<any>{
    return this.http.get("http://localhost:8989/Students");
  }*/
}