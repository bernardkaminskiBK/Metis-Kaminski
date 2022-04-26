import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StorageService} from "./storage.service";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SnackBarService {

  private history: string[];
  // historyObserver = new Subject<string[]>();
  historyObserver = new BehaviorSubject<string[]>([]);

  constructor(private snackBar: MatSnackBar, private storage: StorageService) {
    this.loadHistory();
  }

  createNotification(message: string, action?: string): void {
    this.history.push(message);
    this.snackBar.open(message, action);
    this.dismissSnackBar();
    this.storage.saveHistory(this.history);
    // this.historyObserver.next(this.history);
  }

  deleteHistory(): void {
    this.history = [];
    this.historyObserver.next(this.history);
    // if (this.history.length) {
    //   while (this.history.pop()) {
    //   }
    // }
    this.storage.saveHistory(this.history);
  }

  // getHistory(): string[] {
  //   return this.history;
  // }

  private loadHistory() {
    this.history = this.storage.loadHistory();
    if (!this.history) {
      this.history = [];
    }
    this.historyObserver.next(this.history);
  }

  private dismissSnackBar() {
    setTimeout(() => {
      this.snackBar.dismiss();
    }, 3000);
  }
}
