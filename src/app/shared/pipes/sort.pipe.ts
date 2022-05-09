import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from 'src/app/utils/Constants';
import { Product } from '../../models/Product';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: Product[], arg: string): any {
    if (value && value.length) {
      return this.update(value, arg);
    } else {
      return [];
    }
  }

  private update(value: Product[], arg: string): Product[] {
    return this.sortArrayBy(value, arg);
  }

  private sortArrayBy(arr: Product[], sortBy: string): Product[] {
    return arr.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (sortBy === Constants.AZ) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else if (sortBy === Constants.ZA) {
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      }

      return 0;
    });
  }
}
