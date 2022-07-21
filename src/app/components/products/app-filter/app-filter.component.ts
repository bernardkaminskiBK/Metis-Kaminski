import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss'],
})
export class AppFilterComponent implements OnChanges {
  searchInputText: string = '';

  @ViewChild('input') search: ElementRef;

  @Input('isCheckBoxChecked') isCheckBoxChecked: boolean;
  @Input('dataList') array: Product[];
  @Output('filteredList') filteredData: EventEmitter<Product[]> =
    new EventEmitter<Product[]>();

  private subscription: any;

  ngOnChanges() {
    if (this.array) {
      this.filter();
    }
  }

  filter(): void {
    if (this.array.length >= 2 || this.isCheckBoxChecked) {
      if (this.array && this.array.length) {
        return this.filteredData.emit(
          this.array.filter((product: Product) => {
            return this.filterByTitle(product) && this.filterByInStock(product);
          })
        );
      }
      this.filteredData.emit([]);
    } else {
      this.filteredData.emit(this.array);
    }
  }

  private filterByInStock(product: Product): boolean {
    return !this.isCheckBoxChecked || product.stockCount > 0;
  }

  private filterByTitle(product: Product): boolean {
    if (this.searchInputText.length >= 2) {
      return product.name
        .toLowerCase()
        .includes(this.searchInputText.toLowerCase());
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
