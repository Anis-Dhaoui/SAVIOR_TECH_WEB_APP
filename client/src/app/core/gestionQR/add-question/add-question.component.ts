import { Component, OnInit } from '@angular/core';
import { question } from '../../../model/question';
import { QuestionService } from '../../../services/Question.services';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ImgurApiService } from 'src/app/services/imgur-api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  public question:question;
  imageFile: File | null;
  img:any;
  userData : any
  imgurRes:any
  constructor(private http: HttpClient, private uploadImg: ImgurApiService,private QuestionService:QuestionService,private route:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.question=new question();
    this.userData = environment.checkAuth.user
  }
  imageInputChange(imageInput: any){

    this.imageFile = imageInput.files[0]; 
    console.log(this.img)
  }

  save(){
    if (this.imageFile!=null){
      this.uploadImg.uploadImage(this.imageFile).subscribe((res) => {
        this.imgurRes = res;
        this.question.image=this.imgurRes.data.link
        console.log(this.question)
        this.QuestionService.addQuestion(this.question).subscribe(
          ()=>{this.toastr.success("SUCESS", "Your question has been added"),
           this.route.navigate(['/question'])},
           
          (error) => { this.toastr.error("ERROR", "Authentication problem"),this.route.navigate(['/signup_signin']) },
        )
      })
    }
    else{
      this.question.image==null
      this.QuestionService.addQuestion(this.question).subscribe(
        ()=>{this.toastr.success("SUCESS", "Your question has been added"),
         this.route.navigate(['/question'])},
         
        (error) => { this.toastr.error("ERROR", "Authentication problem"),this.route.navigate(['/signup_signin']) },
      )
    }

    

  }
}
