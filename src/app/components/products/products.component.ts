import {Component, OnInit} from '@angular/core';
import {UserReview} from "../../models/UserReview";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  checkBoxState: boolean;

  productList: any[];
  copyProductList: any[];
  inStockProductList: any[];
  mostRecentReview: UserReview;

  ngOnInit(): void {
    setTimeout(() => {
      this.getProductList();
      this.getMostRecentFromProductList()

      this.copyProductList = this.productList;
      this.inStockProductList = this.productList;
    }, 500);

  }

  private getProductList(): void {
    this.productList = [
      {
        name: 'Product 1',
        category: 'Product 1',
        price: 0,
        stockCount: 0,
        offSetTop: 0,
        offSetLeft: 0,
        vendors: [
          {name: 'Alza', stockCount: 2},
          {name: 'Agem', stockCount: 1},
          {name: 'MediaMarkt', stockCount: 1},
          {name: 'Asbis', stockCount: 1},
          {name: 'Nay', stockCount: 1}
        ],
        reviews: [
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          },
          {date: "12:22 24.3.2022", comment: "from repetition, injected humour, or non-characteristic words etc."},
        ]
      },
      {
        name: 'Acer Nitro 5 Obsidian',
        category: 'Gaming',
        price: 849,
        stockCount: 18,
        offSetTop: 0,
        offSetLeft: 0,
        description: 'Herný notebook – Intel Core i5 9300H Coffee Lake, 15.6" IPS matný 1920 × 1080 120Hz, RAM 8GB DDR4, NVIDIA GeForce GTX 1650 4GB, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB-C, WiFi 6, 56 Wh batéria, hmotnosť 2.5kg, Windows 10 Home, HDD upgrade kit (AN515-54-54KC) ',
        vendors: [
          {name: 'Alza', stockCount: 10},
          {name: 'Agem', stockCount: 2},
          {name: 'MediaMarkt', stockCount: 1},
          {name: 'Asbis', stockCount: 0},
          {name: 'Nay', stockCount: 5},
        ],
        reviews: [
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          },
          {date: "12:22 24.3.2022", comment: "from repetition, injected humour, or non-characteristic words etc."},
          {date: "12:22 24.3.2022", comment: "typesetting, remaining essentially unchanged. It was popularised in the"}
        ]
      },
      {
        name: 'Lenovo Legion 5 Pro',
        category: 'Gaming',
        price: 1539,
        stockCount: 50,
        offSetTop: 0,
        offSetLeft: 0,
        description: 'Herný notebook – AMD Ryzen 7 5800H, 16" IPS antireflexný 2560 × 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3070 8GB 140 W, SSD 1000GB, numerická klávesnica, podsvietená RGB klávesnica, webkamera, USB-C, WiFi 6, 80 Wh batéria, hmotnosť 2.45kg, bez operačného systému',
        vendors: [
          {name: 'Alza', stockCount: 10},
          {name: 'Agem', stockCount: 10},
          {name: 'MediaMarkt', stockCount: 10},
          {name: 'Asbis', stockCount: 10},
          {name: 'Nay', stockCount: 10},
        ],
        reviews: [
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          }
        ]
      },
      {
        name: 'Macbook Pro 13" M1 SK2020',
        category: 'MacBook',
        price: 1459,
        stockCount: 3,
        offSetTop: 0,
        offSetLeft: 0,
        description: 'MacBook – Apple M1, 13.3" IPS lesklý 2560 × 1600 , RAM 8GB, Apple M1 8-jadrová GPU, SSD 256GB, podsvietená klávesnica, webkamera, USB-C, čítačka odtlačkov prstov, WiFi 6, 58.2 Wh batéria, hmotnosť 1.37kg, MAC OS',
        vendors: [
          {name: 'Alza', stockCount: 0},
          {name: 'Agem', stockCount: 0},
          {name: 'MediaMarkt', stockCount: 0},
          {name: 'Asbis', stockCount: 2},
          {name: 'Nay', stockCount: 1},
        ],
        reviews: [
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          },
          {date: "12:22 24.3.2022", comment: "from repetition, injected humour, or non-characteristic words etc."},
          {date: "12:22 24.3.2022", comment: "typesetting, remaining essentially unchanged. It was popularised in the"},
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          },
          {date: "12:22 24.3.2022", comment: "from repetition, injected humour, or non-characteristic words etc."},
          {date: "12:22 24.3.2022", comment: "typesetting, remaining essentially unchanged. It was popularised in the"}
        ]
      },
      {
        name: 'Dell Vostro 3500',
        category: 'Kancelária',
        stockCount: 18,
        offSetTop: 0,
        offSetLeft: 0,
        description: 'Notebook – Intel Core i3 1115G4 Tiger Lake, 15" IPS matný 1920 × 1080, RAM 8GB DDR4, Intel UHD Graphics, SSD 256GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, čítačka odtlačkov prstov, WiFi 5, 42 Wh batéria, hmotnosť 1.98kg, Windows 10 Pro (NBD)',
        vendors: [
          {name: 'Alza', stockCount: 0},
          {name: 'Agem', stockCount: 0},
          {name: 'MediaMarkt', stockCount: 0},
          {name: 'Asbis', stockCount: 0},
          {name: 'Nay', stockCount: 0},
        ],
        reviews: [
          {date: "12:22 24.3.2022", comment: "typesetting, remaining essentially unchanged. It was popularised in the"},
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          },
          {date: "12:22 24.3.2022", comment: "from repetition, injected humour, or non-characteristic words etc."},
          {date: "12:22 24.3.2022", comment: "typesetting, remaining essentially unchanged. It was popularised in the"}

        ]
      },
      {
        name: 'Asus Zenbook 13',
        category: 'Ultrabook',
        price: 1149,
        stockCount: 6,
        offSetTop: 0,
        offSetLeft: 0,
        vendors: [
          {name: 'Alza', stockCount: 2},
          {name: 'Agem', stockCount: 1},
          {name: 'MediaMarkt', stockCount: 1},
          {name: 'Asbis', stockCount: 1},
          {name: 'Nay', stockCount: 1}
        ],
        reviews: [
          {date: "12:22 22.3.2022", comment: "Lorem Ipsum is simply dummy text"},
          {
            date: "12:22 23.3.2022",
            comment: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a"
          },
          {date: "12:22 24.3.2022", comment: "from repetition, injected humour, or non-characteristic words etc."},
        ]
      }
    ];
  }

  getMostRecentData(userReview: UserReview) {
    this.mostRecentReview = userReview;
  }

  // Kvazi fake data len na skusku na init pre most recent comment
  getMostRecentFromProductList() {
    if (this.productList) {
      const mostRecentComment = this.productList[0].reviews[0].comment;
      const mostRecentDate = this.productList[0].reviews[0].date;
      this.mostRecentReview = new UserReview(mostRecentDate, mostRecentComment);
    }
  }

  filteredProductList(filteredProductList: any[]) {
    if (filteredProductList && filteredProductList.length > 0) {
      this.productList = filteredProductList;
    }
  }

  giveFurtherCheckBoxState(isCheckBoxChecked: boolean) {
    this.checkBoxState = isCheckBoxChecked;
  }

}
