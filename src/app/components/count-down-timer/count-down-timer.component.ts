import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountDownTimeService} from "../../shared/services/countDownTime.service";

@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.scss']
})
export class CountDownTimerComponent implements OnInit, OnDestroy {

  minutes: number;
  seconds: number;

  subscriber: any;

  constructor(private countDownTimeService: CountDownTimeService) {

  }

  ngOnInit(): void {
    this.subscriber = this.countDownTimeService.countDownTimerObserver.subscribe((time) => {
      this.calculateCountDownTime(time);
    });
  }

  private calculateCountDownTime(actualTime: number): void {
    this.minutes = Math.floor(actualTime / 60);
    this.seconds = actualTime - (this.minutes * 60);
  }

  ngOnDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }

}
