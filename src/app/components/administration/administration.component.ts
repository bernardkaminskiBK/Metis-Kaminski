import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/UserService";
import {Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  viewList: Product[];
  userName: string = '';

  constructor(private productService: ProductService, public userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.setLayoutTitle()

    if (this.userService.isAuthentication) {
      this.router.navigateByUrl('admin');

      this.productService.getProductList(this.userService.isAuthentication).then((products) => {
        this.viewList = products;
      }).catch(() => {
      });

    } else {
      this.router.navigateByUrl('login');
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('login');
  }

  setLayoutTitle() {
    if (this.userService.getUser()!.firstName) {
      this.userName = this.userService.getUser()!.firstName
    }

  }
}
