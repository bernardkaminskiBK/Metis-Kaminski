import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-badge',
  templateUrl: './shopping-cart-badge.component.html',
  styleUrls: ['./shopping-cart-badge.component.scss']
})
export class ShoppingCartBadgeComponent implements OnInit {

  hidden = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToShoppingCart() {
    this.router.navigate(['shopping-cart']);
  }
}
