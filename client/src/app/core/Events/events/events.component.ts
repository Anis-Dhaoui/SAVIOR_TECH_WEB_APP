import { EVENTS } from './../../../model/eventsModel';
import { EventService } from './../../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events!: EVENTS[];

  constructor(private eventService: EventService) { }

  public getEvents(): EVENTS[] {
    return this.events;
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (data: EVENTS[]) => { this.events = data; },
      (error) => { console.log(error) },
      () => { console.log('complete success') }
    )
  }

}
