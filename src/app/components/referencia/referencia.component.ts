import {Component, OnInit} from '@angular/core';
import {SnackBarService} from "../../shared/services/snackBar.service";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'app-referencia',
  templateUrl: './referencia.component.html',
  styleUrls: ['./referencia.component.scss']
})
export class ReferenciaComponent implements OnInit {

  messageInput: string;
  localHistory: string [];

  constructor(private snackBar: SnackBarService) {
  }

  ngOnInit(): void {
    this.localHistory = this.snackBar.getHistory()
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

}
