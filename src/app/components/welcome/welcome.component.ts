import {Component, OnInit} from '@angular/core';
import {I18nService} from "../../shared/i18n/i18n.service";
import {StorageService} from "../../shared/services/storage.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  supportedLanguage: string[];
  loggedUserName: string | undefined;

  constructor(private i18nService: I18nService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.i18nService.init();
    this.supportedLanguage = this.i18nService.getLanguageList;
    this.loggedUserName = this.storageService.loadUser()?.firstName;
  }

  changeLanguage(lang: string) {
    this.i18nService.setCurrentLanguage(lang);
  }
}
