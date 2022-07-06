import {Injectable} from "@angular/core";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  readonly historyKey = 'notificationHistory';
  readonly userKey = 'user';

  saveHistory(history: string[]): void {
    localStorage.setItem(this.historyKey, JSON.stringify(history));
  }

  loadHistory(): string[] {
    const rawData = localStorage.getItem(this.historyKey);
    if (rawData) {
      return JSON.parse(rawData);
    }
    return [];
  }

  saveUser(user: User) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  loadUser(): User | undefined {
    const user = localStorage.getItem(this.userKey);
    if (user) {
      return JSON.parse(user) as User;
    }
    return undefined;
  }
}
