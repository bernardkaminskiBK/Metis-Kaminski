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
        name: "Ananas",
        category: "Food",
        price: 3.99,
        stock: 0,
        description: "",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          },
          {
            name: "Vendor 2",
            productInStock: 0
          },
          {
            name: "Vendor 2",
            productInStock: 3
          }
        ]
      },
      {
        name: "Product name",
        category: "Products",
        price: 9000,
        stock: 24,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
          "              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of\n" +
          "              type and scrambled it to make a type specimen book.",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          },
          {
            name: "Vendor 2",
            productInStock: 0
          },
          {
            name: "Vendor 3",
            productInStock: 3
          },
          {
            name: "Vendor 4",
            productInStock: 32
          },
          {
            name: "Vendor 5",
            productInStock: 22
          }
        ]
      },
      {
        name: "Wardrobe",
        category: "Furniture",
        price: 255.55,
        stock: 0,
        description: "",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          },
          {
            name: "Vendor 2",
            productInStock: 0
          },
          {
            name: "Vendor 3",
            productInStock: 3
          },
          {
            name: "Vendor 4",
            productInStock: 32
          },
          {
            name: "Vendor 5",
            productInStock: 22
          }
        ]
      },
      {
        name: "Addidas",
        category: "shoes",
        price: 0,
        stock: 8,
        description: "Very nice and good shoes, I promise.",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          },
          {
            name: "Vendor 2",
            productInStock: 0
          },
          {
            name: "Vendor 3",
            productInStock: 3
          }
        ]
      },
      {
        name: "Watch",
        category: "Clocks",
        price: 8990.55,
        stock: 2,
        description: "Watches are important to observing time.",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          }
        ]
      },
      {
        name: "Bananas",
        category: "Food",
        price: 1.25,
        stock: 102,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\n" +
          "              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of\n" +
          "              type and scrambled it to make a type specimen book.",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          },
          {
            name: "Vendor 2",
            productInStock: 1
          },
          {
            name: "Vendor 3",
            productInStock: 3
          },
          {
            name: "Vendor 4",
            productInStock: 1
          },
          {
            name: "Vendor 5",
            productInStock: 22
          },
          {
            name: "Vendor 6",
            productInStock: 1
          },
          {
            name: "Vendor 7",
            productInStock: 22
          },
          {
            name: "Vendor 8",
            productInStock: 1
          },
          {
            name: "Vendor 9",
            productInStock: 132
          },
          {
            name: "Vendor 10",
            productInStock: 22
          }
        ]
      },
      {
        name: "Coat",
        category: "Clothes",
        price: 125.00,
        stock: 12,
        description: "Coat for cold nights.",
        vendors: [
          {
            name: "Vendor 1",
            productInStock: 1
          },
          {
            name: "Vendor 2",
            productInStock: 0
          },
          {
            name: "Vendor 3",
            productInStock: 3
          },
          {
            name: "Vendor 4",
            productInStock: 0
          },
          {
            name: "Vendor 5",
            productInStock: 22
          },
          {
            name: "Vendor 6",
            productInStock: 0
          },
          {
            name: "Vendor 7",
            productInStock: 0
          },
          {
            name: "Vendor 8",
            productInStock: 0
          },
          {
            name: "Vendor 9",
            productInStock: 132
          },
          {
            name: "Vendor 10",
            productInStock: 22
          }
        ]
      }
    ]
  }
}
