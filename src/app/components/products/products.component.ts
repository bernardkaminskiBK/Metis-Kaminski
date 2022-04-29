import {Component, OnInit} from '@angular/core';
import {UserReview} from "../../models/UserReview";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  checkBoxState: boolean;

  productList: any[];
  viewList: any[];
  sortBy: string;

  mostRecentReview: UserReview;

  private subscription: any;

  constructor(private data: ProductService) {
  }

  ngOnInit(): void {
    this.subscription = this.data.productListObserver.subscribe( (newValue: any[]) => {
       this.viewList = newValue;
    });

    this.getProductList();
    this.getMostRecentFromProductList()
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

  filteredProductList(filteredProductList: any[]) {
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
