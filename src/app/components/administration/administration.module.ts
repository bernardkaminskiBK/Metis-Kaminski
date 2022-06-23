import {NgModule} from "@angular/core";
import {AdministrationComponent} from "./administration.component";
import {CommonModule} from "@angular/common";
import {AdministrationRoutingModule} from "./administration-routing.module";
import {MaterialModule} from "../../shared/material/material.module";
import {FormsModule} from "@angular/forms";
import {ProductsModule} from "../products/products.module";

const components = [
  AdministrationComponent
];

@NgModule({
    imports: [
        CommonModule,
        AdministrationRoutingModule,
        MaterialModule,
        FormsModule,
        ProductsModule
    ],
  declarations: [components],
  providers: [],
  exports: []
})
export class AdministrationModule {
}
