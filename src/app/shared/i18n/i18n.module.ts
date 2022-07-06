import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {I18nPipe} from "./i18n.pipe";

const pipes = [I18nPipe];

@NgModule({
  declarations: [pipes],
  imports: [CommonModule],
  providers: [],
  exports: [pipes]
})
export class I18nModule {
}
