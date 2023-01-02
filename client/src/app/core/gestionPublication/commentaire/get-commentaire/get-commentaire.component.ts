import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommentaireService } from '../services/commentaire.service';
import * as moment from 'moment/moment';
import { PublicationService } from '../../services/publication.service';
import { Subscribable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-get-commentaire',
  templateUrl: './get-commentaire.component.html',
  styleUrls: ['./get-commentaire.component.css'],
})
export class GetCommentaireComponent implements OnInit {
  @Input() idP: any;
  allCom: any;
  moment: any = moment;
 
  idUserCon:any
  @Output() nbrCom = new EventEmitter();
  subscription!: Subscription;
  userData : any
  

  constructor(
    private sc: CommentaireService, private toastr: ToastrService
    
  ) {}
 

  ngOnInit(): void {
    this.subscription = this.sc.getRefrech().subscribe(() => {
      this.getAllCommentaire();
    });
    this.getAllCommentaire();
    this.userData = environment.checkAuth.isAuthenticated
    this.idUserCon = environment.checkAuth.user.id;
    
  }
  getAllCommentaire() {
    this.sc.get(this.idP).subscribe((res) => {
      this.allCom = res[0];
      this.nbrCom.emit(this.allCom.length);
  
    });
  }
  delet(id:any) {
    
    this.sc
      .deletCom(id)
      .subscribe();
      
      this.toastr.error("Supprimer");

  }
}
