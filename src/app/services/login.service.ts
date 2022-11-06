import { Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  checked=false;
  user!: SocialUser;
  loggedIn!: boolean;
  originalPath!:string;

  constructor(private authService: SocialAuthService,
    private router:Router) {

      this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
      if(this.user){
        this.loggedIn=true;
        if(this.originalPath){
          this.router.navigate([this.originalPath]);
          this.originalPath='';
        }else
          this.router.navigate(['']);
      }else{
        this.authService.authState.subscribe((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;
          this.loggedIn = (user != null);
          if(this.loggedIn){
            if(this.originalPath){
              this.router.navigate([this.originalPath]);
              this.originalPath='';
            }else
              this.router.navigate(['']);
          }else{
            this.router.navigate(['/login']);
          }
        });
      }
   }
  isAuth():boolean{
    return this.loggedIn;
  }
  async refreshToken(): Promise<void> {
    return this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }
  /*
  async signInWithGoogle():Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }*/
  async signOut(): Promise<void> {
    return await this.authService.signOut();
  }

}