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
export class ProductDescriptionComponent implements DoCheck, AfterViewInit, OnDestroy {
  @Input('nameOfProduct') product: any;
  @Output() mostRecentData: EventEmitter<any> = new EventEmitter<any>();
  @Output() actualData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('main') main: ElementRef;

  offSetTopProduct = 0;
  offSetLeftProduct = 0;

  ngDoCheck() {
    this.offSetTopProduct = this.product.offSetTop;
    this.offSetLeftProduct = this.product.offSetLeft;
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentData.emit(userReview);
  }

  ngAfterViewInit() {
    console.log('product description prave by som mal inicializovat v on init iba raz.')
    if (this.main && this.product) {
      this.product.offSetTop = this.main.nativeElement.offsetTop;
      this.product.offSetLeft = this.main.nativeElement.offsetLeft;
    }
  }

  ngOnDestroy(): void {
    // console.log('gOnDestroy() zbehol som')
    // if (this.main && this.product) {
    //   this.product.offSetTop = this.main.nativeElement.offsetTop;
    //   this.product.offSetLeft = this.main.nativeElement.offsetLeft;
    // }
  }

}
