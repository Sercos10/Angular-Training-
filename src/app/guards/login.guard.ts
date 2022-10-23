import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let mockLogin = true;

      let result=false;
      if(!mockLogin){
        //Not Logged
        if(route.url[0].toString()!='login'){
          //you're not logged?, ---> not alowed --> go login
          this.router.navigate(['/login']);
        }else{
          result=true;
        }
      }else{
        //Logged
        if(route.url[0].toString()=='login'){
          //again in login?, ---> not alowed
          this.router.navigate(['']);
        }else{
          result=true;
        }
      }
      return result;
  }
  
}
