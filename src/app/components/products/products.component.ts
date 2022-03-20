import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
        name: "Product name",
        category: "Products",
        price: 9000,
        stock: 24,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
          "              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of\n" +
          "              type and scrambled it to make a type specimen book.",
        vendors: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"]
      },
      {
        name: "Wardrobe",
        category: "Furniture",
        price: 255.55,
        stock: 0,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
          "              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of\n" +
          "              type and scrambled it to make a type specimen book.",
        vendors: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4", "Vendor 5"]
      },
      {
        name: "Adidas",
        category: "shoes",
        price: 0,
        stock: 8,
        description: "Very nice and good shoes, I promise.",
        vendors: ["Vendor 1", "Vendor 2", "Vendor 3"]
      },
      {
        name: "Watch",
        category: "Clocks",
        price: 8990.55,
        stock: 2,
        description: "Watches are important to observing time.",
        vendors: ["Vendor 1"]
      },
      {
        name: "Bananas",
        category: "Grocery",
        price: 1.25,
        stock: 102,
        description: "Mnam mnam",
        vendors: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4",
          "Vendor 5", "Vendor 6", "Vendor 7", "Vendor 8", "Vendor 9",
          "Vendor 10", "Vendor 11", "Vendor 12"]
      },
      {
        name: "Coat",
        category: "Clothes",
        price: 125.00,
        stock: 12,
        description: "Coat for cold nights.",
        vendors: ["Vendor 1", "Vendor 2", "Vendor 3", "Vendor 4"]
      },
    ]
  }
}
