import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(    private http: HttpClient,
    private router: Router,) { }
  //getuser
  getuser(){
    return this.http.get(`${environment.BaseUrl}users`)
  }
  //post user
  create(form:any){
    
    return this.http.post(`${environment.BaseUrl}users`,form)
  }
}
