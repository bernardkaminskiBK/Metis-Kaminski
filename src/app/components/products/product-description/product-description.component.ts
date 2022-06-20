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
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  AddEditProductDialogComponent
} from "../../../shared/modal-dialogs/add-edit-product-dialog/add-edit-product-dialog.component";
import {ProductFormService} from "../../../shared/services/productForm.service";

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss'],
})
export class ProductDescriptionComponent implements DoCheck {
  @Input('Product') product: Product;

  @Input() showDelete: boolean = true;
  @Input() showDetails: boolean = true;
  @Input() showEdit: boolean = true;

  @Output() mostRecentData: EventEmitter<UserReview> =
    new EventEmitter<UserReview>();

  @ViewChild('main') main: ElementRef;

  @Output() refreshProductList: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  offSetTopProduct = 0;
  offSetLeftProduct = 0;

  stockCountState: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService,
    private productFormService: ProductFormService,
    private dialog: MatDialog
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
    if (confirm('Are you sure you want to delete ' + this.product.name + '?')) {
      this.productService.deleteProduct(this.product).then(() => {
        this.refreshProductList.emit(true);
      }).catch(() => {
        console.error('Something went wrong while deleting record...')
      });
    }
  }

  editProductDialog() {
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }

    this.productFormService.fillDataEditProductForm(this.product);
    this.productFormService.addEdit = false;

    const dialogRef = this.dialog.open(AddEditProductDialogComponent, config);

    dialogRef.afterClosed().subscribe(result => {
      this.productService.getProductList().then((products) => {
        this.refreshProductList.emit(true);
      });
    });

    dialogRef.disableClose = true;
  }
}
