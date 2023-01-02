import { REVIEW } from './../../../model/reviewModel';
import { ToastrService } from 'ngx-toastr';
import { EventService } from './../../../services/event.service';
import { EVENTS } from './../../../model/eventsModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment/moment';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  event!: EVENTS;
  eventId!: any;
  reviews!: REVIEW[];
  participants!: any;
  isParticipated: boolean = false;
  userInfo = environment.checkAuth;

  moment: any = moment;


  constructor(private route: ActivatedRoute, private eventService: EventService, private toastr: ToastrService) {
    this.event = new EVENTS();
  }

  ngOnInit(): void {
    this.fetchReviews();
  }

  // FETCH ALL REVIEWS OF THE EVENT
  fetchReviews() {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.eventService.getOneEvent(this.eventId).subscribe(
      (data) => {
        console.log(data)
        this.event = data;
        this.reviews = data.Reviews;
        this.participants = data.Users;

        this.event.Users.map((item: any) => {
          if (this.userInfo.user && this.userInfo.user.id == item.id) {
            this.isParticipated = true;
          }
        })
      },
      (err) => {
        this.toastr.error("Cannot fetch data", "Error");
      }
    )
  }

  // POST NEW REVIEW
  postReview(review: any) {
    this.eventService.addReview(review).subscribe(
      (res) => {
        this.fetchReviews();
        this.toastr.success(res.message, "Success");
      },
      (err) => {
        this.toastr.error("Review couldn't be posted", "OOPS");
      }
    )
  }

  // DELETING REVIEW
  deleteRev(revId: string) {
    const index = this.reviews.findIndex(item => item.id === revId);
    this.eventService.removeReview(revId).subscribe(
      (res) => {
        this.reviews.splice(index, 1);
        this.toastr.success(res.message, "Success");
      },
      (err) => {
        this.toastr.error("Review couldn't be deleted", "OOPS");
      }
    )
  }

  // PARTICIPATE TO EVENT
  participate() {
    if (this.userInfo.isAuthenticated) {
      this.eventService.participateUser(this.eventId).subscribe((res) => {
        console.log(res);
        this.toastr.success(res.message, "Success");
      });

      this.isParticipated = !this.isParticipated;
    } else {
      this.toastr.warning('Please signin to partcipate!', 'Singin required');
    }
  }

  // PAY EVENT ONLINE USING PAYPAL
  payNow() {
    this.eventService.payEvent(this.eventId).subscribe((res) => {
      console.log("PAYMENT PROCESSING......")
      console.log(res)
      window.open(res.forwardLink, '_blank');
    })
  }

}
