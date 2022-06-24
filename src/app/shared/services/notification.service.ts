import {Injectable} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private matSnackBar: MatSnackBar) {
  }

  notification(msg: string): void {
    this.matSnackBar.open(msg, '', {
      duration: 2000
    });
  }
}
