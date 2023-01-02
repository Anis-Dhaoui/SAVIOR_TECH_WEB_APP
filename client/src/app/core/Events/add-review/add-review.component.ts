import { ToastrService } from 'ngx-toastr';
import { REVIEW } from './../../../model/reviewModel';
import { Component, OnInit, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input() eventIdProps: any;
  message!: string;
  rating!: number;

  userInfo = environment.checkAuth;

  userId: string = this.userInfo.user ? this.userInfo.user.id : null;

  @Output() newReviewEVent = new EventEmitter<any>();

  constructor(config: NgbRatingConfig, private toastr: ToastrService) {
    config.max = 5;
    config.readonly = false;
  }

  ngOnInit(): void {
  }

  reviewEmmiter() {
    if (this.userInfo.isAuthenticated) {
      var review = {
        message: this.message,
        rating: this.rating,
        EventId: this.eventIdProps,
        UserId: this.userId,
      }
      this.newReviewEVent.emit(review);
      this.message = "";
      this.rating = 0;
    } else {
      this.toastr.warning('Please signin to post reviews!', 'Singin required');
    }
  }
}
