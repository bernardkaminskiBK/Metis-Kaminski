import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserReview} from "../../models/UserReview";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Input('reviews') data: any;
  @Output() mostRecentData : EventEmitter<any> = new EventEmitter<any>();

  mostRecentReview : UserReview;

  constructor() {
  }

  ngOnInit(): void {

  }

  getListOfComments(userReviews: UserReview []) {
   const mostRecentDate = userReviews[userReviews.length - 1].reviewDate;
   const mostRecentComment = userReviews[userReviews.length - 1].reviewComment;
   this.mostRecentReview = new UserReview(mostRecentDate, mostRecentComment);
   this.mostRecentData.emit(this.mostRecentReview);
  }
}
