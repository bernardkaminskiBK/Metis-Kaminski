import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../shared/services/product.service';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productId = parseInt(<string>this.route.snapshot.paramMap.get('id'));

      this.data.getProductById(this.productId).then((product) => {
        this.product = product;
      }).catch(() => 'product-detail-catch-error');
    });
  }

  goBack() {
    this.router.navigate(['/products']);
  }

}
