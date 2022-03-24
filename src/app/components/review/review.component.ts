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
  @Output() addedNewComments: EventEmitter<any> = new EventEmitter<any>();

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
      this.addedNewComments.emit(this.listOfComments);
      // this.saveToLocaleStorage(this.listOfComments)
    } else {
      alert('The text area of comment is empty.');
    }
  }

  // saveToLocaleStorage(listOfComments: UserReview[]) : void {
  //   localStorage.setItem(Utils.STORAGE_KEY, JSON.stringify(listOfComments));
  // }
  //
  // loadFromLocaleStorage() : UserReview[] {
  //   const rawData = localStorage.getItem(Utils.STORAGE_KEY);
  //   if(rawData) {
  //     return JSON.parse(rawData);
  //   }
  //   return [];
  // }

}
