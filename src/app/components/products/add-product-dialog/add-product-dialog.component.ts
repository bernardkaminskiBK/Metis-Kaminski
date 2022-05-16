import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../shared/services/product.service";
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  productForm: FormGroup;
  mockCategories: string[];

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.mockCategories = this.productService.getMockCategoryData();
    this.prepareProductForm();
  }

  private createNewProduct(): void {
    const rawValue = this.productForm.getRawValue();
    const product = new Product();
    product.id = rawValue.id;
    product.name = rawValue.productName;
    product.category = rawValue.category;
    product.price = rawValue.price;
    product.stockCount = rawValue.stockCount;
    product.quantitySoldWholePeriod = rawValue.soldTotal;
    product.quantitySoldLastMonth = rawValue.soldLastMonth;
    product.description = rawValue.description;

    this.productService.addNewProduct(product);
  }

  private prepareProductForm(): void {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      stockCount: ['', Validators.required],
      soldTotal: ['', Validators.required],
      soldLastMonth: ['', Validators.required],
      description: ['']
    })
  }

  addProduct() {
    this.createNewProduct();
  }
}
