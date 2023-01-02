import { Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  statusMsg!:any;

  user = environment.checkAuth;
  public userData!: User;


  constructor( private userService:UserService, private toastr: ToastrService,private route: Router) {
 
  }

  ngOnInit(): void {
    this.userData = this.user.isAuthenticated ? this.user.user : null;
  }

  saveUpdate(){
    this.userService.updateUser(this.userData).subscribe((res)=>{
      console.log(res)
      this.statusMsg=res;
      this.toastr.success(this.statusMsg.message,'Success');
    },
    (error) => { this.toastr.error(error.error.statusMsg, 'Conflict:') }
    )
  }

}
