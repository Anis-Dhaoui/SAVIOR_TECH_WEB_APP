import { Component, OnInit } from '@angular/core';
import { publication } from 'src/app/model/publication';
import { PublicationService } from '../services/publication.service';
import * as moment from 'moment/moment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-all-publication',
  templateUrl: './all-publication.component.html',
  styleUrls: ['./all-publication.component.css'],
})
export class AllPublicationComponent implements OnInit {
  listPublication: publication[] = [];
  loading: boolean = false;
  subscription! : Subscription;
  dataSearch! : any; 
  constructor(private servicePublication: PublicationService) {}
  moment: any = moment;
  ngOnInit(): void {
    this.getAllPublication();
    this.subscription = this.servicePublication.getRefrech().subscribe(() => {
      this.getAllPublication();
    
    });
  }
  getAllPublication() {
    this.loading = true;
    this.servicePublication.get().subscribe(
      (data) => {
        this.listPublication = data;
        this.loading = false;
        
      },
      (error) => {
        this.loading = false;
        
      }
    );
  }

  searchPublication(){
    this.servicePublication.search(this.dataSearch).subscribe(
      (data)=>{
       
       data = null ? this.listPublication : this.listPublication = data
      }
    )
  }
}
