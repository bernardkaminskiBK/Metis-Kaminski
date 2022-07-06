import {Pipe, PipeTransform} from "@angular/core";
import {I18nService} from "./i18n.service";

@Pipe({
  name: 'i18n',
  pure: false
})
export class I18nPipe implements PipeTransform {

  private value: string;
  private lastKey: string;
  private lastArgs;
  private onLanguageChange: any;

  constructor(private service: I18nService) {
  }

  transform(label: any, args?: string): string {
    if (label !== this.lastKey) {
      this.lastKey = label;
      this.lastArgs = args;
      this.updateValue(label, args);
    }

    if (!this.onLanguageChange) {
      this.onLanguageChange = this.service.onLanguageChange.subscribe(() => {
        this.updateValue(this.lastKey, this.lastArgs);
      });
    }

    return this.value;
  }

  private updateValue(label: string, args?: string): void {
    this.value = this.service.translate(label, args);
  }

  ngOnDestroy(): void {
    if (this.onLanguageChange) {
      this.onLanguageChange.unsubscribe();
    }
  }


}
