import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../shared/services/product.service";
import {Product} from "../../../models/Product";
import Utils from "../../../utils/Utils";
import {Vendor} from "../../../models/Vendor";
import {Review} from "../../../models/Review";
import {ValidateSoldQuantity} from "../../../utils/CustomValidator";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  productGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    price: new FormControl('', [Validators.required, Validators.min(1)]),
    stockCount: new FormControl('', [Validators.required, Validators.min(1)]),
    quantityGroup: new FormGroup({
      quantitySoldLastMonth: new FormControl('', [Validators.required, Validators.min(1)]),
      quantitySoldWholePeriod: new FormControl('', [Validators.required, Validators.min(1)])
    }, ValidateSoldQuantity),
    description: new FormControl(''),
  });

  reviewGroup = new FormGroup({
    reviews: new FormArray([])
  });

  vendorGroup = new FormGroup({
    vendors: new FormArray([])
  });

  mockCategories: string[];

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.mockCategories = this.productService.getMockCategoryData();
    this.addToFormArray(this.reviewArray());
    this.addToFormArray(this.vendorArray());
  }

  private createNewProduct(): void {
    this.productGroup.markAllAsTouched();
    this.productGroup.updateValueAndValidity();

    if (this.productGroup.valid) {
      this.productService.addNewProduct(this.newProduct());
      this.notification('Your product was successfully added to the list of products.')
    }
  }

  private newProduct(): Product {
    const rawValue = this.productGroup.getRawValue();

    const product = new Product();
    product.uuid = Utils.generateUUID();
    product.name = rawValue.productName;
    product.category = rawValue.category;
    product.price = rawValue.price;
    product.stockCount = rawValue.stockCount;
    product.quantitySoldLastMonth = this.productGroup.get('quantityGroup.quantitySoldLastMonth')?.value;
    product.quantitySoldWholePeriod = this.productGroup.get('quantityGroup.quantitySoldWholePeriod')?.value;
    product.description = rawValue.description;
    product.vendors = this.getVendorsFromFormArray();
    product.reviews = this.getReviewsFromFormArray();
    return product;
  }

  reviewArray(): FormArray {
    return this.reviewGroup.get('reviews') as FormArray;
  }

  vendorArray(): FormArray {
    return this.vendorGroup.get('vendors') as FormArray;
  }

  addToFormArray(formArray: FormArray): void {
    formArray.push(new FormControl());
  }

  removeFromFormArray(formArray: FormArray, index: number): void {
    formArray.removeAt(index);
  }

  private getVendorsFromFormArray(): Vendor[] {
    const vendorsRawValue = this.vendorGroup.getRawValue();
    let vendorList: Vendor[] = [];

    vendorsRawValue.vendors.forEach((vendorName) => {
      let vendor = new Vendor();
      vendor.name = vendorName;
      vendor.stockCount = 1;

      vendorList.push(vendor);
    });
    return vendorList;
  }

  private getReviewsFromFormArray(): Review[] {
    const reviewsRawValue = this.reviewGroup.getRawValue();
    let reviewList: Review[] = [];

    reviewsRawValue.reviews.forEach((reviewItem) => {
      let review = new Review();
      review.date = Utils.getFormattedCurrentDate();
      review.comment = reviewItem;

      reviewList.push(review);
    });
    return reviewList;
  }

  addProduct() {
    this.createNewProduct();
  }

  private notification(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 2000
    });
  }
}
