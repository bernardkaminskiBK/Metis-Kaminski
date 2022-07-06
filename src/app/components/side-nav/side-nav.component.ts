import {Component} from '@angular/core';
import {UserService} from "../../shared/services/UserService";
import {NotificationService} from "../../shared/services/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  constructor(
    public userService: UserService,
    private notificationService: NotificationService,
    private router: Router) {
  }

  logout(): void {
    if (this.userService.isAuthentication) {
      if (confirm('Are you sure you want to logout?')) {
        this.userService.logout();
        this.router.navigateByUrl('login');
      }
    } else {
      this.notificationService.notification('You are already logged out.')
    }
  }
}
