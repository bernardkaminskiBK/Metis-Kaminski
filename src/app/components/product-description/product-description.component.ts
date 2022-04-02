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
export class ProductDescriptionComponent implements DoCheck, AfterViewInit, OnChanges, AfterViewChecked {
  @Input('Product') product: any;
  @Output() mostRecentData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('main') main: ElementRef;

  offSetTopProduct = 0;
  offSetLeftProduct = 0;

  ngOnChanges() {
    if (this.main) {
      this.offSetTopProduct = this.main.nativeElement.offsetTop;
      this.offSetLeftProduct = this.main.nativeElement.offsetLeft;
    }
  }

  ngDoCheck() {
    if (this.main) {
      // this.product.offSetTop = this.main.nativeElement.offsetTop;
      // this.product.offSetLeft = this.main.nativeElement.offsetLeft;
        this.offSetTopProduct = this.main.nativeElement.offsetTop;
        this.offSetLeftProduct = this.main.nativeElement.offsetLeft;

      // console.log('offSetLeft: ' + this.main.nativeElement.offsetLeft + ' and ' + 'offSetTop: ' + this.main.nativeElement.offsetTop);
    }
  }

  ngAfterViewInit() {
    if (this.main) {
      this.offSetTopProduct = this.main.nativeElement.offsetTop;
      this.offSetLeftProduct = this.main.nativeElement.offsetLeft;
    }
  }

  ngAfterViewChecked() {
    if (this.main) {
      this.offSetTopProduct = this.main.nativeElement.offsetTop;
      this.offSetLeftProduct = this.main.nativeElement.offsetLeft;
    }
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentData.emit(userReview);
  }

}
