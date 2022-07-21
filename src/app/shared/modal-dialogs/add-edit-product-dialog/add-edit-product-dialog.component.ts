import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductFormService} from "../../services/productForm.service";
import {MatDialog} from "@angular/material/dialog";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-edit-product-dialog.component.html',
  styleUrls: ['./add-edit-product-dialog.component.scss']
})
export class AddEditProductDialogComponent implements OnInit {

  mockCategories: string[];

  constructor(
    private productService: ProductService,
    public productFormService: ProductFormService,
    private dialog: MatDialog,
    public loaderService: LoaderService
  ) {
  }

  ngOnInit(): void {
    this.mockCategories = this.productService.getMockCategoryData();
    this.productFormService.initFormArrays();
  }

  addProduct(): void {
    this.loaderService.isLoading.next(true);
    this.productFormService.saveProduct().then(() => {
      this.onClose();
    });
  }

  editProduct() {
    this.loaderService.isLoading.next(true);
    this.productFormService.saveProduct().then(() => {
      this.onClose();
    });
  }

  onClear(): void {
    this.productFormService.resetAllFormGroups(1);
  }

  onClose(): void {
    this.productFormService.resetAllFormGroups(0);
    this.dialog.closeAll();
    this.loaderService.isLoading.next(false);
  }

}
