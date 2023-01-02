import { Component, OnInit , Input } from '@angular/core';
import { question } from '../../../model/question';
import { reponses } from '../../../model/reponses';
import { QuestionService } from '../../../services/Question.services';
import { ReponsesService } from '../../../services/Reponses.services';
import * as moment from 'moment/moment';
import { Route, Router,ActivatedRoute } from '@angular/router';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { aimes } from 'src/app/model/Aimes';
import { AimesService } from 'src/app/services/Aime.services';
@Component({
  selector: 'app-item-question',
  templateUrl: './item-question.component.html',
  styleUrls: ['./item-question.component.css']
})
export class ItemQuestionComponent implements OnInit {
  searchText: any;
  userData : any 
  idUserCon:any 
  @Input() public listQuestion!:any;
  moment: any = moment;
 public reponses:reponses;
public aimes:aimes
  constructor(private aimesService:AimesService,private http: HttpClient,private router: ActivatedRoute,private QuestionService:QuestionService,private ReponsesService:ReponsesService,private route:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    
    this.reponses=new reponses();
    this.userData  = environment.checkAuth.isAuthenticated;
    this.idUserCon = environment.checkAuth.user.id;
  this.aimes=new aimes();
  }
  save(){
    this.ReponsesService.addReponses(this.reponses).subscribe(
      ()=>{ this.route.navigate(['/question'])}
    )
  }
delete(id:string, i:number){
this.QuestionService.deleteQuestion(id).subscribe(
  ()=>{this.toastr.success("SUCESS", "Your question has been added"),this.listQuestion.splice(i, 1)},
  (error) => { this.toastr.error("ERROR", "Authentication problem") },

)
}
reaction(id:string,reaction:string){
this.aimes.questionId=id;
this.aimes.reaction=reaction;
console.log(this.aimes);
this.aimesService.addAimes(this.aimes).subscribe(
  ()=>{this.toastr.success("SUCESS", "Your Reaction has been added")},
  
 (error) => { this.toastr.error("ERROR", "Authentication problem") },

)
}
}
