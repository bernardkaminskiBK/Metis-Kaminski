import {StatisticsComponent} from "./statistics.component";
import {LOCALE_ID, NgModule} from "@angular/core";
import {StatisticsRoutingModule} from "./statistics-routing.module";
import {CommonModule, CurrencyPipe, registerLocaleData} from "@angular/common";
import {MaterialModule} from "../../shared/material/material.module";
import {StatisticsService} from "../../shared/services/statistics.service";
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

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
  providers: [StatisticsService, CurrencyPipe, { provide: LOCALE_ID, useValue: 'de-DE' }],
  exports: []
})
export class StatisticsModule {
}
