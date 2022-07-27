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
import {
  AddEditProductDialogComponent
} from '../../shared/modal-dialogs/add-edit-product-dialog/add-edit-product-dialog.component';
import {FormatTimePipe} from "../../shared/pipes/formatTime.pipe";
import {ProductFormService} from "../../shared/services/productForm.service";
import {UniteGalleryModule} from "../../shared/unitegallery/uniteGallery.module";
import { GalleryComponent } from './gallery/gallery.component';

const components = [
  ProductsComponent,
  ProductDescriptionComponent,
  ProductDetailComponent,
  AppFilterComponent,
  AppFilterOptionsComponent,
  ReviewComponent,
  AddEditProductDialogComponent,
  GalleryComponent,
  SortPipe,
  FormatTimePipe
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    UniteGalleryModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    FormatTimePipe,
    SortPipe,
    ProductDescriptionComponent
  ],
  providers: [ProductFormService]
})
export class ProductsModule {
}
