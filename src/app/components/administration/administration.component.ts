import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    // TODO: tu si prestal potrebujes cez http client call pre produkty podla auth...
    if(this.userService.isAuthentication) {
      this.router.navigateByUrl('admin');
    } else {
      this.router.navigateByUrl('login');
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }
}
