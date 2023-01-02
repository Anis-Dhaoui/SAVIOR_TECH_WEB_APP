import { Component, OnInit } from '@angular/core';
import { question } from '../../../model/question';
import { QuestionService } from '../../../services/Question.services';
import { Subscription } from 'rxjs';
import * as moment from 'moment/moment';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  public listQuestion!:any;
  moment: any = moment;
  public question:question;
  subscription! : Subscription;
  loading: boolean = false;
  searchText: any;
  
  constructor(private QuestionService:QuestionService) { }

  ngOnInit(): void {
    this.AllQuestion();
    this.subscription = this.QuestionService.getRefrech().subscribe(() => {
      this.AllQuestion();
    });
    
  }
  AllQuestion(){
    this.loading = true;
    this.QuestionService.getAllQuestion().subscribe((data) => {
      this.listQuestion = data;
      this.loading = false;
    
    });
  }
  save(){

    console.log(this.question)
    this.QuestionService.addQuestion(this.question).subscribe(
      ()=>{console.log('error')},
      ()=>{console.log('complete')}
    )
  }
}
