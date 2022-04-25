import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  private history: string[];

  constructor(private snackBar: MatSnackBar, private storage: StorageService) {
    this.loadHistory();
  }

  createNotification(message: string, action?: string): void {
    this.history.push(message);
    this.snackBar.open(message, action);
    this.dismissSnackBar();
    this.storage.saveHistory(this.history);
  }

  deleteHistory(): void {
    if (this.history.length) {
      while (this.history.pop()) {
      }
    }
    this.storage.saveHistory(this.history);
  }

  getHistory(): string[] {
    return this.history;
  }

  private loadHistory() {
    this.history = this.storage.loadHistory();
    if (!this.history) {
      this.history = [];
    }
  }

  private dismissSnackBar() {
    setTimeout(() => {
      this.snackBar.dismiss();
    }, 3000);
  }
}
