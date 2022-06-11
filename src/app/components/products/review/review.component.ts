import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserReview} from "../../../models/UserReview";
import Utils from "../../../utils/Utils";
import {Product} from "../../../models/Product";
import {Review} from "../../../models/Review";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() inputProduct: Product;
  @Output() mostRecentReview: EventEmitter<UserReview> = new EventEmitter<UserReview>();

  listOfComments: Review[] = [];

  @ViewChild('input') textArea: ElementRef;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listOfComments = this.inputProduct.reviews;
  }

  addComment() {
    if (this.textArea.nativeElement.value) {

      const review = new Review();
      review.date = Utils.getFormattedCurrentDate();
      review.comment = this.textArea.nativeElement.value;

      this.listOfComments.push(review);
      this.mostRecentReview.emit(new UserReview(review.date,  review.comment));

      this.inputProduct.reviews = this.listOfComments;
      this.productService.updateProduct(this.inputProduct);

      this.textArea.nativeElement.value = '';

    } else {
      alert('The text area of comment is empty.');
    }
  }

}
