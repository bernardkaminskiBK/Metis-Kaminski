import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductsComponent } from './components/products/products.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {ReviewComponent} from "./components/review/review.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ProductDescriptionComponent,
    ProductsComponent,
    WelcomeComponent,
    ReviewComponent,
  ],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
