import {
  Component, DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {UserReview} from "../../../models/UserReview";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements DoCheck {
  @Input('Product') product: any;
  @Output() mostRecentData: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('main') main: ElementRef;

  offSetTopProduct = 0;
  offSetLeftProduct = 0;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngDoCheck() {
    if (this.main && this.main.nativeElement) {
      if (this.offSetTopProduct !== this.main.nativeElement.offsetTop) {
        setTimeout(() => {
          this.offSetTopProduct = this.main.nativeElement.offsetTop;
        });
      }

      if (this.offSetLeftProduct !== this.main.nativeElement.offsetLeft) {
        setTimeout(() => {
          this.offSetLeftProduct = this.main.nativeElement.offsetLeft;
        });
      }
    }
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentData.emit(userReview);
  }

  navigateToProductDetail() {
    this.router.navigate(['product-detail', this.product.id], { relativeTo: this.route});
  }

  addProductToShoppingCart() {
    console.log('add to cart: ' + this.product.name);
  }
}
