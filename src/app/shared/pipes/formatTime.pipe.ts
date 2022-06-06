import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'formatTime'})
export class FormatTimePipe implements PipeTransform {

  transform(value: number): any {
      return this.format(value);
  }

  private format(value: number): string {
    if (value <= 9) {
      return  '0' + value;
    } else {
      return value.toString();
    }
  }

}
