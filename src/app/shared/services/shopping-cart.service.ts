import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartArr: Product[] = [];
  shoppingCartObserver = new BehaviorSubject<Product[]>([]);

  addProductToShoppingCart(product: Product): void {
    this.shoppingCartArr.push(product);
    this.shoppingCartObserver.next(this.shoppingCartArr);
  }

  deleteProductFromShoppingCart(product: Product): void {
    const index = this.shoppingCartArr.indexOf(product, 0);
    if (index > -1) {
      this.shoppingCartArr.splice(index, 1);
      this.shoppingCartObserver.next(this.shoppingCartArr);
    }
  }

  sumSubtotalOfPrice(): number {
    let total = 0;
    this.shoppingCartArr.forEach((product) => {
      if(product.price) {
        total += product.price;
      }
    });
    return total;
  }
}
