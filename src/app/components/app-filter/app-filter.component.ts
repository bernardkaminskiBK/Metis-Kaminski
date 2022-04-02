import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements DoCheck {
  searchInputText: string = '';

  @ViewChild('input') search: ElementRef;

  @Input('listOfProducts') data: any[];
  @Input('copyListOfProducts') copyData: any[];
  @Input('copyInStockOfProductList') copyInStockData: any[];
  @Input('isCheckBoxChecked') isCheckBoxChecked: boolean;
  @Output('filteredList') filteredData: EventEmitter<any> = new EventEmitter<any>();

  ngDoCheck(): void {
    if (this.isCheckBoxChecked) {
      this.inStockFilter();
    } else {
      this.filter();
    }
  }

  private inStockFilter(): void {
      const filteredData = this.copyInStockData.filter((searchItem) => {
        if (searchItem.name.toLowerCase().includes(this.searchInputText.toLowerCase()) &&
          searchItem.stockCount > 1) {
          return searchItem;
        }
      });
      this.filteredData.emit(filteredData);

  }

  private filter(): void {
    if (this.searchInputText.length > 1) {
      const filterData = this.data.filter((searchItem) => {
        if (searchItem.name.toLowerCase().includes(this.searchInputText.toLowerCase())) {
          console.log('filter: offSetLeft and Top: ' + searchItem.offSetLeft + ' and ' + searchItem.offSetTop);
          return searchItem;
        }
      });
      this.filteredData.emit(filterData);
    } else {
      this.filteredData.emit(this.copyData);
    }
  }

  clickSearchBtn() {
    this.showTextInAlertWindow(this.search.nativeElement.value);
  }

  private showTextInAlertWindow(text: string): void {
    if (text.length != 0) {
      alert('Your chosen item was: ' + text);
    }
  }

}
