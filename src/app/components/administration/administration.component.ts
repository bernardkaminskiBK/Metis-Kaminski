import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/UserService";
import {Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../models/Product";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  AddEditProductDialogComponent
} from "../../shared/modal-dialogs/add-edit-product-dialog/add-edit-product-dialog.component";
import {ProductFormService} from "../../shared/services/productForm.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit, DoCheck {

  viewList: Product[];
  userName: string = '';

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private productFormService: ProductFormService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.productService.getProductList(this.userService.isAuthentication).then((products) => {
      this.viewList = products;

    }).catch(() => {
    });
  }

  // TODO: Nie je to najlepsi sposob ale mala operacia, tak som si povedal ze checkuj
  //  to prosim ta stale, kym nevymislim nieco lepsie...
  ngDoCheck(): void {
    this.setLayoutTitle();
  }

  setLayoutTitle(): void {
    if (this.userService.getUser()) {
      this.userName = this.userService.getUser()!.firstName
    }
  }

  addProductDialog(): void {
    let config: MatDialogConfig = {
      panelClass: "dialog-responsive"
    }

    this.productFormService.addEdit = true;

    const dialogRef = this.dialog.open(AddEditProductDialogComponent, config);
    dialogRef.afterClosed().subscribe(() => {
      this.getProductList();
    });

    dialogRef.disableClose = true;
  }

  getMyProducts(): void {
    const productList: Product[] = [];

    this.productService.getProductList(this.userService.isAuthentication).then((products) => {
      products.forEach((product) => {
        if (product.ownerUsername === this.userService.getUser()?.username) {
          productList.push(product);
        }
        this.viewList = productList;
      });
    });
  }

}
