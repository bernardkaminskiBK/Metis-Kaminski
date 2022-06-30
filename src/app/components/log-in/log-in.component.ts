import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/UserService";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {User} from "../../models/User";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  username: string = '';
  password: string = '';

  isChecked = false;

  constructor(private router: Router, private userService: UserService) {

  }

  login(): void {
    this.userService.login(this.username, this.password).then((user) => {
      if (user) {
        this.router.navigateByUrl('admin');
      }

      if (this.isChecked) {
        this.rememberMe(user)
      }
    }).catch(() => {
    });
  }

  isCheckBoxChecked(change: MatCheckboxChange): void {
    this.isChecked = change.checked;
  }

  private rememberMe(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
