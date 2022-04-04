import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import TestData from "../../utils/TestData";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  params: any;
  productId: number;
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.params = this.route.snapshot;
    if (this.params) {
      this.productId = parseInt(<string>this.params.paramMap.get('id'));
    }

    this.product = TestData.getProductById(this.productId);
  }

  goBack() {
    this.router.navigate(['/products', {id: this.productId, test: 'TestValue'}]);
  }

}
