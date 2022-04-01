import {
  AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {UserReview} from "../../models/UserReview";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements DoCheck, AfterViewInit {
  @Input('nameOfProduct') product: any;
  @Output() mostRecentData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('main') main: ElementRef;

  offsetTop = 0;
  offsetLeft = 0;

  getMostRecentData(userReview: UserReview) {
    this.mostRecentData.emit(userReview);
  }

  ngDoCheck(): void {
    if (this.main && this.product) {
      this.offsetTop = this.product.offsetTop;
      this.offsetLeft = this.product.offsetLeft;
    }
  }

  ngAfterViewInit(): void {
    if (this.main && this.product) {
      this.product.offsetTop = this.main.nativeElement.offsetTop;
      this.product.offsetLeft = this.main.nativeElement.offsetLeft;
    }
  }

}
