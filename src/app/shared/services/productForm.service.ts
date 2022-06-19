import {Injectable} from "@angular/core";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateSoldQuantity} from "../../utils/CustomValidator";
import {ProductService} from "./product.service";
import {Product} from "../../models/Product";
import {Vendor} from "../../models/Vendor";
import {Review} from "../../models/Review";
import Utils from "../../utils/Utils";

@Injectable()
export class ProductFormService {

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

  addEdit: boolean = true;
  private product: Product;

  constructor(private productService: ProductService) {
  }

  initFormArrays() {
    this.addToFormArray(this.reviewArray());
    this.addToFormArray(this.vendorArray());
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

  fillDataEditProductForm(product: Product): void {
    this.product = product;

    this.productGroup.setValue({
      productName: product.name,
      category: product.category,
      price: product.price,
      stockCount: product.stockCount,
      quantityGroup: {
        quantitySoldLastMonth: product.sellCountLastMonth,
        quantitySoldWholePeriod: product.sellCountOverall
      },
      description: product.description
    })

    if (product.reviews && product.reviews.length) {
      product.reviews.forEach((review) => {
        this.reviewArray().push(new FormControl(review.comment))
      });
    }

    if (product.vendors && product.vendors.length) {
      product.vendors.forEach((vendor) => {
        this.vendorArray().push(new FormControl(vendor.name))
      });
    }

    this.productGroup.markAllAsTouched();
    this.productGroup.updateValueAndValidity();
  }

  private addEditProduct(): Product {
    const rawValue = this.productGroup.getRawValue();

    let product;
    if (this.addEdit) {
      product = new Product();
      product.uuid = Utils.generateUUID();
      product.name = rawValue.productName;
      product.category = rawValue.category;
      product.price = rawValue.price;
      product.stockCount = rawValue.stockCount;
      product.sellCountLastMonth = this.productGroup.get('quantityGroup.quantitySoldLastMonth')?.value;
      product.sellCountOverall = this.productGroup.get('quantityGroup.quantitySoldWholePeriod')?.value;
      product.description = rawValue.description;
      product.vendors = this.getVendorsFromFormArray();
      product.reviews = this.getReviewsFromFormArray();
    } else {
      product = this.product
      product.name = rawValue.productName;
      product.category = rawValue.category;
      product.price = rawValue.price;
      product.stockCount = rawValue.stockCount;
      product.sellCountLastMonth = this.productGroup.get('quantityGroup.quantitySoldLastMonth')?.value;
      product.sellCountOverall = this.productGroup.get('quantityGroup.quantitySoldWholePeriod')?.value;
      product.description = rawValue.description;
      product.vendors = this.getVendorsFromFormArray();
      product.reviews = this.getReviewsFromFormArray();
    }

    return product;
  }

  saveProduct(): void {
    if (this.addEdit) {
      this.productService.addNewProduct(this.addEditProduct()).then((result) => {

      }).then(() => {});
    } else {
      this.productService.updateProduct(this.addEditProduct()).then(() => {}).catch(() => {});
    }
  }

  private getVendorsFromFormArray(): Vendor[] {
    const vendorsRawValue = this.vendorGroup.getRawValue();
    let vendorList: Vendor[] = [];

    vendorsRawValue.vendors.forEach((vendorName) => {
      if (vendorName && vendorName.length > 0) {
        let vendor = new Vendor();
        vendor.name = vendorName;
        vendor.stockCount = 1;

        vendorList.push(vendor);
      }

    });
    return vendorList;
  }

  private getReviewsFromFormArray(): Review[] {
    const reviewsRawValue = this.reviewGroup.getRawValue();
    let reviewList: Review[] = [];

    reviewsRawValue.reviews.forEach((reviewItem) => {
      if (reviewItem && reviewItem.length > 0) {
        let review = new Review();
        review.date = Utils.getFormattedCurrentDate();
        review.comment = reviewItem;

        reviewList.push(review);
      }

    });
    return reviewList;
  }

  resetAllFormGroups(startPosition: number): void {
    this.productGroup.reset();
    this.vendorGroup.reset();
    this.reviewGroup.reset();

    this.vendorArray().controls.splice(startPosition, this.vendorArray().controls.length);
    this.reviewArray().controls.splice(startPosition, this.reviewArray().controls.length);
  }

}
