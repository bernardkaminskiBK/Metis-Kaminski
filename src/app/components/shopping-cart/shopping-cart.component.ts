import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  quantity: number = 0;
  products: any[] = [];

  private subscription: any;

  constructor(private shoppingCartArr: ShoppingCartService) {

  }

  ngOnInit(): void {
    this.subscription = this.shoppingCartArr.shoppingCartObserver.subscribe((newValue) =>{
      this.products = newValue;
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  removeProductFromCart(product: any) {
    this.shoppingCartArr.deleteProductFromShoppingCart(product);
  }
}
