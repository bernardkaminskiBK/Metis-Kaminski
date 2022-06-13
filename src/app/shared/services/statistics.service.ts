import {Injectable} from "@angular/core";
import {Product} from "../../models/Product";
import {Vendor} from "../../models/Vendor";

@Injectable()
export class StatisticsService {

  private products: Product[];

  addData(products: Product[]) {
    this.products = products;
  }

  getFirstVendorList(): Vendor[] {
    return this.products[0].vendors;
  }

  // TODO: caka na prerobenie zatial vracia prazdnych vendorov...
  getVendorsByProductName(productName: string): Vendor[] {
    let vendors: Vendor[] = [];
    this.products.forEach((product: Product) => {
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
    return this.products.filter((product: Product) => {
      return product.stockCount == 0
    });
  }

  // Obraty pre každý produkt separátne (celkový, za posledný mesiac)
  getProductCashFlowStates(): Product[] {
    let result: Product [] = [];
    this.products.forEach((product) => {
      if (product.price) {
        product.cashFlowLastMonth =
          product.price * product.sellCountLastMonth;

        product.cashFlowWholePeriod =
          product.price * product.sellCountOverall;

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
        sum += product.sellCountLastMonth;
      }
    });
    return sum;
  }

  // Celkový obrat za celé obdobie (sumarizácie cez všetky produkty v jednom čísle)
  getTotalCashFlowByWholePeriod(): number {
    let sumWholePeriod: number = 0;
    this.getProductCashFlowStates().forEach((product) => {
      if (product.price) {
        sumWholePeriod += product.price * product.sellCountOverall;
      }
    });
    return sumWholePeriod;
  }

  // Priemerná cena predávaných produktov
  getAveragePriceSoldProducts(): number {
    let avg: number = 0;
    this.products.forEach((product) => {
      if (product.price) {
        avg += product.sellCountLastMonth + product.sellCountOverall;
      }
    });
    return (this.getTotalCashFlowByWholePeriod() + this.getTotalCashFlowByLastMonth()) / avg;
  }

  // Najpredávanejší produkt
  getMostSoldProductName(): string {
    let sum: number = 0;
    let temp: number = 0;
    let nameOfProduct: string = '';

    this.products.forEach((product) => {
      if (product.price) {
        sum = product.sellCountLastMonth + product.sellCountOverall;
        if (temp < sum) {
          temp = sum;
          nameOfProduct = product.name;
        }
      }
    });
    return nameOfProduct;
  }
}
