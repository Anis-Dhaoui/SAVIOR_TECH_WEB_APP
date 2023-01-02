import { EVENTS } from './../../../model/eventsModel';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment/moment';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() eventList!: EVENTS[];
  moment: any = moment;


  constructor() {
  }

  ngOnInit(): void {
  }

}
