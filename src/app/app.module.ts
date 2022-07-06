import {LOCALE_ID, NgModule} from '@angular/core';
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
import {ShoppingCartBadgeComponent} from './components/shopping-cart-badge/shopping-cart-badge.component';
import {AboutDialogComponent} from './shared/modal-dialogs/about-dialog/about-dialog.component';
import {CountDownTimerComponent} from './components/count-down-timer/count-down-timer.component';
import {ProductsModule} from "./components/products/products.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HeaderInterceptor} from "./shared/interceptors/header.interceptor";
import {AuthenticateInterceptor} from "./shared/interceptors/authenticate.interceptor";

import localeSk from '@angular/common/locales/sk';
import localeHu from '@angular/common/locales/hu';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import {registerLocaleData} from "@angular/common";
import {I18nModule} from "./shared/i18n/i18n.module";

registerLocaleData(localeSk);
registerLocaleData(localeHu);
registerLocaleData(localeDe);
registerLocaleData(localeEn);

const interceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthenticateInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true}
];

@NgModule({
  declarations: [
    AppComponent,
    ...routingComponents,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    BackToTopComponent,
    ShoppingCartBadgeComponent,
    AboutDialogComponent,
    CountDownTimerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    MaterialModule,
    ProductsModule,
    HttpClientModule,
    I18nModule
  ],
  providers: [
    SnackBarService,
    {provide: LOCALE_ID, useValue: 'sk-SK'},
    ...interceptorProviders
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
