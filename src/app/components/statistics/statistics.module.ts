import {StatisticsComponent} from "./statistics.component";
import {NgModule} from "@angular/core";
import {StatisticsRoutingModule} from "./statistics-routing.module";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../shared/material/material.module";

const components = [
  StatisticsComponent
];

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    MaterialModule
  ],
  declarations: [components],
  providers: [],
  exports: []
})
export class StatisticsModule {
}
