import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public list!: User[];
  user!: User;
  statusMsg!:any;

  constructor(private userService: UserService, private route: Router, private toastr: ToastrService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.list = data;
    });
  }



  deleteUser(id: string, i: number) {
    this.userService.deleteUser(id).subscribe(

      // this callback function executed when request success
      (res) => {
        this.list.splice(i, 1)
        this.statusMsg=res;
        this.toastr.success(this.statusMsg.message, 'Success');
      },
      
      // this callback function executed when there is an error
      (error) => {
        this.toastr.error("Error occured", 'Error');
      },

      // this callback function executed when all works finished
      () => { console.log('complete') },

    );
  }

  blockUser(id: string, index: number) {
    this.list[index].status = "Blocked";
    this.userService.blockUser(id).subscribe(() => {

    })
  }

}



