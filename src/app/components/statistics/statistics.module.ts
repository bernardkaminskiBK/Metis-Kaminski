import {StatisticsComponent} from "./statistics.component";
import {NgModule} from "@angular/core";
import {StatisticsRoutingModule} from "./statistics-routing.module";
import {MaterialModule} from "../../material/material.module";
import {CommonModule} from "@angular/common";

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
