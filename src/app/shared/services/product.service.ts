import {Injectable} from "@angular/core";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Constants} from "../../utils/Constants";
import {NotificationService} from "./notification.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router: Router, private apiService: ApiService, private snackBar: NotificationService) {
  }

  addNewProduct(product: Product): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      this.apiService.post(Constants.endpoints.productsAuth.createProduct, product).toPromise().then((result: Product) => {
        product.id = result.id;
        resolve(result);
        this.snackBar.notification(Constants.addProductSuccessMsg);
      }).catch(() => {
        reject();
        this.snackBar.notification(Constants.addProductFailureMsg);
      });
    });
  }

  deleteProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.delete(Constants.endpoints.productsAuth.deleteProduct, product.id).toPromise().then(() => {
        this.snackBar.notification(Constants.deleteProductSuccessMsg);
        resolve();
      }).catch(() => {
        this.snackBar.notification(Constants.deleteProductFailureMsg);
        reject();
      });
    });
  }

  updateProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.put(Constants.endpoints.productsAuth.updateProduct, product.id, product).toPromise().then(() => {
        this.snackBar.notification(Constants.updateProductSuccessMsg);
        resolve();
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
