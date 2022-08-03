import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../../../models/Image";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  @Input() data: Image[];

}
