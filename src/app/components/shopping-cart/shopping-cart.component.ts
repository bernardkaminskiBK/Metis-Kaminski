import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

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

  products: any[] = [];

  private subscription: any;

  constructor(private shoppingCartArr: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.subscription = this.shoppingCartArr.shoppingCartObserver.subscribe((newValue) => {
      this.products = newValue;

      this.subtotal = this.shoppingCartArr.sumSubtotalOfPrice();
      this. total = this.subtotal + this.shippingPrice;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  removeProductFromCart(product: any) {
    this.shoppingCartArr.deleteProductFromShoppingCart(product);
  }
}
