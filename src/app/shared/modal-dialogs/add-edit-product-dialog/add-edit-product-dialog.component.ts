import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductFormService} from "../../services/productForm.service";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-edit-product-dialog.component.html',
  styleUrls: ['./add-edit-product-dialog.component.scss']
})
export class AddEditProductDialogComponent implements OnInit {

  mockCategories: string[];

  constructor(
    private productService: ProductService,
    public productFormService: ProductFormService
  ) {
  }

  ngOnInit(): void {
    this.mockCategories = this.productService.getMockCategoryData();
    this.productFormService.initFormArrays();
  }

  addProduct(): void {
    this.productFormService.saveProduct();
    this.onClose();
  }

  editProduct() {
    this.productFormService.saveProduct();
    this.onClose();
  }

  onClear(): void {
    this.productFormService.resetAllFormGroups(1);
  }

  onClose(): void {
    this.productFormService.resetAllFormGroups(0);
  }

}
