import { Component, OnInit } from '@angular/core';
import { GosAuthService } from './../../services/gos-auth.service';

@Component({
  selector: 'goc-navbar',
  templateUrl: './goc-navbar.component.html',
  styleUrls: ['./goc-navbar.component.scss']
})
export class GocNavbarComponent implements OnInit {
  isLogin:boolean = false ;

  constructor(private _GosAuthService : GosAuthService) { }

  ngOnInit(): void {
    this._GosAuthService.userData.subscribe({
      next : () => {
        if(this._GosAuthService.userData.getValue() != null) this.isLogin = true ;
        else this.isLogin = false ;
      }
    })
  }

  logout() {
    this._GosAuthService.logout();
  }


}
