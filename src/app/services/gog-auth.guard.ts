import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GosAuthService } from './gos-auth.service';

@Injectable({
  providedIn: 'root'
})
export class GogAuthGuard implements CanActivate {
  constructor(private _Router : Router, private _GosAuthService:GosAuthService) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this._GosAuthService.userData.getValue() != null) return true ;

      this._Router.navigate(['/login']);
      return false ;
  }

}
