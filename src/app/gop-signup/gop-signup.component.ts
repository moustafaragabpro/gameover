import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GosAuthService } from './../services/gos-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gop-signup',
  templateUrl: './gop-signup.component.html',
  styleUrls: ['./gop-signup.component.scss']
})
export class GopSignupComponent implements OnInit {
  signupErrorMsg:string = '';

  constructor(private _GosAuthService:GosAuthService , private _Router:Router) { }

  signupForm : FormGroup = new FormGroup({
    first_name : new FormControl(null , [Validators.required , Validators.minLength(3), Validators.maxLength(20)]),
    last_name : new FormControl(null , [Validators.required , Validators.minLength(3), Validators.maxLength(20)]) ,
    email : new FormControl(null , [Validators.required , Validators.email]),
    password : new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z]/) ]),
    age : new FormControl(null , [Validators.required , Validators.min(16), Validators.max(80)]),
  })

  ngOnInit(): void {
  }

  submitSignupForm(signupForm : FormGroup) {
    this._GosAuthService.signup(signupForm.value).subscribe({
      next : response => {
        if(response.message == 'success') this._Router.navigate(['/login']);
        else this.signupErrorMsg = response.message ;
      } ,
      error : err => console.log(err)
    })
  }
}
