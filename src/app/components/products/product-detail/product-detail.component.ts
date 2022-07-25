import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../../shared/services/product.service';
import {Product} from '../../../models/Product';

interface Gallery {
  title: string;
  url: string;
  description: string;
}

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
  hideAddComment: boolean;

  myGallery: Gallery[];

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
    this.hideAddComment = !this.urlName.includes('/admin')

    this.myGallery = [
      {
        title: 'Tile 1',
        url: 'assets/images/big/tile1.jpg',
        description: 'Description Tile 1 image'
      },
      {
        title: 'Tile 2',
        url: 'assets/images/big/tile2.jpg',
        description: 'Description Tile 2 image'
      },
      {
        title: 'Tile 3',
        url: 'assets/images/big/tile3.jpg',
        description: 'Description Tile 3 image'
      },
      {
        title: 'Tile 4',
        url: 'assets/images/big/tile4.jpg',
        description: 'Description Tile 4 image'
      },
      {
        title: 'Tile 5',
        url: 'assets/images/big/tile5.jpg',
        description: 'Description Tile 5 image'
      },
      {
        title: 'Tile 6',
        url: 'assets/images/big/tile6.jpg',
        description: 'Description Tile 6 image'
      }
    ]
  }

  goBack() {
    if (this.urlName.includes('/admin')) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/products']);
    }
  }

}
