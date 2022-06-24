import {Component, OnInit} from '@angular/core';
import {Product} from 'src/app/models/Product';
import {UserReview} from 'src/app/models/UserReview';
import {ProductService} from 'src/app/shared/services/product.service';
import {Constants} from 'src/app/utils/Constants';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  checkBoxState: boolean;

  viewList: Product[];
  sortBy = Constants.AZ;

  mostRecentReview: UserReview;

  private subscription: any;

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.productService.getProductList().then((products) => {
      this.viewList = products;
      this.getMostRecentFromProductList();
    });
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentReview = userReview;
  }

  // TODO: Kvazi fake data len na skusku na init pre most recent comment
  getMostRecentFromProductList() {
    this.mostRecentReview = new UserReview('', '');
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

  refreshProductList() {
    this.productService.getProductList().then((products) => {
      this.viewList = products;
    });
  }
}
