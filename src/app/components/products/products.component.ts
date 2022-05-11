import {Component, Inject, OnInit} from '@angular/core';
import {Product} from 'src/app/models/Product';
import {UserReview} from 'src/app/models/UserReview';
import {ProductService} from 'src/app/shared/services/product.service';
import {Constants} from 'src/app/utils/Constants';
import {MatDialog} from '@angular/material/dialog';
import {AddProductDialogComponent} from "./add-product-dialog/add-product-dialog.component";

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
      }
    );

    this.getProductList();
    this.getMostRecentFromProductList();
  }

  openDialog() {
    this.dialog.open(AddProductDialogComponent, {
      width: '30%'
    });
  }

  private getProductList(): void {
    this.productList = this.data.getProductList();
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentReview = userReview;
  }

  // Kvazi fake data len na skusku na init pre most recent comment
  getMostRecentFromProductList() {
    if (this.productList) {
      const mostRecentComment = this.productList[0].reviews[0].comment;
      const mostRecentDate = this.productList[0].reviews[0].date;
      this.mostRecentReview = new UserReview(mostRecentDate, mostRecentComment);
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
