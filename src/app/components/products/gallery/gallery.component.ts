import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/Product";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() data: Product;

  myGallery: string[] = [];

  ngOnInit(): void {
    if (this.data) {
      this.data.images.forEach((img) => {
        this.myGallery.push(img.url);
      });
    }
  }

}
