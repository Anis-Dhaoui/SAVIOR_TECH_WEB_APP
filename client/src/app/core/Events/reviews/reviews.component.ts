import { ConfirmDialogComponent } from './../../../shared/confirm-dialog/confirm-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { REVIEW } from './../../../model/reviewModel';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment/moment';
import { EventService } from 'src/app/services/event.service';
import { environment } from 'src/environments/environment';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input() reviewsProps!: REVIEW[];
  @Output() removeRevEvent = new EventEmitter<any>();
  @Output() editRevEvent = new EventEmitter<any>();
  moment: any = moment;
  // EDIT REVIEW
  editItemId: string = "";
  message!: string;
  rating!: number;
  userInfo = environment.checkAuth;
  isAuth = this.userInfo.isAuthenticated;
  authUserId = this.userInfo.user ? this.userInfo.user.id : null;
  // Confirmation Dialog
  dialogRef: MatDialogRef<ConfirmDialogComponent> | any;

  constructor(private eventService: EventService, private toastr: ToastrService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  removeRevEmmiter(id: string) {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      disableClose: false
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete this review?"

    this.dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        console.log("Sending Event to details components to remove this review");
        this.removeRevEvent.emit(id);
      }
      this.dialogRef = "";
    });
  }

  turnReviewToEditMode(item: REVIEW) {
    this.editItemId = item.id;
    this.message = item.message;
    this.rating = item.rating;
  }

  cancelEditMode() {
    this.editItemId = "";
  }

  updateReview(i: number) {
    let updatedReview = {
      id: this.editItemId,
      message: this.message,
      rating: this.rating
    }
    this.eventService.editReview(updatedReview).subscribe(
      (res) => {
        this.reviewsProps[i].message = this.message;
        this.reviewsProps[i].rating = this.rating;
        this.editItemId = "";
        this.toastr.success(res.message, "Success");
      },
      (err) => {
        this.toastr.error("Review couldn't be updated", "OOPS");
      }
    )
  }

}