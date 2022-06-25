import {Component} from '@angular/core';
import {UserService} from "../../shared/services/UserService";
import {NotificationService} from "../../shared/services/notification.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  constructor(public userService: UserService, private notificationService: NotificationService) {
  }

  isAuth(): void {
    if(!this.userService.isAuthentication) {
      this.notificationService.notification('To check statistics you need to be logged as Admin.')
    }
  }
}
