import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {ProductService} from "../../shared/services/product.service";
import {Router} from "@angular/router";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  quantity: number = 0;
  subtotal: number;
  shippingPrice: number = 10;
  total: number;

  products: Product[] = [];

  private subscription: any;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productService: ProductService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.subscription = this.shoppingCartService.shoppingCartObserver.subscribe((newValue) => {
      this.products = newValue;

      this.subtotal = this.shoppingCartService.sumSubtotalOfPrice();
      this.total = this.subtotal + this.shippingPrice;
    });
  }

  removeProductFromCart(product: Product) {
    this.shoppingCartService.deleteProductFromShoppingCart(product);

    product.stockCount += 1;
    this.productService.refreshProductList(product);
  }

  navigateBackToProducts() {
    this.router.navigate(['/products']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
