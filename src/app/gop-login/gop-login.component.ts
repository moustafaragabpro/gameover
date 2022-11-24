import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GosAuthService } from './../services/gos-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gop-login',
  templateUrl: './gop-login.component.html',
  styleUrls: ['./gop-login.component.scss']
})
export class GopLoginComponent implements OnInit {

  loginErrorMsg:string = '';

  constructor(private _GosAuthService:GosAuthService , private _Router:Router) {
    if(this._GosAuthService.userData != null) {
      this._Router.navigate(['/home'])
    }
   }

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/) ]),
  })

  ngOnInit(): void {

  }

  submitLoginForm(loginForm : FormGroup) {
    this._GosAuthService.login(loginForm.value).subscribe({
      next : response => {
        if(response.message == 'success') {
          localStorage.setItem('token' , response.token);
          this._GosAuthService.saveUserData();
          this._Router.navigate(['/home']);
        }
        else this.loginErrorMsg = response.message ;
      } ,
      error : err => console.log(err)
    })
  }
}
