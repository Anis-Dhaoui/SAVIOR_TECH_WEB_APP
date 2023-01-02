import { Component, Input, OnInit } from '@angular/core';
import { RatingSystem } from './starRatingCalculator'
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating-system',
  templateUrl: './rating-system.component.html',
  styleUrls: ['./rating-system.component.css']
})
export class RatingSystemComponent implements OnInit {
  @Input() reviews!: Object;
  calcRating: any = RatingSystem;

  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
