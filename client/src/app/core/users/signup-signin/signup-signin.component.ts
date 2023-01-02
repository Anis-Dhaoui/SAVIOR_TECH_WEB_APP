import { ImgurApiService } from './../../../services/imgur-api.service';
import { CREDS } from './../../../model/userCreds';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup-signin',
  templateUrl: './signup-signin.component.html',
  styleUrls: ['./signup-signin.component.css']
})
export class SignupSigninComponent implements OnInit {
  public user!: User;
  public list!: User;
  public creds!: CREDS;
  public authUser!: any;

  public imageFile: File;
  imgurRes: any;
  // Reset password email
  email: string;


  constructor(private userService: UserService, private uploadImg: ImgurApiService, private route: Router, private toastr: ToastrService) {
    this.user = new User();
    this.creds = new CREDS();
  }

  ngOnInit(): void {
    console.log(this.authUser);
  }


  register() {
    // this.user.avatar = this.uploadImg.uploadImage(this.imageFile);
    this.uploadImg.uploadImage(this.imageFile).subscribe((res) => {
      this.imgurRes = res;
      this.user.avatar = this.imgurRes.data.link;

      this.userService.addUser(this.user).subscribe(
        (res) => { console.log(res) },
        // this.toastr.error(err.error.message, 'Conflict:')
        (error) => { this.toastr.error(error.error.statusMsg, 'error:') },
        () => { this.user.avatar = ""; this.route.navigate(['/welcome']) }
      );
    })

    // this.userService.addUser(this.user).subscribe(
    //   (res) => { console.log(res) },
    //   // this.toastr.error(err.error.message, 'Conflict:')
    //   (error) => { this.toastr.error(error.error.statusMsg, 'error:') },
    //   () => { this.route.navigate(['/welcome']) }
    // );
    console.log(this.user)
  }

  login() {
    this.userService.login(this.creds).subscribe(
      (res) => {
        this.authUser = res;
        localStorage.setItem('token', this.authUser.token);
        localStorage.setItem('userData', JSON.stringify(this.authUser.userInfo));
        this.toastr.success(this.authUser.statusMsg, 'Success');
      },
      (error) => { this.toastr.error(error.error.statusMsg, 'Error:') },
      () => {
        this.authUser.userInfo.admin ? window.location.href = "/admin" : window.location.href = "/"
      }

    )
  }

  resetPassword() {
    var body = {
      email: this.email
    }

    this.userService.resetPassword(body).subscribe((res) => {
      this.authUser = res;
      this.toastr.success(this.authUser.statusMsg, 'Success');
    },
      (error) => { this.toastr.error(error.error.statusMsg, 'Error:') },
    )
  }

  imageInputChange(imageInput: any) {
    this.imageFile = imageInput.files[0];
    console.log(imageInput.files[0])
  }


}
