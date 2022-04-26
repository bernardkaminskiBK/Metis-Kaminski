import {Component, OnDestroy, OnInit} from '@angular/core';
import {SnackBarService} from "../../shared/services/snackBar.service";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.scss']
})
export class ReferenciaComponent implements OnInit, OnDestroy {

  messageInput: string;
  localHistory: string [];

  private subscription: any;

  constructor(private snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    // this.localHistory = this.snackBar.getHistory()
    this.subscription = this.snackBar.historyObserver.subscribe((newValue) => {
      this.localHistory = newValue;
    });
  }

  sendMessage(): void {
    if (this.messageInput) {
      this.snackBar.createNotification(this.messageInput);
      this.messageInput = '';
    }
  }

  deleteHistory(): void {
    this.snackBar.deleteHistory();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
