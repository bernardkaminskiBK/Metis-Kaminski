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
        name: 'Acer Nitro 5 Obsidian',
        category: 'Gaming',
        price: 849,
        stockCount: 18,
        description: 'Herný notebook – Intel Core i5 9300H Coffee Lake, 15.6" IPS matný 1920 × 1080 120Hz, RAM 8GB DDR4, NVIDIA GeForce GTX 1650 4GB, SSD 512GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB-C, WiFi 6, 56 Wh batéria, hmotnosť 2.5kg, Windows 10 Home, HDD upgrade kit (AN515-54-54KC) ',
        vendors: [
          {name: 'Alza', stockCount: 10},
          {name: 'Agem', stockCount: 2},
          {name: 'MediaMarkt', stockCount: 1},
          {name: 'Asbis', stockCount: 0},
          {name: 'Nay', stockCount: 5},
        ]
      },
      {
        name: 'Lenovo Legion 5 Pro',
        category: 'Gaming',
        price: 1539,
        stockCount: 50,
        description: 'Herný notebook – AMD Ryzen 7 5800H, 16" IPS antireflexný 2560 × 1600 165Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3070 8GB 140 W, SSD 1000GB, numerická klávesnica, podsvietená RGB klávesnica, webkamera, USB-C, WiFi 6, 80 Wh batéria, hmotnosť 2.45kg, bez operačného systému',
        vendors: [
          {name: 'Alza', stockCount: 10},
          {name: 'Agem', stockCount: 10},
          {name: 'MediaMarkt', stockCount: 10},
          {name: 'Asbis', stockCount: 10},
          {name: 'Nay', stockCount: 10},
        ]
      },
      {
        name: 'Macbook Pro 13" M1 SK2020',
        category: 'MacBook',
        price: 1459,
        stockCount: 3,
        description: 'MacBook – Apple M1, 13.3" IPS lesklý 2560 × 1600 , RAM 8GB, Apple M1 8-jadrová GPU, SSD 256GB, podsvietená klávesnica, webkamera, USB-C, čítačka odtlačkov prstov, WiFi 6, 58.2 Wh batéria, hmotnosť 1.37kg, MAC OS',
        vendors: [
          {name: 'Alza', stockCount: 0},
          {name: 'Agem', stockCount: 0},
          {name: 'MediaMarkt', stockCount: 0},
          {name: 'Asbis', stockCount: 2},
          {name: 'Nay', stockCount: 1},
        ]
      },
      {
        name: 'Dell Vostro 3500',
        category: 'Kancelária',
        stockCount: 18,
        description: 'Notebook – Intel Core i3 1115G4 Tiger Lake, 15" IPS matný 1920 × 1080, RAM 8GB DDR4, Intel UHD Graphics, SSD 256GB, numerická klávesnica, podsvietená klávesnica, webkamera, USB 3.2 Gen 1, čítačka odtlačkov prstov, WiFi 5, 42 Wh batéria, hmotnosť 1.98kg, Windows 10 Pro (NBD)',
        vendors: [
          {name: 'Alza', stockCount: 0},
          {name: 'Agem', stockCount: 0},
          {name: 'MediaMarkt', stockCount: 0},
          {name: 'Asbis', stockCount: 0},
          {name: 'Nay', stockCount: 0},
        ]
      },
      {
        name: 'Asus Zenbook 13',
        category: 'Ultrabook',
        price: 1149,
        stockCount: 6,
        vendors: [
          {name: 'Alza', stockCount: 2},
          {name: 'Agem', stockCount: 1},
          {name: 'MediaMarkt', stockCount: 1},
          {name: 'Asbis', stockCount: 1},
          {name: 'Nay', stockCount: 1}
        ]
      }
    ];
  }
}
