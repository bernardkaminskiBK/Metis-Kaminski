import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../models/Product";
import {Router} from "@angular/router";
import {ApiService} from "./api.service";
import {Constants} from "../../utils/Constants";
import {MatSnackBar} from "@angular/material/snack-bar";

const addProductSuccessMsg = 'Your product was successfully added to the list of products.';
const addProductFailureMsg = 'Something went wrong, your product was not added to the product list.';

const updateProductSuccessMsg = 'Your product was successfully updated in the list of products.';
const updateProductFailureMsg = 'Something went wrong, your product was not updated in the product list.';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private cacheProductList: Product[] = [];
  productListObserver = new BehaviorSubject<Product[]>(this.cacheProductList);

  constructor(private router: Router, private apiService: ApiService, private snackBar: MatSnackBar) {
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
      this.apiService.post(Constants.endpoints.products.createProduct, product).toPromise().then((result: Product) => {
        product.id = result.id;
        resolve(result);
        this.notification(addProductSuccessMsg);
      }).catch(() => {
        this.notification(addProductFailureMsg);
        reject();
      });
    });
  }

  deleteProduct(product: Product): void {
    // TODO: delete product
  }

  updateProduct(product: Product): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.apiService.put(Constants.endpoints.products.updateProduct, product.id, product).toPromise().then(() => {
        resolve();
        this.notification(updateProductSuccessMsg);
      }).catch(() => {
        this.notification(updateProductFailureMsg);
        reject();
      });
    });
  }

  getProductList(): Promise<Product[]> {
    return new Promise<Product[]>((resolve) => {
      this.apiService.get(Constants.endpoints.products.list).toPromise().then((products: Product[]) => {
        const productList: Product[] = [];
        if(products && products.length) {
          products.forEach((product: any) => {
            productList.push(new Product(product));
          });
        }
        resolve(productList);
      }).catch(() => {
      });
    })
  }

  getProductById(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      this.apiService.get(Constants.endpoints.products.getById, {id: id}).toPromise().then((product: Product) => {
        resolve(new Product(product));
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

  private notification(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 2000
    });
  }

}
