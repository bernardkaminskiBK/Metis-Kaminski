import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountDownTimeService {

  countDownTimerObserver = new BehaviorSubject<number>(0);

  private time: number;
  private timer: any;

  startCountDownTimer(timeInSeconds: number): void {
    this.time = timeInSeconds;
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      this.onTick();
    }, 1000);
  }

  private onTick(): void {
    if (this.time > 0) {
      this.countDownTimerObserver.next(this.time--);
    } else {
      this.expiredTime();
    }
  }

  private expiredTime() {
    this.stopCountDownTimer();
  }

  isRunning(): boolean {
    return !!this.timer;
  }

  stopCountDownTimer(): void {
    clearInterval(this.timer);
    this.countDownTimerObserver.next(0);
    this.timer = undefined;
  }

}
