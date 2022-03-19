import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList?: any[];

  ngOnInit(): void {
    setTimeout(() => {
      this.getProductList();
    }, 500);
  }

  private getProductList(): void {
    this.productList = [
      {
        name: "Adidas",
        category: "shoes",
        price: 55.25,
        stock: 8,
        description: "Very nice and good shoes, I promise.",
        vendors: ["Vendor1", "Vendor2", "Vendor3", "Vendor4"]
      },
      {
        name: "Watch",
        category: "Clocks",
        price: 25.55,
        stock: 2,
        description: "Watches are important to observing time.",
        vendors: ["Vendor1", "Vendor2", "Vendor3", "Vendor4"]
      },
      {
        name: "Bananasa",
        category: "Grocery",
        price: 1.25,
        stock: 102,
        description: "Mnam mnam",
        vendors: ["Vendor1", "Vendor2", "Vendor3", "Vendor4"]
      },
      {
        name: "Coat",
        category: "Clothes",
        price: 125.00,
        stock: 12,
        description: "Coat for cold nights.",
        vendors: ["Vendor1", "Vendor2", "Vendor3", "Vendor4"]
      },
    ]
  }
}
