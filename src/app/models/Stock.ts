import {Category} from "./Category";

export class Stock {
  sklad: Category[];

  constructor() {
    this.sklad = [
      {
        name: 'Notebooky',
        subCategory: [
          {
            name: 'Kancelarske',
            subCategory: undefined,
            products: [
              {
                name: 'Note1',
                price: 1,
                stockCount: 1
              },
              {
                name: 'Note2',
                price: 1,
                stockCount: 1
              }
            ]
          },
          {
            name: 'Hrackarske',
            subCategory: undefined,
            products: [
              {
                name: 'Hr_Note1',
                price: 1,
                stockCount: 1
              },
              {
                name: 'Hr_Note2',
                price: 1,
                stockCount: 1
              }
            ]
          }
        ],
        products: [{
          name: 'Note111',
          price: 1,
          stockCount: 1
        }]
      },

      {
        name: 'Kresla',
        subCategory: [
          {
            name: 'Kancelarske_kreslo',
            subCategory: undefined,
            products: [
              {
                name: 'Kres1',
                price: 1,
                stockCount: 1
              },
              {
                name: 'Kres2',
                price: 1,
                stockCount: 1
              }
            ]
          },
          {
            name: 'Hrackarske_kreslo',
            subCategory: undefined,
            products: [
              {
                name: 'Hr_Kres_Note1',
                price: 1,
                stockCount: 1
              },
              {
                name: 'Hr_Kres_Note2',
                price: 1,
                stockCount: 1
              }
            ]
          }
        ],
        products: [{
          name: 'Note211',
          price: 1,
          stockCount: 1
        },
        {
          name: 'Note221',
          price: 1,
          stockCount: 1
        }]
      }
    ];
  }

  getStockValue2() {
    let stockValue = 0;

    if(this.sklad && this.sklad.length) {
      this.sklad.forEach((topLevelCategory) => {
        stockValue += this.getStockValue(topLevelCategory);
      });
    }

    return stockValue;
  }

  private getStockValue(category: Category): number {
    let stockValue = 0;

    if(category) {
      if(category.subCategory && category.subCategory.length) {
        category.subCategory.forEach((subCategoryItem) => {
          stockValue += this.getStockValue(subCategoryItem);
        });
      }

      if(category.products && category.products.length) {
        category.products.forEach((productItem) => {
          stockValue += productItem.price * productItem.stockCount;
        });
      }
    }

    return stockValue;
  }

  getAllProductName(): string[] {
    let list: string[] = [];

    if(this.sklad && this.sklad.length) {
      this.sklad.forEach((topLevelCategory) => {
        list = [
          ...list,
          ...this.getProductName(topLevelCategory)
        ];

        // if(topLevelCategory.products && topLevelCategory.products.length) {
        //   topLevelCategory.products.forEach((productItem) => {
        //     list.push(productItem.name);
        //   });
        // }
      });
    }

    return list;
  }

  private getProductName(category: Category): string[] {
    let list: string[] = [];

    if(category) {
      list.push(category.name);
      if(category.subCategory && category.subCategory.length) {
        category.subCategory.forEach((subCategoryItem) => {
          list = [
            ...list,
            ...this.getProductName(subCategoryItem)
          ];
        });
      }

      if(category.products && category.products.length) {
        category.products.forEach((productItem) => {
          list.push(productItem.name);
        });
      }
    }

    return list;
  }

}
