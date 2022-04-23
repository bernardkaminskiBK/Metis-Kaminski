import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  private cacheValue: any[];
  private cacheResult: any[];

  transform(value: any, arg: string): any[] {
    if (value !== this.cacheValue) {
      this.cacheValue = value;
      this.cacheResult = this.update(value, arg);
    }
    return this.cacheResult;
  }

  update(value: any, arg: string): any[] {
    return this.sortArrayBy(value, arg);
  }

  private sortArrayBy(arr: any [], sortBy: string): any[] {
    return arr.sort(function (a, b) {

      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (sortBy === 'A-Z') {
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
      } else {
        return 0;
      }

      return 0;
    });
  }

}
