import {ProductsComponent} from "./products.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ProductsRoutingModule} from "./products-routing.module";
import {FormsModule} from "@angular/forms";
import {ProductDescriptionComponent} from "./product-description/product-description.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {AppFilterComponent} from "./app-filter/app-filter.component";
import {AppFilterOptionsComponent} from "./app-filter-options/app-filter-options.component";
import {ReviewComponent} from "./review/review.component";

const components = [
  ProductsComponent,
  ProductDescriptionComponent,
  ProductDetailComponent,
  AppFilterComponent,
  AppFilterOptionsComponent,
  ReviewComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    components
  ],
})
export class ProductsModule {}
