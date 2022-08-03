import {AfterViewInit, Component, Input} from "@angular/core";

declare const jQuery: any;

@Component({
  selector: 'app-unite-gallery',
  templateUrl: './uniteGallery.component.html'
})
export class UniteGalleryComponent implements AfterViewInit {

  @Input() set gallery(images: any[]) {
    this._gallery = images;
  }

  _gallery: any[];

  private opt: any;
  private instance: any;

  ngAfterViewInit(): void {
    this.initGallery();
  }

  private initGallery(): void {
    this.opt = {
      gallery_theme: 'slider',
      gallery_height: '750',
      gallery_autoplay: 'false'
    };
    this.instance = jQuery('#gallery').unitegallery(this.opt);
  }

  destroy() {
    this.instance.destroy();
  }

  init() {
    const backup = this._gallery;
    this._gallery = [];

    console.log("lenght: " + backup.length);
    setTimeout(() => {
      this._gallery = backup;

      setTimeout(() => {
        this.initGallery();
      }, 1);
    }, 1);
  }
}
