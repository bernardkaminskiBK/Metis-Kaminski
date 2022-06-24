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

  urlName: string;
  hideAddButton: boolean = false;
  hideEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.productId = parseInt(<string>this.route.snapshot.paramMap.get('id'));

      this.urlName = window.location.pathname;

      this.data.getProductById(this.productId).then((product) => {
        this.product = product;
      }).catch(() => 'product-detail-catch-error');
    });

    this.hideAddButton = !this.urlName.includes('/admin');
    this.hideEdit = !this.urlName.includes('/products')
  }

  goBack() {
    if (this.urlName.includes('/admin')) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/products']);
    }
  }

}
