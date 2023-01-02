import { User } from './../../../model/user';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PublicationService } from '../../gestionPublication/services/publication.service';
import { QuestionService } from '../../../services/Question.services';
import * as moment from 'moment/moment';
declare var $: any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  user = environment.checkAuth;
  listPublication!: any;
  public userData!: User;
listQuestion:any
searchText: any;
moment: any = moment;
  constructor(private servicePublication: PublicationService,private QuestionService:QuestionService) { }

  ngOnInit(): void {
    this.userData = this.user.isAuthenticated ? this.user.user : null;
    this.getAllPublication();
    this.getAllQuestion();
    // $(document).ready(function () {
    //   $('[data-toggle="offcanvas"]').click(function () {
    //     $("#navigation").toggleClass("hidden-xs");
    //   });
    // });

    console.log(environment.checkAuth);
  }
  getAllPublication() {
    this.servicePublication.get().subscribe((data) => {
      this.listPublication = data;

    });
  }
  delet(idPublication: any) {
    this.servicePublication.deletPub(idPublication).subscribe();
  }
  logout() {
    localStorage.clear();
    console.log('logged out successfully');
    //  this.route.navigate([''])
    window.location.href = '/';
  }
  getAllQuestion(){
    this.QuestionService.getAdminAllQuestion().subscribe((d) => {
      this.listQuestion = d;
      console.log(this.listQuestion)
    });
  }
  StatusQuestion(id:any,i:number){
    if(this.listQuestion[i].status=='actif'){
      this.QuestionService.deleteAdminQuestion(id).subscribe(
        ()=>this.listQuestion[i].status='supprimer'
      )
    }
else  if(this.listQuestion[i].status=='supprimer'){
  this.QuestionService.deleteAdminQuestion(id).subscribe(
    ()=>this.listQuestion[i].status='actif'
  )
}
  }
}
