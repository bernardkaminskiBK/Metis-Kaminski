import {NgModule} from "@angular/core";
import {AdministrationComponent} from "./administration.component";
import {CommonModule} from "@angular/common";
import {AdministrationRoutingModule} from "./administration-routing.module";

const components = [
  AdministrationComponent
];

@NgModule({
  imports: [CommonModule, AdministrationRoutingModule],
  declarations: [components],
  providers: [],
  exports: []
})
export class AdministrationModule {
}
