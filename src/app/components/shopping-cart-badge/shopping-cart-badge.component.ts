import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-shopping-cart-badge',
  templateUrl: './shopping-cart-badge.component.html',
  styleUrls: ['./shopping-cart-badge.component.scss']
})
export class ShoppingCartBadgeComponent implements OnInit {

  quantity: number = 0;
  hiddenBadge = false;
  products: Product[] = [];

  private subscription: any;

  constructor(private router: Router, private shopCartArr: ShoppingCartService) { }

  ngOnInit(): void {
    this.subscription = this.shopCartArr.shoppingCartObserver.subscribe((newValue) =>{
      this.products = newValue;

      this.hiddenBadge = !this.products.length;
      this.quantity = this.products.length;
    });
  }

  navigateToShoppingCart() {
    this.router.navigate(['shopping-cart']);
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
