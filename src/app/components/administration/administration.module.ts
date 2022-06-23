import {NgModule} from "@angular/core";
import {AdministrationComponent} from "./administration.component";
import {CommonModule} from "@angular/common";
import {AdministrationRoutingModule} from "./administration-routing.module";
import {MaterialModule} from "../../shared/material/material.module";
import {FormsModule} from "@angular/forms";

const components = [
  AdministrationComponent
];

@NgModule({
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [components],
  providers: [],
  exports: []
})
export class AdministrationModule {
}
