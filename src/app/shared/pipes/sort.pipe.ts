import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../../models/Product";

@Pipe({
  name: 'sort',
  pure: false
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

      if (sortBy === undefined) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else if (sortBy === 'A-Z') {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else if (sortBy === 'Z-A') {
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
