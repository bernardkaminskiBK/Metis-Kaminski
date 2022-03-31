import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserReview} from "../../models/UserReview";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent {

  @Input('reviewsDataPDC') data: any;
  @Output() mostRecentData : EventEmitter<any> = new EventEmitter<any>();

  getMostRecentData(userReview: UserReview) {
   this.mostRecentData.emit(userReview);
  }
}
