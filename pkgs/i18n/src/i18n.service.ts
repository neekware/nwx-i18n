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
import { map, catchError } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { AppCfg, CfgService } from '@nwx/cfg';
import { LogService } from '@nwx/logger';

import { I18nCfg, LanguageDirection } from './i18n.types';
import { RtlLanguages, DefaultI18nCfg } from './i18n.defaults';
import { registerActiveLocales } from './i18n.locales';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  public options: AppCfg = null;
  @Output() languageChange$ = new EventEmitter<string>();

  constructor(
    public cfg: CfgService,
    public log: LogService,
    public xlate: TranslateService
  ) {
    this.options = merge({ i18n: DefaultI18nCfg }, cfg.options);
    this.initLanguage();
    log.debug(`I18nService ready ... (${this.currentLanguage})`);
  }

  isLanguageEnabled(iso: string): boolean {
    return this.options.i18n.enabledLanguages.indexOf(iso) > -1;
  }

  getLanguageDirection(iso: string): string {
    if (this.isLanguageRTL(iso)) {
      return LanguageDirection.rtl;
    }
    return LanguageDirection.ltr;
  }

  get direction() {
    return this.getLanguageDirection(this.currentLanguage);
  }

  isLanguageRTL(iso: string): boolean {
    return RtlLanguages.indexOf(iso) > -1;
  }

  get defaultLanguage() {
    return this.options.i18n.defaultLanguage;
  }

  get currentLanguage() {
    return this.xlate.currentLang;
  }

  get enabledLanguages() {
    return this.options.i18n.enabledLanguages;
  }

  setCurrentLanguage(iso: string) {
    if (!this.isCurrentLanguage(iso)) {
      this.xlate.use(iso);
      this.languageChange$.emit(iso);
    }
  }

  isCurrentLanguage(iso: string): boolean {
    return iso === this.xlate.currentLang;
  }

  getLanguageName(iso: string): string {
    return this.isLanguageEnabled(iso)
      ? this.options.i18n.availableLanguages[iso].name
      : null;
  }

  private initLanguage() {
    registerActiveLocales(
      this.options.i18n.availableLanguages,
      this.options.i18n.enabledLanguages
    );
    let iso = this.options.i18n.defaultLanguage;
    this.xlate.setDefaultLang(iso);
    this.xlate.addLangs(Object.keys(this.options.i18n.enabledLanguages));

    const language = this.xlate.getBrowserCultureLang().toLowerCase();
    if (this.isLanguageEnabled(language)) {
      iso = language;
    }
    this.setCurrentLanguage(iso);
  }
}
