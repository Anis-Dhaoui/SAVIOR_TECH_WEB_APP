import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { question } from 'src/app/model/question';
import { ImgurApiService } from 'src/app/services/imgur-api.service';
import { QuestionService } from 'src/app/services/Question.services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  id:any=this.route.snapshot.paramMap.get('id');
  public listQuestion!:any;
  imageFile: File | null;
  public question:question
  imgurRes:any
  constructor(private router: Router,private route: ActivatedRoute,private QuestionService:QuestionService, private uploadImg: ImgurApiService, private toastr: ToastrService) { }

  ngOnInit(): void {
this.questions();
this.question=new question();
  }
questions(){
  this.QuestionService.getQuestionbyId(this.id).subscribe((data) => {
    this.listQuestion = data;
    console.log(this.listQuestion)
  });
}
imageInputChange(imageInput: any){

  this.imageFile = imageInput.files[0]; 
}
save(question:question){
  this.question.id=this.id;
  if(this.imageFile!=null){
    this.uploadImg.uploadImage(this.imageFile).subscribe((res) => {
      this.imgurRes = res;
      this.question.image=this.imgurRes.data.link
      console.log(this.question)
      this.QuestionService.updateQuestion(this.question).subscribe(
        ()=>{this.toastr.success("SUCESS", "Your Update has been added"),this.router.navigate(['/question/'+this.id])},
        (error) => { this.toastr.error("ERROR", "Authentication problem"),this.router.navigate(['/signup_signin']) },
        )
    })
  }
  else{
    this.question.image=this.listQuestion.image;
    this.QuestionService.updateQuestion(this.question).subscribe(
      ()=>{this.toastr.success("SUCESS", "Your Update has been added"),this.router.navigate(['/question/'+this.id])},
      (error) => { this.toastr.error("ERROR", "Authentication problem"),this.router.navigate(['/signup_signin']) },
      )
  }
  

}
}
