import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , BehaviorSubject } from 'rxjs';
import jwtDecode  from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GosAuthService {
  userData : any = new BehaviorSubject(null) ;


  constructor(private _HttpClient: HttpClient , private _Router : Router) {
    if(localStorage.getItem('token') != null) this.saveUserData();
  }

  signup(credentials : any) : Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' ,credentials )
  }

  login(credentials : any) : Observable<any>{
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' ,credentials )
  }

  saveUserData() {
    const token = JSON.stringify( localStorage.getItem('token'));
    this.userData.next(jwtDecode(token)) ;
  }

  logout() {
    localStorage.removeItem('token');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }

}
