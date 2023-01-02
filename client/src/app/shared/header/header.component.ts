import { User } from './../../model/user';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public verif!:boolean;
user = environment.checkAuth;
public userData!: User;

  constructor( private route: Router) { }

  ngOnInit(): void {
    this.verif=environment.checkAuth.isAuthenticated;
    this.userData = this.user.isAuthenticated ? this.user.user : null;



  }
  logout(){
    localStorage.clear();
    console.log("logged out successfully");
    //  this.route.navigate(['']) 
    window.location.href ="/";

  }

}
