export default class TestData {
  static getTestData(): any[] {
    return [
      {
        id: 1,
        name: 'Product 1',
        category: 'Product 1',
        price: 0,
        stockCount: 0,
        quantitySoldWholePeriod: 0,
        quantitySoldLastMonth: 0,
        cashFlowLastMonth: 0,
        cashFlowWholePeriod: 0,
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
        id: 2,
        name: 'Acer Nitro 5 Obsidian',
        category: 'Gaming',
        price: 849,
        stockCount: 18,
        quantitySoldWholePeriod: 5,
        quantitySoldLastMonth: 2,
        cashFlowLastMonth: 0,
        cashFlowWholePeriod: 0,
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
        id: 3,
        name: 'Lenovo Legion 5 Pro',
        category: 'Gaming',
        price: 1539,
        stockCount: 50,
        quantitySoldWholePeriod: 10,
        quantitySoldLastMonth: 3,
        cashFlowLastMonth: 0,
        cashFlowWholePeriod: 0,
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
        id: 4,
        name: 'Macbook Pro 13" M1 SK2020',
        category: 'MacBook',
        price: 1459,
        stockCount: 3,
        quantitySoldWholePeriod: 6,
        quantitySoldLastMonth: 1,
        cashFlowLastMonth: 0,
        cashFlowWholePeriod: 0,
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
        id: 5,
        name: 'Dell Vostro 3500',
        category: 'Kancelária',
        stockCount: 18,
        quantitySoldWholePeriod: 8,
        quantitySoldLastMonth: 4,
        cashFlowLastMonth: 0,
        cashFlowWholePeriod: 0,
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
        id: 6,
        name: 'Asus Zenbook 13',
        category: 'Ultrabook',
        price: 1149,
        stockCount: 6,
        quantitySoldWholePeriod: 5,
        quantitySoldLastMonth: 2,
        cashFlowLastMonth: 0,
        cashFlowWholePeriod: 0,
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

  static getProductById(id: number): any {
    let result: any;
    this.getTestData().forEach((product) => {
      if (product.id === id) {
        result = product;
      }
    });
    return result;
  }

  static getFirstVendorList() : any[] {
    return this.getTestData()[0].vendors;
  }


  static getVendorsByProductName(productName : string) : any[] {
    let vendors : any[] = [];
    this.getTestData().forEach((product: any) => {
      if(product.name == productName) {
        vendors = product.vendors;
      }
    });
    return vendors;
  }

  /*
       Ďalší zoznam, ktorý bude slúžiť na zoznam produktov, ktoré majú nulové množstvo na sklade.
       Zoznam umožní rýchli prehľad tovaru, ktorý treba urgentne do objednať.
   */
  static getProductsNotInStock(): any[] {
    return this.getTestData().filter((product: any) => {
      return product.stockCount == 0
    });
  }

  // Obraty pre každý produkt separátne (celkový, za posledný mesiac)
  static getProductCashFlowStates(): any[] {
    let result: any[] = [];
    this.getTestData().forEach((product) => {
      if (product.price) {
        product.cashFlowLastMonth =
          product.price * product.quantitySoldLastMonth;

        product.cashFlowWholePeriod =
          product.price * product.quantitySoldWholePeriod;

        result.push(product);
      }
    });
    return result;
  }

  // Celkový obrat za posledný mesiac (sumarizácia cez všetky produkty v jednom čísle)
  static getTotalCashFlowByLastMonth(): number {
    let sum: number = 0
    this.getProductCashFlowStates().forEach((product) => {
      if (product.price) {
        sum += product.cashFlowLastMonth;
      }
    });
    return sum;
  }

  // Celkový obrat za celé obdobie (sumarizácie cez všetky produkty v jednom čísle)
  static getTotalCashFlowByWholePeriod(): number {
    let sumWholePeriod: number = 0;
    this.getProductCashFlowStates().forEach((product) => {
      if (product.price) {
        sumWholePeriod += product.price * product.quantitySoldWholePeriod;
      }
    });
    return sumWholePeriod;
  }

  // Priemerná cena predávaných produktov
  static getAveragePriceSoldProducts(): number {
    let avg: number = 0;
    this.getTestData().forEach((product) => {
      if (product.price) {
        avg += product.quantitySoldLastMonth + product.quantitySoldWholePeriod;
      }
    });
    let result = (this.getTotalCashFlowByWholePeriod() + this.getTotalCashFlowByLastMonth()) / avg;
    return this.round(result);
  }

  // Najpredávanejší produkt
  static getMostSoldProductName(): string {
    let sum: number = 0;
    let temp: number = 0;
    let nameOfProduct: string = '';

    this.getTestData().forEach((product) => {
      if (product.price) {
        sum = product.quantitySoldLastMonth + product.quantitySoldWholePeriod;
        if (temp < sum) {
          temp = sum;
          nameOfProduct = product.name;
        }
      }
    });
    return nameOfProduct;
  }

  private static round(num: number) {
    return Math.round(num * 100) / 100;
  }

}
