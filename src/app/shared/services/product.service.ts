import {Injectable} from "@angular/core";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Constants} from "../../utils/Constants";
import {NotificationService} from "./notification.service";
import {LoaderService} from "./loader.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private router: Router,
    private apiService: ApiService,
    private snackBar: NotificationService,
    public loaderService: LoaderService
  ) {
  }

  addNewProduct(product: Product): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      this.loaderService.isLoading.next(true);
      this.apiService.post(Constants.endpoints.productsAuth.createProduct, product).toPromise().then((result: Product) => {
        product.id = result.id;
        resolve(result);
        this.snackBar.notification(Constants.addProductSuccessMsg);
        this.loaderService.isLoading.next(false);
      }).catch(() => {
        reject();
        this.snackBar.notification(Constants.addProductFailureMsg);
        this.loaderService.isLoading.next(false);
      });
    });
  }

  deleteProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loaderService.isLoading.next(true);
      this.apiService.delete(Constants.endpoints.productsAuth.deleteProduct, product.id).toPromise().then(() => {
        this.snackBar.notification(Constants.deleteProductSuccessMsg);
        resolve();
        this.loaderService.isLoading.next(false);
      }).catch(() => {
        this.snackBar.notification(Constants.deleteProductFailureMsg);
        reject();
        this.loaderService.isLoading.next(false);
      });
    });
  }

  updateProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.loaderService.isLoading.next(true);
      this.apiService.put(Constants.endpoints.productsAuth.updateProduct, product.id, product).toPromise().then(() => {
        this.snackBar.notification(Constants.updateProductSuccessMsg);
        resolve();
        this.loaderService.isLoading.next(false);
      }).catch(() => {
        this.snackBar.notification(Constants.updateProductFailureMsg);
        reject();
        this.loaderService.isLoading.next(false);
      });
    });
  }

  getProductList(isAuth?: boolean): Promise<Product[]> {
    return new Promise<Product[]>((resolve, reject) => {
      this.loaderService.isLoading.next(true);
      let endpoint;

      if (isAuth) {
        endpoint = Constants.endpoints.productsAuth.list;
      } else {
        endpoint = Constants.endpoints.products.list;
      }

      this.apiService.get(endpoint).toPromise().then((productList: Product[]) => {
        resolve(productList);
        this.loaderService.isLoading.next(false);
      }).catch(() => {
        reject();
        this.loaderService.isLoading.next(false);
      });

    });
  }

  getProductById(id: number): Promise<Product> {
    this.loaderService.isLoading.next(true);
    this.snackBar.notification("Loading...");
    return new Promise<Product>((resolve, reject) => {
      this.apiService.get(Constants.endpoints.products.getById, {id: id}).toPromise().then((product: Product) => {
        resolve(product);
        this.loaderService.isLoading.next(false);
        this.snackBar.notification("Loaded...");
      }).catch(() => {
        reject();
        this.loaderService.isLoading.next(false);
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
