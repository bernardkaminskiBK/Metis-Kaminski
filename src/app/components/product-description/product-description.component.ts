import {
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input, OnChanges, OnDestroy, OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {UserReview} from "../../models/UserReview";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements DoCheck, OnChanges {
  @Input('Product') product: any;
  @Output() mostRecentData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('main') main: ElementRef;

  offSetTopProduct = 0;
  offSetLeftProduct = 0;

  ngDoCheck() {
    if (this.main) {
      this.offSetTopProduct = this.main.nativeElement.offsetTop;
      this.offSetLeftProduct = this.main.nativeElement.offsetLeft;
      console.log('ngDoCheck(): ' + this.product.name);
    }
  }

  ngOnChanges() {
    // if (this.main) {
    //   this.offSetTopProduct = this.main.nativeElement.offsetTop;
    //   this.offSetLeftProduct = this.main.nativeElement.offsetLeft;
    //   console.log('ngOnChanges(): ' + this.product.name);
    // }
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentData.emit(userReview);
  }

}
