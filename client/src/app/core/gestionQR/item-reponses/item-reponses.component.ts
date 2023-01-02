import { Component, OnInit,Input } from '@angular/core';
import { ReponsesService } from '../../../services/Reponses.services';
import * as moment from 'moment';
@Component({
  selector: 'app-item-reponses',
  templateUrl: './item-reponses.component.html',
  styleUrls: ['./item-reponses.component.css']
})
export class ItemReponsesComponent implements OnInit {
  @Input()  public listReponses!:any;
  moment: any = moment;
  constructor() { }

  ngOnInit(): void {
   
  }

}
