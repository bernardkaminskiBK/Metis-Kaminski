import {
  Component, DoCheck, ElementRef, EventEmitter, Input, OnInit, Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements OnInit, DoCheck {
  searchInputText: string = '';

  @ViewChild('input') search: ElementRef;

  @Input('listOfProducts') data: any[];
  @Input('copyListOfProducts') copyData: any[];
  @Input('copyInStockOfProductList') copyInStockData: any[];
  @Input('isCheckBoxChecked') isCheckBoxChecked: boolean;
  @Output('filteredList') filteredData: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    if (this.isCheckBoxChecked) {
      this.inStockFilter();
    } else {
      this.filteredData.emit(this.copyData);
      this.filter();
    }
  }

  private inStockFilter(): void {
    const result: any = [];
    this.copyInStockData.forEach((searchItem) => {
      if (searchItem.name.toLowerCase().includes(this.searchInputText.toLowerCase()) &&
        searchItem.stockCount > 1) {
        result.push(searchItem);
      }
    });
    this.filteredData.emit(result);
  }

  private filter(): void {
    const result: any = [];
    this.data.forEach((searchItem) => {
      if (searchItem.name.toLowerCase().includes(this.searchInputText.toLowerCase())
        && this.searchInputText.length > 1) {
        result.push(searchItem);
      }
    });
    this.filteredData.emit(result);
  }

  clickSearchBtn() {
    this.showTextInAlertWindow(this.search.nativeElement.value);
  }

  private showTextInAlertWindow(text: string) {
    if (text.length != 0) {
      alert('Your chosen item was: ' + text);
    }
  }

}
