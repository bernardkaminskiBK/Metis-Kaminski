import {
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {UserReview} from '../../../models/UserReview';
import {ActivatedRoute, Router} from '@angular/router';
import {ShoppingCartService} from '../../../shared/services/shopping-cart.service';
import {ProductService} from '../../../shared/services/product.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
})
export class ProductDescriptionComponent implements DoCheck {
  @Input('Product') product: Product;
  @Output() mostRecentData: EventEmitter<UserReview> =
    new EventEmitter<UserReview>();

  @ViewChild('main') main: ElementRef;

  offSetTopProduct = 0;
  offSetLeftProduct = 0;

  stockCountState: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.stockCountState = this.product.stockCount;
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
    this.router.navigate(['product-detail', this.product.id], {
      relativeTo: this.route,
    });
  }

  addProductToShoppingCart() {
    if (this.stockCountState > 0) {
      this.shoppingCartService.addProductToShoppingCart(this.product);
      this.productService.decreaseProductStockCountStateByOne(this.product);
    }
  }

  deleteProduct() {
    if(confirm('Are you sure you want to delete ' + this.product.name + '?')) {
      this.productService.deleteProduct(this.product);
    }
  }
}
