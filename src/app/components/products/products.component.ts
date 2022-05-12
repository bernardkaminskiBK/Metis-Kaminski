import {Component, Inject, OnInit} from '@angular/core';
import {Product} from 'src/app/models/Product';
import {UserReview} from 'src/app/models/UserReview';
import {ProductService} from 'src/app/shared/services/product.service';
import {Constants} from 'src/app/utils/Constants';
import {MatDialog} from '@angular/material/dialog';
import {AddProductDialogComponent} from "./add-product-dialog/add-product-dialog.component";
import {Review} from "../../models/Review";

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

  constructor(private data: ProductService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.subscription = this.data.productListObserver.subscribe(
      (newValue: Product[]) => {
        this.viewList = newValue;

        this.getProductList();
        this.getMostRecentFromProductList();
      }
    );
  }

  openDialog() {
    this.dialog.open(AddProductDialogComponent, {
      width: '30%'
    });
  }

  private getProductList(): void {
    this.productList = ProductService.products;
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentReview = userReview;
  }

  // Kvazi fake data len na skusku na init pre most recent comment
  getMostRecentFromProductList() {
    if (this.productList && this.productList.length &&
      this.productList[this.productList.length - 1].reviews &&
      this.productList[this.productList.length - 1].reviews.length) {

      const firstProduct = this.productList.shift();
      const firstReview = this.productList[this.productList.length - 1].reviews.shift();

      if (firstReview) {
        this.mostRecentReview = new UserReview(firstReview.date, firstReview.comment);
      }

    } else {
      this.mostRecentReview = new UserReview('', '');
    }
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
