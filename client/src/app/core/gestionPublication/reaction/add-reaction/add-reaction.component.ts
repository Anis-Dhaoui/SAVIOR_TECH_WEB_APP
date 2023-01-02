import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { reaction } from 'src/app/model/reaction';
import { ReactionService } from '../services/reaction.service';

@Component({
  selector: 'app-add-reaction',
  templateUrl: './add-reaction.component.html',
  styleUrls: ['./add-reaction.component.css'],
})
export class AddReactionComponent implements OnInit {
  reaction: reaction = new reaction();
  @Input() idP: any;
  nbrLike: any;
  nbrDisLik: any;

  constructor(private sr: ReactionService, private router: Router) {}

  ngOnInit(): void {
    this.getReaction();
    this.getReactionD();
  }

  getReaction() {
    this.sr.getLike(this.idP).subscribe((res: any) => {
      this.nbrLike = res;
    });
  }

  getReactionD() {
    this.sr.getDisLik(this.idP).subscribe((res: any) => {
      

      this.nbrDisLik = res;
    });
  }

  like() {
    this.reaction.PublicationId = this.idP;
    console.log(this.idP);
  
    this.reaction.reaction = 'jaime';
    this.sr.addLike(this.reaction).subscribe();
  }
  dislike() {
    this.reaction.PublicationId = this.idP;
    console.log(this.idP);
    this.reaction.reaction = 'jaimePas';
    this.sr.addLike(this.reaction).subscribe();
  }
}
