import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UniteGalleryComponent} from "./uniteGallery.component";

const components = [UniteGalleryComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [components],
  exports: [components]
})
export class UniteGalleryModule {
}
