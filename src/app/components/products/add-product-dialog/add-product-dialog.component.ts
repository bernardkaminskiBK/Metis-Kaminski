import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      stockCount: ['', Validators.required],
      description: ['']
    })
  }

  addProduct() {
    console.log(this.productForm.getRawValue());
  }
}
