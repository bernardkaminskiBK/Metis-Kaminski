import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../services/UserService";
import {NotificationService} from "../services/notification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private notificationService: NotificationService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.isAuthentication && this.userService.getUser()?.role === 'admin' || this.userService.getUser()?.role === 'manager') {
      return true;
    }

    // prihlasovacie udaje na user je simpleUser heslo
    if (this.userService.isAuthentication && this.userService.getUser()?.role === 'user') {
      this.router.navigateByUrl('products');

      if(document.URL.includes('products') || document.URL.includes('profil') || document.URL.includes('referencie')) {
        this.notificationService.notification('Access was denied.');
      }
      return false;
    }

    this.router.navigateByUrl('login');
    this.notificationService.notification('Access was denied. Please Sign Up.');
    return false;
  }

}
