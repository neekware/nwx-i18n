/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { Injectable, Output, EventEmitter } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import { get, merge } from 'lodash';
import { map, catchError, takeWhile } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { AppCfg, CfgService } from '@nwx/cfg';
import { LogService } from '@nwx/logger';

import { I18nCfg, LanguageDirection } from './i18n.types';
import { RtlLanguages, DefaultI18nCfg, DefaultLanguage } from './i18n.defaults';
import { registerActiveLocales } from './i18n.locales';
import { I18nModule } from './i18n.module';

@Injectable({
  providedIn: I18nModule
})
export class I18nService {
  options: AppCfg = null;
  currentLanguage = DefaultLanguage;
  defaultLanguage = DefaultLanguage;
  direction: string = LanguageDirection.ltr;
  availableLanguages: { [key: string]: any } = {};
  enabledLanguages: string[] = [];
  @Output() languageChange$ = new EventEmitter<string>();
  private _isDestroyed = false;

  constructor(
    public cfg: CfgService,
    public log: LogService,
    public xlate: TranslateService
  ) {
    this.options = merge({ i18n: DefaultI18nCfg }, cfg.options);
    this.initLanguage();
    log.debug(`I18nService ready ... (${this.currentLanguage} - ${this.direction})`);
  }

  isLanguageEnabled(iso: string): boolean {
    return this.enabledLanguages.indexOf(iso) > -1;
  }

  getLanguageDirection(iso: string): string {
    if (this.isLanguageRTL(iso)) {
      return LanguageDirection.rtl;
    }
    return LanguageDirection.ltr;
  }

  isLanguageRTL(iso: string): boolean {
    return RtlLanguages.indexOf(iso) > -1;
  }

  isCurrentLanguage(iso: string): boolean {
    return iso === this.xlate.currentLang;
  }

  getLanguageName(iso: string): string {
    return this.isLanguageEnabled(iso) ? this.availableLanguages[iso].name : null;
  }

  setCurrentLanguage(iso: string) {
    if (this.isLanguageEnabled(iso)) {
      this.xlate.use(iso);
    } else {
      this.log.debug(`I18nService - language not enabled ... (${this.currentLanguage})`);
    }
  }

  private initLanguage() {
    this.defaultLanguage = this.options.i18n.defaultLanguage;
    this.availableLanguages = this.options.i18n.availableLanguages;
    this.enabledLanguages = this.options.i18n.enabledLanguages;

    this.xlate.onLangChange.pipe(takeWhile(() => !this._isDestroyed)).subscribe(event => {
      this.currentLanguage = event.lang;
      this.direction = this.getLanguageDirection(event.lang);
      this.languageChange$.emit(event.lang);
      this.log.debug(`I18nService - language changed ... (${this.currentLanguage})`);
    });

    registerActiveLocales(
      this.options.i18n.availableLanguages,
      this.options.i18n.enabledLanguages
    );

    this.xlate.addLangs(Object.keys(this.options.i18n.enabledLanguages));
    this.xlate.setDefaultLang(this.defaultLanguage);
    let iso = this.xlate.getBrowserCultureLang().toLowerCase();
    if (!this.isLanguageEnabled(iso)) {
      iso = this.defaultLanguage;
    }
    this.setCurrentLanguage(iso);
  }
}
