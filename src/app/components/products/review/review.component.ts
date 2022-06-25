import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserReview} from "../../../models/UserReview";
import {Product} from "../../../models/Product";
import {UserService} from "../../../shared/services/UserService";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() inputProduct: Product;
  @Input() showReview: boolean;

  @Output() mostRecentReview: EventEmitter<UserReview> = new EventEmitter<UserReview>();

  listOfComments: string[] = [];

  @ViewChild('input') textArea: ElementRef;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.listOfComments = this.inputProduct.reviews;
  }

  addComment() {
    if (this.textArea.nativeElement.value) {

      this.listOfComments.push(this.textArea.nativeElement.value);

      this.inputProduct.reviews = this.listOfComments;
      this.userService.createReview(this.textArea.nativeElement.value, this.inputProduct.id);

      this.textArea.nativeElement.value = '';

    } else {
      alert('The text area of comment is empty.');
    }
  }

}
