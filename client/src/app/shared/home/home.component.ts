import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userId: any;
  confirCode: any;
  resp: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (window.location.href.includes('/users/verifyemail')) {
      this.userId = this.activatedRoute.snapshot.paramMap.get('userId');
      this.confirCode = this.activatedRoute.snapshot.paramMap.get('confirCode');

      this.userService.confirmEmail(this.userId, this.confirCode).subscribe(
        (res) => {
          this.resp = res;
          this.toastr.success(this.resp.statusMsg, 'Success');
          this.route.navigate(['']);
        },
        (error) => {
          this.toastr.error(error.error.statusMsg, 'error:');
         this.route.navigate(['']);
        }
      )

    }
  }

}
