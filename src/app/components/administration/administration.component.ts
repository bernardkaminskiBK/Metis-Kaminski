import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/UserService";
import {Router} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../models/Product";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {
  AddEditProductDialogComponent
} from "../../shared/modal-dialogs/add-edit-product-dialog/add-edit-product-dialog.component";
import {ProductFormService} from "../../shared/services/productForm.service";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  viewList: Product[];
  userName: string | undefined = '';

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private productFormService: ProductFormService,
    private dialog: MatDialog,
    private storageService: StorageService
  ) {
  }

  ngOnInit(): void {
    this.getProductList();
    this.setLayoutTitle();
  }

  getProductList(): void {
    this.productService.getProductList(this.userService.isAuthentication).then((products) => {
      this.viewList = products;

    }).catch(() => {
    });
  }

  setLayoutTitle(): void {
    this.userName = this.storageService.loadUser()?.firstName;
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
