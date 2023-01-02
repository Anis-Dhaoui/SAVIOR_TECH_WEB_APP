import { Injectable } from '@angular/core';
import { CanActivate }    from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  checkAuth = environment.checkAuth;

  constructor(private router: Router) { }
  canActivate() {
    console.log(this.checkAuth);
    //Your redirect logic/condition. I use this.
    if (this.checkAuth &&this.checkAuth.isAuthenticated && this.checkAuth.isAdmin) {
     this.router.navigate(['/admin']);
    }else{
      this.router.navigate(['']);
    }
    return true;
}
}
