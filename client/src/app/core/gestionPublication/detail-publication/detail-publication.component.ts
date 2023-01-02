import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment/moment';
import { publication } from 'src/app/model/publication';
import { signaler } from 'src/app/model/signaler';
import { environment } from 'src/environments/environment';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-detail-publication',
  templateUrl: './detail-publication.component.html',
  styleUrls: ['./detail-publication.component.css'],
})
export class DetailPublicationComponent implements OnInit {
  idPublication: any;
  publication: publication = new publication();
  data: any;
  
  nbrCom: any;
  moment: any = moment;
  userData : any
  userC :any

  constructor(
    private route: ActivatedRoute,
    private sp: PublicationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idPublication = this.route.snapshot.paramMap.get('id');
    this.getPublicationById();
    this.userData = environment.checkAuth.isAuthenticated
    this.userC = environment.checkAuth.user.id;
 

  }
  getPublicationById() {
    this.sp.getById(this.idPublication).subscribe((res: any) => {
      this.data = res[0][0];
      
     
    });
  }
  correction(nbrCom: any) {
    this.nbrCom = nbrCom;
  }

  delet() {
    this.sp
      .deletPub(this.idPublication)
      .subscribe(() => this.router.navigateByUrl('/allPublication'));
      this.router.navigateByUrl('/allPublication');
  }

  updatePublicatioin(){
    this.sp.update(this.idPublication , this.publication)
    .subscribe(()=> this.router.navigateByUrl('/allPublication'))
    this.router.navigateByUrl('/allPublication')
  
  }
  // signlier() {

  //   this.sp.addSignalier(this.dataSig).subscribe(()=>{
  //     
  //   });
  
  // }
}
