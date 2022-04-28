import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "./shared/material/material.module";
import {SideNavComponent} from './components/side-nav/side-nav.component';
import {BackToTopComponent} from './components/back-to-top/back-to-top.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SnackBarService} from "./shared/services/snackBar.service";
import { ShoppingCartBadgeComponent } from './components/shopping-cart-badge/shopping-cart-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    BackToTopComponent,
    ShoppingCartBadgeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule
  ],
  providers: [SnackBarService],
  bootstrap: [AppComponent],
  exports: []

})
export class AppModule {
}
