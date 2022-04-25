import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly historyKey = 'notificationHistory'

  constructor() {

  }

  saveHistory(history: string[]): void {
    localStorage.setItem(this.historyKey, JSON.stringify(history));
  }

  loadHistory(): string[] {
    const rawData = localStorage.getItem(this.historyKey);
    if(rawData) {
      return JSON.parse(rawData);
    }
    return [];
  }
}
