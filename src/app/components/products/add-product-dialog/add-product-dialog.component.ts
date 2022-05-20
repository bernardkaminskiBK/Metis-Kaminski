import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../../shared/services/product.service";
import {Product} from "../../../models/Product";
import Utils from "../../../utils/Utils";
import {Vendor} from "../../../models/Vendor";
import {Review} from "../../../models/Review";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  productGroup = new FormGroup({
    productName: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(''),
    stockCount: new FormControl(''),
    quantitySoldLastMonth: new FormControl(''),
    quantitySoldWholePeriod: new FormControl(''),
    description: new FormControl(''),
  });

  reviewGroup = new FormGroup({
    reviews: new FormArray([])
  });

  vendorGroup = new FormGroup({
    vendors: new FormArray([])
  });

  mockCategories: string[];

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.mockCategories = this.productService.getMockCategoryData();
    this.addToFormArray(this.reviewArray());
    this.addToFormArray(this.vendorArray());
  }

  private createNewProduct(): void {
    const rawValue = this.productGroup.getRawValue();

    const product = new Product();
    product.uuid = Utils.generateUUID();
    product.name = rawValue.productName;
    product.category = rawValue.category;
    product.price = rawValue.price;
    product.stockCount = rawValue.stockCount;
    product.quantitySoldLastMonth = rawValue.quantitySoldLastMonth;
    product.quantitySoldWholePeriod = rawValue.quantitySoldWholePeriod;
    product.description = rawValue.description;
    product.vendors = this.getVendorsFromFormArray();
    product.reviews = this.getReviewsFromFormArray();

    this.productService.addNewProduct(product);
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

  private getVendorsFromFormArray() : Vendor[] {
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

  private getReviewsFromFormArray() : Review[] {
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
}
