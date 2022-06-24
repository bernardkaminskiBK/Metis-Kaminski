import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserReview} from "../../../models/UserReview";
import {Product} from "../../../models/Product";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  @Input() inputProduct: Product;
  @Output() mostRecentReview: EventEmitter<UserReview> = new EventEmitter<UserReview>();

  listOfComments: string[] = [];

  @ViewChild('input') textArea: ElementRef;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.listOfComments = this.inputProduct.reviews;
  }

  addComment() {
    if (this.textArea.nativeElement.value) {

      this.listOfComments.push(this.textArea.nativeElement.value);

      this.inputProduct.reviews = this.listOfComments;
      this.productService.updateProduct(this.inputProduct).then(() => {}).catch(() => {});

      this.textArea.nativeElement.value = '';

    } else {
      alert('The text area of comment is empty.');
    }
  }

}
