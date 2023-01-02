import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent implements OnInit {

  showPwd: boolean = false;
  passMatch: boolean = true;
  newPass: string;
  retypePass: string;
  public resetPassUrl: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.resetPassUrl = window.location.href.split('users')[1];
    console.log(this.resetPassUrl);
  }

  showHidePass(){
    this.showPwd = !this.showPwd;
  }

  checkMatchPass(secondPass: any){
    this.passMatch=this.newPass === secondPass.value;
  }

  saveChanging(){
    let newPassObj = {
      newPassword: this.newPass
    }
   if( this.passMatch){
    this.userService.updatePass(newPassObj, this.resetPassUrl).subscribe((res)=>
    {
      console.log(res)
    })
    
   }

  }
}
