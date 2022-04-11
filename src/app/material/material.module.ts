import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";

const material = [
  MatButtonModule,
  BrowserAnimationsModule,
  MatSidenavModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule {
}
