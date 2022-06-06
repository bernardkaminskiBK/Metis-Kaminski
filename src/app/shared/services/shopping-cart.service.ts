import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Product} from "../../models/Product";
import {CountDownTimeService} from "./countDownTime.service";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCartArr: Product[] = [];
  shoppingCartObserver = new BehaviorSubject<Product[]>([]);

  constructor(private countDownTimerService: CountDownTimeService) {
  }

  addProductToShoppingCart(product: Product): void {
    if (!this.countDownTimerService.isRunning()) {
      this.countDownTimerService.startCountDownTimer(600);
    }
    this.shoppingCartArr.push(product);
    this.shoppingCartObserver.next(this.shoppingCartArr);
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
