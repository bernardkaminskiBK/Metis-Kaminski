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

  constructor() {
  }

  ngOnInit(): void {

  }

  getMostRecentData(userReview: UserReview) {
   this.mostRecentData.emit(userReview);
  }
}
