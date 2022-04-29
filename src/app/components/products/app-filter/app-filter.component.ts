import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  Component, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";

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

  constructor(private productService: ProductService) {
  }

  private array: any[];
  private subscription: any;

  ngOnChanges(changes: SimpleChanges) {
    this.productService.productListObserver.subscribe((newValue) => {
      this.array = newValue;
    });
    this.filter();
  }

  filter(): void {
    if (this.array.length >= 2 || this.isCheckBoxChecked) {
      if (this.array && this.array.length) {
        return this.filteredData.emit(this.array.filter((product: any) => {
          return this.filterByTitle(product) && this.filterByInStock(product);
        }));
      }
      this.filteredData.emit([]);
    } else {
      this.filteredData.emit(this.array);
    }
  }

  private filterByInStock(product: any): boolean {
    return !this.isCheckBoxChecked || product.stockCount > 0;
  }

  private filterByTitle(product: any): boolean {
    if (this.searchInputText.length >= 2) {
      return product.name.toLowerCase().includes(this.searchInputText.toLowerCase());
    }
    return true;
  }

  clickSearchBtn() {
    this.showTextInAlertWindow(this.search.nativeElement.value);
  }

  private showTextInAlertWindow(text: string): void {
    if (text.length != 0) {
      alert('Your chosen item was: ' + text);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
