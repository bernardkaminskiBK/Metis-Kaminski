import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Constants} from "../../utils/Constants";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NotificationService} from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cacheProductList: Product[] = [];
  productListObserver = new BehaviorSubject<Product[]>(this.cacheProductList);

  constructor(private router: Router, private apiService: ApiService, private snackBar: NotificationService) {
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

  addNewProduct(product: Product): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      this.apiService.post(Constants.endpoints.productsAuth.createProduct, product).toPromise().then((result: Product) => {
        product.id = result.id;
        resolve(result);
        this.snackBar.notification(Constants.addProductSuccessMsg);
      }).catch(() => {
        this.snackBar.notification(Constants.addProductFailureMsg);
        reject();
      });
    });
  }

  deleteProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.delete(Constants.endpoints.productsAuth.deleteProduct, product.id).toPromise().then(() => {
        resolve();
        this.snackBar.notification(Constants.deleteProductSuccessMsg);
      }).catch(() => {
        this.snackBar.notification(Constants.deleteProductFailureMsg);
        reject();
      });
    });
  }

  updateProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.put(Constants.endpoints.productsAuth.updateProduct, product.id, product).toPromise().then(() => {
        resolve();
        this.snackBar.notification(Constants.updateProductSuccessMsg);
      }).catch(() => {
        this.snackBar.notification(Constants.updateProductFailureMsg);
        reject();
      });
    });
  }

  getProductList(isAuth?: boolean): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      let endpoint;

      if (isAuth) {
        endpoint = Constants.endpoints.productsAuth.list;
      } else {
        endpoint = Constants.endpoints.products.list;
      }

      this.apiService.get(endpoint).toPromise().then((productList: Product[]) => {
        resolve(productList);
      }).catch(() => {
        reject();
      });

    });
  }

  getProductById(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      this.apiService.get(Constants.endpoints.products.getById, {id: id}).toPromise().then((product: Product) => {
        resolve(product);
      }).catch(() => {
        reject();
        this.error404();
      });
    });
  }

  private error404(): void {
    this.router.navigateByUrl('404notFound');
  }

  getMockCategoryData(): string[] {
    return ['Ultrabook', 'Kancelária', 'MacBook', 'Gaming'];
  }

}
