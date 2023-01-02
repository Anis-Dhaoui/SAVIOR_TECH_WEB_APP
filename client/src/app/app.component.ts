import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin: boolean = false;
  isEventDetail: boolean = false;
  title = 'SaviorTech_Frontend';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Check when access to event to detail hide sidebar 
      var path = window.location.pathname.split('events/')[1];
      this.isEventDetail = path && path.length !== 0 ? true : false

      // Check when Access to admin Dashboard hide Client interface and show admin dashboard
      this.isAdmin = window.location.pathname === "/admin";
    });
  }

  ngOnInit(): void {
  }
}
