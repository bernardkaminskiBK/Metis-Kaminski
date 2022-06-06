import {ProductsComponent} from "./products.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductDescriptionComponent} from "./product-description/product-description.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AppFilterComponent} from "./app-filter/app-filter.component";
import {AppFilterOptionsComponent} from "./app-filter-options/app-filter-options.component";
import {ReviewComponent} from "./review/review.component";
import {SortPipe} from "../../shared/pipes/sort.pipe";
import {MaterialModule} from "../../shared/material/material.module";
import { AddProductDialogComponent } from '../../shared/modal-dialogs/add-product-dialog/add-product-dialog.component';
import {FormatTimePipe} from "../../shared/pipes/formatTime.pipe";

const components = [
  ProductsComponent,
  ProductDescriptionComponent,
  ProductDetailComponent,
  AppFilterComponent,
  AppFilterOptionsComponent,
  ReviewComponent,
  AddProductDialogComponent,
  SortPipe,
  FormatTimePipe
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    components
  ],
  exports: [
    FormatTimePipe
  ]
})
export class ProductsModule {}
