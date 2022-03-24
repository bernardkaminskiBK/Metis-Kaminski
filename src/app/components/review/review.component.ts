import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() reviewsData: any[];
  @Output() addedNewComment: EventEmitter<any> = new EventEmitter<any>();

  listOfComments: string[] = [];

  @ViewChild('input') textArea: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    if (this.reviewsData && this.listOfComments) {
      for (let reviewData of this.reviewsData) {
        this.listOfComments.push(reviewData.comment);
      }
    }
  }

  addComment() {

    this.listOfComments.push(this.textArea.nativeElement.value);
    this.textArea.nativeElement.value = '';
    this.reviewsData.push();
  }
}
