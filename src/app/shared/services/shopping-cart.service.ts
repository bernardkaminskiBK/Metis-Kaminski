import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartArr: any[];
  shoppingCartObserver = new BehaviorSubject<any[]>([]);

  addProductToShoppingCart(product: any) : void {
    this.shoppingCartArr.push(product);
  }

  deleteProductFromShoppingCart(product: any) : void {
    const index = this.shoppingCartArr.indexOf(product, 0);
      if(index > -1) {
        this.shoppingCartArr.splice(product,1);
      }
  }
}
