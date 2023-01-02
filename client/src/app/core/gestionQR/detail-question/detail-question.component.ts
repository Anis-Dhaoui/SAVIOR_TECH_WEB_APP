import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/Question.services';
import { ActivatedRoute, Router } from '@angular/router';
import { ReponsesService } from '../../../services/Reponses.services';
import * as moment from 'moment/moment';
import { reponses } from 'src/app/model/reponses';
import { vote } from 'src/app/model/vote';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { aimes } from 'src/app/model/Aimes';
import { AimesService } from 'src/app/services/Aime.services';
import { VoteService } from 'src/app/services/vote.services';
@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {
  public listQuestion!:any;
  public listReponses!:any;
  moment: any = moment;
  id:any=this.route.snapshot.paramMap.get('id');
  public reponses:reponses;
  public votes:vote;
  subscription! : Subscription;
  loading: boolean = false;
  listVote:any
  nbLike:any
  nbDislike:any
  userData : any 
  UserCon:any |null
  aimes:aimes;
  updateReponses: boolean =false;
  constructor(private voteService:VoteService,private aimesService:AimesService,private http: HttpClient,private ReponsesService:ReponsesService,private QuestionService:QuestionService, private route: ActivatedRoute,private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
   this.question();
    this.reponse();
 
    this.subscription = this.ReponsesService.getRefrech().subscribe(() => {
      this.reponse();
    });
    this.reponses=new reponses();
    this.votes=new vote();
    this.aimes=new aimes();
    this.userData  = environment.checkAuth.isAuthenticated;
    this.UserCon = environment.checkAuth.user;

  }
  reponse(){
    this.loading = true;
    this.ReponsesService.getAllReponses(this.id).subscribe((data) => {
      this.listReponses = data;
      this.loading = false;
    });
  }
question(){
  this.QuestionService.getQuestionbyId(this.id).subscribe((data) => {
    this.listQuestion = data;
  });
}

updateRe(){
  if(this.updateReponses==false){
    this.updateReponses=true;
  }
else if(this.updateReponses==true){
  this.updateReponses=false;
}

}
UpdateReponses(reponse:reponses,idd:string){
  this.reponses.id=idd
  this.reponses.message=reponse.message
console.log(this.reponses)
this.ReponsesService.updateReponses(this.reponses).subscribe(
  ()=>{this.toastr.success("SUCESS", "Your answer has been Updated"),this.router.navigate(['/question/'+this.id])}
)
}
deleteReponses(idrep:string,i:number){
this.ReponsesService.deleteReponses(idrep).subscribe()
   this.toastr.success("SUCESS", "Your answer has been Deleted"),
   this.listReponses.splice(i, 1)

}
save(){
  
  this.reponses.questionId=this.id;
  this.ReponsesService.addReponses(this.reponses).subscribe(
    ()=>{this.toastr.success("SUCESS", "Your answer has been added"),
     this.router.navigate(['/question/'+this.id])},
    (error) => { this.toastr.error("ERROR", "Authentication problem"),this.router.navigate(['/signup_signin']) },
  )
}
vote(v:string,id:string){
  this.votes.vote=v;
  this.votes.reponseId=id;
  console.log(this.votes)
this.voteService.addVote(this.votes).subscribe(   
   (p)=>{
    this.toastr.success("SUCESS", "Your Vote has been added")},
(error) => { this.toastr.error("ERROR", "Authentication problem"),this.router.navigate(['/signup_signin']) },
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
