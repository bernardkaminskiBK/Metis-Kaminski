import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Constants} from "../../utils/Constants";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cacheProductList: Product[] = [];
  productListObserver = new BehaviorSubject<Product[]>(this.cacheProductList);

  constructor(private router: Router, private apiService: ApiService) {
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
      if (product.id) {
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

  // TODO:Tento mechanizmus bude komplet prerobeny no len na zatial ponecham pre potrebu na lepsiu koordinaciu v predoslej logike... na zatial staci ze nam vrati zoznam produktov.
  getProductList(): Promise<Product[]> {
    return new Promise<Product[]>((resolve) => {
      // if (this.cacheProductList && this.cacheProductList.length) {
      //   resolve(this.cacheProductList);
      // } else {
      //   this.getAPIRequest();
      //   this.cacheProductList = data;
      //   this.productListObserver.next(this.cacheProductList);
      //   resolve(this.cacheProductList);
        this.apiService.get(Constants.endpoints.products.list).toPromise().then((products: Product[]) => {
          resolve(products);
        }).catch(() => {
        });
      // }
    })
  }

  updateProduct(product: Product) {
    const index = this.cacheProductList.indexOf(product, 0);
    if (index > -1) {
      this.cacheProductList[index].name = product.name;
      this.cacheProductList[index].category = product.category;
      this.cacheProductList[index].price = product.price;
      this.cacheProductList[index].stockCount = product.stockCount;
      this.cacheProductList[index].sellCountLastMonth = product.sellCountLastMonth;
      this.cacheProductList[index].sellCountOverall = product.sellCountOverall;
      this.cacheProductList[index].description = product.description;
      this.cacheProductList[index].vendors = product.vendors;
      this.cacheProductList[index].reviews = product.reviews;
    }
  }

  // private getAPIRequest(): void {
  //   this.apiService.get().toPromise().then((products: Product[]) => {
  //     console.log('api request product service getAPIRequest(): ' + products.length)
  //     this.cacheProductList = products;
  //   }).catch(() => {
  //   });
  // }

  // private getAPIRequest(): Product[] {
  //   return MockData.products;
  // }

  getProductById(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      // if (this.cacheProductList) {
      //   this.findId(resolve, reject, id, this.cacheProductList);
      // } else {
        // this.cacheProductList = this.getAPIRequest();
        this.apiService.get(Constants.endpoints.products.getById, {id: id}).toPromise().then((product: Product) => {
          // this.findId(resolve, reject, id, products);
          resolve(product);
        }).catch(() => {
          reject();
          this.error404();
        });
      // }
    });
  }

  // private findId(resolve, reject, productId: number, cacheProducts: Product[]) {
  //   const data = cacheProducts.find((product) => product.id === productId) as Product;
  //   if (data) {
  //     resolve(data);
  //   } else {
  //     this.error404();
  //     reject();
  //   }
  // }

  private error404(): void {
    this.router.navigateByUrl('404notFound');
  }


  getMockCategoryData(): string[] {
    return ['Ultrabook', 'Kancelária', 'MacBook', 'Gaming'];
  }




}
