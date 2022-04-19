import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./products.component";
import {NgModule} from "@angular/core";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {

}
