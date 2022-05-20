import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../models/Product";
import {Vendor} from "../../models/Vendor";
import {MockData} from "../../utils/MockData";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cacheProductList: Product[] = [];
  productListObserver = new BehaviorSubject<Product[]>(this.cacheProductList);

  constructor(private router: Router) {

  }

  increaseProductStockCountStateByOne(product: Product): void {
    const index = this.cacheProductList.indexOf(product, 0);
    if (index > -1) {
      this.cacheProductList[index].stockCount = this.cacheProductList[index].stockCount + 1;
    }
  }

  decreaseProductStockCountStateByOne(product: Product): void {
    const index = this.cacheProductList.indexOf(product, 0);
    if (index > -1) {
      this.cacheProductList[index].stockCount = this.cacheProductList[index].stockCount - 1;
    }
  }

  addNewProduct(newProduct: Product): void {
    this.cacheProductList.push(newProduct);
    this.productListObserver.next(this.cacheProductList);
  }

  deleteProduct(product: Product): void {
    const index = this.cacheProductList.findIndex((item) => {
      if(product.id) {
        return item.id === product.id;
      } else {
        return item.uuid === product.uuid;
      }
    });

    if (index > -1) {
      this.cacheProductList.splice(index, 1);
      this.productListObserver.next(this.cacheProductList);
    }
  }

  getProductList(): Promise<Product[]> {
    return new Promise<Product[]>((resolve) => {
      if (this.cacheProductList && this.cacheProductList.length) {
        resolve(this.cacheProductList);
      } else {
        setTimeout(() => {
          const data = this.getAPIRequest();
          this.cacheProductList = data;
          this.productListObserver.next(this.cacheProductList);
          resolve(data);
        }, 500);
      }
    })
  }

  private getAPIRequest(): Product[] {
    return MockData.products;
  }

  getProductById(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      if (this.cacheProductList) {
        this.findId(resolve, reject, id, this.cacheProductList);
      } else {
        this.cacheProductList = this.getAPIRequest();
        this.findId(resolve, reject, id, this.cacheProductList);
      }
    });
  }

  private findId(resolve, reject, productId: number, cacheProducts: Product[]) {
    const data = cacheProducts.find((product) => product.id === productId) as Product;
    if (data) {
      resolve(data);
    } else {
      this.error404();
      reject();
    }
  }

  private error404(): void {
    this.router.navigateByUrl('404notFound');
  }

  getFirstVendorList(): Vendor[] {
    return this.cacheProductList[0].vendors;
  }

  getMockCategoryData(): string[] {
    return ['Ultrabook', 'Kancelária', 'MacBook', 'Gaming'];
  }


  getVendorsByProductName(productName: string): Vendor[] {
    let vendors: Vendor[] = [];
    this.cacheProductList.forEach((product: Product) => {
      if (product.name == productName) {
        vendors = product.vendors;
      }
    });
    return vendors;
  }

  /*
       Ďalší zoznam, ktorý bude slúžiť na zoznam produktov, ktoré majú nulové množstvo na sklade.
       Zoznam umožní rýchli prehľad tovaru, ktorý treba urgentne do objednať.
   */
  getProductsNotInStock(): Product[] {
    return this.cacheProductList.filter((product: Product) => {
      return product.stockCount == 0
    });
  }

  // Obraty pre každý produkt separátne (celkový, za posledný mesiac)
  getProductCashFlowStates(): Product[] {
    let result: Product [] = [];
    this.cacheProductList.forEach((product) => {
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
  getTotalCashFlowByLastMonth(): number {
    let sum: number = 0
    this.getProductCashFlowStates().forEach((product) => {
      if (product.price) {
        sum += product.cashFlowLastMonth;
      }
    });
    return sum;
  }

  // Celkový obrat za celé obdobie (sumarizácie cez všetky produkty v jednom čísle)
  getTotalCashFlowByWholePeriod(): number {
    let sumWholePeriod: number = 0;
    this.getProductCashFlowStates().forEach((product) => {
      if (product.price) {
        sumWholePeriod += product.price * product.quantitySoldWholePeriod;
      }
    });
    return sumWholePeriod;
  }

  // Priemerná cena predávaných produktov
  getAveragePriceSoldProducts(): string {
    let avg: number = 0;
    this.cacheProductList.forEach((product) => {
      if (product.price) {
        avg += product.quantitySoldLastMonth + product.quantitySoldWholePeriod;
      }
    });
    let result = (this.getTotalCashFlowByWholePeriod() + this.getTotalCashFlowByLastMonth()) / avg;
    return result.toFixed(2).replace('.', ',') + ' €';
  }

  // Najpredávanejší produkt
  getMostSoldProductName(): string {
    let sum: number = 0;
    let temp: number = 0;
    let nameOfProduct: string = '';

    this.cacheProductList.forEach((product) => {
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
}
