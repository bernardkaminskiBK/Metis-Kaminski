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
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';

const components = [
  ProductsComponent,
  ProductDescriptionComponent,
  ProductDetailComponent,
  AppFilterComponent,
  AppFilterOptionsComponent,
  ReviewComponent,
  AddProductDialogComponent,
  SortPipe
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
})
export class ProductsModule {}
