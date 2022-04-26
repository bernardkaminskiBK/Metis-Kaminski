import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  product: any;

  constructor(private route: ActivatedRoute, private router: Router, private data: ProductService) {
  }

  ngOnInit(): void {
  this.route.paramMap.subscribe( (param) => {
    this.productId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.product = this.data.getProductById(this.productId);

    // Alternativa na upozornenie ze ups nie je taky produkt alebo radsej hodit tam hlasku ze
    // product not found napriklad, okej to-do do buducna...
    if(!this.product) {
      this.router.navigate(['/404notFound']);
    }
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
