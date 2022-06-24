import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {Product} from "../../models/Product";
import {CountDownTimeService} from "./countDownTime.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartArr: Product[] = [];
  shoppingCartObserver = new BehaviorSubject<Product[]>([]);


  private actualProduct;

  constructor(private countDownTimerService: CountDownTimeService) {
  }

  addActualProduct(product: Product) {
    this.actualProduct = product;
  }

  addProductToShoppingCart(product: Product): void {
    if (!this.countDownTimerService.isRunning()) {
      this.countDownTimerService.startCountDownTimer(600);
    }

    // TODO: v tomto v bode som dokazal odratavat z stockcountu ale este som nevymislel dalsie kroky...
    if(product.stockCount <= this.actualProduct.stockCount--) {
      this.shoppingCartArr.push(product);
      this.shoppingCartObserver.next(this.shoppingCartArr);
    }
  }

  deleteProductFromShoppingCart(product: Product): void {
    const index = this.shoppingCartArr.indexOf(product, 0);
    if (index > -1) {
      this.shoppingCartArr.splice(index, 1);
      this.shoppingCartObserver.next(this.shoppingCartArr);
    }

    if (this.shoppingCartArr && this.shoppingCartArr.length === 0) {
      this.countDownTimerService.stopCountDownTimer();
    }
  }

  sumSubtotalOfPrice(): number {
    let total = 0;
    this.shoppingCartArr.forEach((product) => {
      if (product.price) {
        total += product.price;
      }
    });
    return total;
  }
}
