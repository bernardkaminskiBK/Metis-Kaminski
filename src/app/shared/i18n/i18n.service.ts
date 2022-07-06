import {EventEmitter, Injectable} from "@angular/core";
import dictionary from "./localLanguageDatabase";

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private currentLanguage: string;
  private dictionary: any;
  private appDefaultLanguage: string;
  private _onLanguageChange = new EventEmitter<any>();

  get onLanguageChange(): EventEmitter<any> {
    return this._onLanguageChange;
  }

  get getLanguageList(): any[] {
    return Object.keys(dictionary);
  }

  init(lang?: string): void {
    this.getUserLang();
    if (lang) {
      this.setCurrentLanguage(lang);
    } else {
      this.downloadDictionary(this.currentLanguage);
    }
  }

  translate(label: any, args?: string): string {
    if (this.dictionary && label) {
      if (this.dictionary[label]) {
        if (args) {
          return this.dictionary[label].replace('{0}', args);
        }
        return this.dictionary[label].replace('{0}', ' ');
      }
    }
    return label;
  }

  setCurrentLanguage(lang: any): void {
    this.currentLanguage = lang;
    this.downloadDictionary(lang);

    this.saveSettings();
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  private downloadDictionary(languageCode: string) {
    if (languageCode) {
      this.dictionary = dictionary[languageCode];
    }

    this.onLanguageChange.emit(languageCode);
  }

  private getUserLang() {
    if (!this.appDefaultLanguage) {
      this.appDefaultLanguage = this.getBrowserData();
      this.currentLanguage = this.appDefaultLanguage;
      this.saveSettings();
    }
  }

  private getBrowserData(): string {
    let browserDefaultLang: string = '';
    if (navigator.language) {
      browserDefaultLang = navigator.language;
    }

    return browserDefaultLang ? browserDefaultLang : 'sk-SK';
  }

  private loadSettings() {
    //TODO: todo...
  }

  private saveSettings() {
    //TODO: todo...
  }

}
