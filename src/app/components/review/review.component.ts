import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserReview} from "../../models/UserReview";
import Utils from "../../utils/Utils";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() reviewsData: any[];
  @Output() mostRecentReview: EventEmitter<any> = new EventEmitter<any>();

  listOfComments: UserReview[] = [];

  @ViewChild('input') textArea: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    if (this.reviewsData && this.listOfComments) {
      for (let reviewData of this.reviewsData) {
        this.listOfComments.push(new UserReview(reviewData.date, reviewData.comment));
      }
    }
  }

  addComment() {
    if(this.textArea.nativeElement.value) {
      this.listOfComments
        .push(new UserReview(Utils.getFormattedCurrentDate(), this.textArea.nativeElement.value));
      this.textArea.nativeElement.value = '';
      this.getMostRecentReview(this.listOfComments);
    } else {
      alert('The text area of comment is empty.');
    }
  }

  private getMostRecentReview(userReviews: UserReview []) {
    const mostRecentDate = userReviews[userReviews.length - 1].reviewDate;
    const mostRecentComment = userReviews[userReviews.length - 1].reviewComment;
    this.mostRecentReview.emit(new UserReview(mostRecentDate, mostRecentComment));
  }

}
