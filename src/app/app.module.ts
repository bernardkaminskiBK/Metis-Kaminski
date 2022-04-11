import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProductDescriptionComponent} from './components/product-description/product-description.component';
import {ReviewComponent} from "./components/review/review.component";
import {FormsModule} from "@angular/forms";
import {AppFilterOptionsComponent} from './components/app-filter-options/app-filter-options.component';
import {AppFilterComponent} from './components/app-filter/app-filter.component';
import {MaterialModule} from "./material/material.module";
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    ProductDescriptionComponent,
    ReviewComponent,
    AppFilterComponent,
    AppFilterOptionsComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
