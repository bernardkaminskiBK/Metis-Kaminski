import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import TestData from "../../utils/TestData";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  product: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  this.route.paramMap.subscribe( (param) => {
    this.productId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.product = TestData.getProductById(this.productId);
  });
  }

  // Ponechal som tu to ako priklad :-)
  // navigateTo() {
  //   this.router.navigate(['/product-detail/6']);
  // }

  goBack() {
    this.router.navigate(['/products']);
  }

}
