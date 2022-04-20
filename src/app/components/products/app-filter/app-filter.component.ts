import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss']
})
export class AppFilterComponent implements OnChanges {
  searchInputText: string = '';

  @ViewChild('input') search: ElementRef;

  @Input('listOfProducts') data: any[];
  @Input('isCheckBoxChecked') isCheckBoxChecked: boolean;
  @Output('filteredList') filteredData: EventEmitter<any> = new EventEmitter<any>();

  ngOnChanges(changes: SimpleChanges) {
    this.filter();
  }

  filter(): void {
    if(this.searchInputText.length >= 2 || this.isCheckBoxChecked) {
      if(this.data && this.data.length) {
        return this.filteredData.emit(this.data.filter((product: any) => {
          return this.filterByTitle(product) && this.filterByInStock(product);
        }));
      }
      this.filteredData.emit([]);
    } else {
      this.filteredData.emit(this.data);
    }
  }

  private filterByInStock(product: any): boolean {
    return !this.isCheckBoxChecked || product.stockCount > 0;
  }

  private filterByTitle(product: any): boolean {
    if(this.searchInputText.length >= 2) {
      return product.name.toLowerCase().includes(this.searchInputText.toLowerCase());
    }
    return true;
  }
// Vyvarovat sa toto je extra spatny kod....
  // ngDoCheck(): void {
  //   setTimeout(() => {
  //     if (this.isCheckBoxChecked) {
  //       this.inStockFilter();
  //     } else {
  //       this.filter();
  //     }
  //   });
  // }
  //
  // private inStockFilter(): void {
  //   const filteredData = this.data.filter((searchItem) => {
  //     if (searchItem.name.toLowerCase().includes(this.searchInputText.toLowerCase()) &&
  //       searchItem.stockCount > 1) {
  //       return searchItem;
  //     }
  //   });
  //   this.filteredData.emit(filteredData);
  //
  //   if (this.searchInputText.length == 0) {
  //     const copyFilteredData =
  //       this.copyData.filter((searchItem) => {
  //         if (searchItem.stockCount > 1) {
  //           return searchItem;
  //         }
  //       });
  //     this.filteredData.emit(copyFilteredData);
  //   }
  // }

  // private filter(): void {
  //   if (this.searchInputText.length > 1) {
  //     const filteredData = this.data.filter((searchItem) => {
  //       if (searchItem.name.toLowerCase().includes(this.searchInputText.toLowerCase())) {
  //         return searchItem;
  //       }
  //     });
  //     this.filteredData.emit(filteredData);
  //   } else {
  //     this.filteredData.emit(this.copyData);
  //   }
  // }

  clickSearchBtn() {
    this.showTextInAlertWindow(this.search.nativeElement.value);
  }

  private showTextInAlertWindow(text: string): void {
    if (text.length != 0) {
      alert('Your chosen item was: ' + text);
    }
  }

}