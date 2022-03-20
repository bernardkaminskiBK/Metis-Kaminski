import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  @Output() descriptionEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  isDescriptionEmpty(descriptionLength: number) : void {
    this.descriptionEvent.emit();
  }

}
