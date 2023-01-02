import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { commentaire } from 'src/app/model/commentaire';
import { environment } from 'src/environments/environment';
import { CommentaireService } from '../services/commentaire.service';


@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css'],
})
export class AddCommentaireComponent implements OnInit {
  commentaire: commentaire = new commentaire();
  @Input() idP: any;
  @ViewChild('form') mytemplateForm ! : NgForm; 

  constructor(private sc: CommentaireService, private router: Router) {}
  userData : any
  avatar : any

  ngOnInit(): void {
    this.userData = environment.checkAuth.isAuthenticated
    this.avatar = environment.checkAuth.user.avatar
  
  }
 

  addCom() {
    this.commentaire.PublicationId = this.idP;
     this.sc
      .add(this.commentaire)
      .subscribe(() =>
        this.router.navigateByUrl('/detailPublication/' + this.idP)
        
      );
    this.router.navigateByUrl('/detailPublication/' + this.idP);
    this.mytemplateForm.reset();
  }
}
