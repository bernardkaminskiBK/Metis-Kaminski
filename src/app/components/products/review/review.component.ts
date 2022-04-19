import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserReview} from "../../../models/UserReview";
import Utils from "../../../utils/Utils";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() inputProduct: any;
  @Output() mostRecentReview: EventEmitter<any> = new EventEmitter<any>();

  listOfComments: any[] = [];

  @ViewChild('input') textArea: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.listOfComments = this.inputProduct.reviews;
  }

  addComment() {
    if (this.textArea.nativeElement.value) {
      this.inputProduct.reviews.push({
        date: Utils.getFormattedCurrentDate(),
        comment: this.textArea.nativeElement.value
      });
      this.listOfComments = this.inputProduct.reviews;

      this.textArea.nativeElement.value = '';
      this.getMostRecentReview(this.listOfComments);
    } else {
      alert('The text area of comment is empty.');
    }
  }

  private getMostRecentReview(userReviews: any []) {
    const mostRecentDate = userReviews[userReviews.length - 1].date;
    const mostRecentComment = userReviews[userReviews.length - 1].comment;
    this.mostRecentReview.emit(new UserReview(mostRecentDate, mostRecentComment));
  }

}
