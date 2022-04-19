import {Component, DoCheck, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-filter-options',
  templateUrl: './app-filter-options.component.html',
  styleUrls: ['./app-filter-options.component.scss']
})
export class AppFilterOptionsComponent  {
  @Output() isCheckedCheckbox : EventEmitter<boolean> = new EventEmitter<boolean>();

  private isChecked: boolean = false;

  isCheckboxChecked() {
   if(this.isChecked) {
     this.isChecked = false;
     this.isCheckedCheckbox.emit(this.isChecked);
   } else {
     this.isChecked = true;
     this.isCheckedCheckbox.emit(this.isChecked);
   }
  }
}
