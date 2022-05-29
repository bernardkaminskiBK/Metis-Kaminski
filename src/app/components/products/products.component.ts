import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/models/Product';
import {UserReview} from 'src/app/models/UserReview';
import {ProductService} from 'src/app/shared/services/product.service';
import {Constants} from 'src/app/utils/Constants';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddProductDialogComponent} from "../../shared/modal-dialogs/add-product-dialog/add-product-dialog.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  checkBoxState: boolean;

  productList: Product[];
  viewList: any[];
  sortBy = Constants.AZ;

  mostRecentReview: UserReview;

  private subscription: any;

  constructor(private productService: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.productListObserver.subscribe(
      (newValue: Product[]) => {
        this.viewList = newValue;

        this.getProductList();
        this.getMostRecentFromProductList();
      }
    );
  }

  openDialog() {
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }

    const dialogRef = this.dialog.open(AddProductDialogComponent, config);
    dialogRef.disableClose = true;
  }

  private getProductList(): void {
   this.productService.getProductList().then((products) => {
     this.productList = products;
   });
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentReview = userReview;
  }

  // Kvazi fake data len na skusku na init pre most recent comment
  getMostRecentFromProductList() {
    this.productService.getProductList().then((products) => {
      const productList = products;

    if (productList && productList.length &&
      productList[0].reviews && productList[0].reviews.length) {

      const productLength = productList.length - 1;
      const reviewLength = productList[productLength].reviews.length - 1;

      const mostRecentComment = productList[productLength].reviews[reviewLength].comment;
      const mostRecentDate = productList[productLength].reviews[reviewLength].date;
      this.mostRecentReview = new UserReview(mostRecentDate, mostRecentComment);
    } else {
      this.mostRecentReview = new UserReview('', '');
    }
    });
  }

  filteredProductList(filteredProductList: Product[]) {
    this.viewList = filteredProductList;
  }

  pushFurtherCheckBoxState(isCheckBoxChecked: boolean) {
    this.checkBoxState = isCheckBoxChecked;
  }

  clickSort(str: string) {
    this.sortBy = str;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
