import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/UserService";
import {MatCheckboxChange} from "@angular/material/checkbox";
import {User} from "../../models/User";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  username: string = '';
  password: string = '';

  isChecked = false;

  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit(): void {
    if (this.userService.isAuthentication) {
      this.router.navigateByUrl('admin');
    } else {
      this.router.navigateByUrl('login');
    }
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
