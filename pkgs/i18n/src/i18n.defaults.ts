/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { I18nCfg } from './i18n.types';

// https://meta.wikimedia.org/wiki/Template:List_of_language_names_ordered_by_code
export const RtlLanguages: string[] = [
  'ar',
  'fa',
  'he',
  'arc',
  'dv',
  'ha',
  'khw',
  'ks',
  'ku',
  'ps',
  'ur',
  'yi'
];

export const DefaultLanguage = 'en';

/**
 * Default configuration - i18n module
 */
export const DefaultI18nCfg: I18nCfg = {
  defaultLanguage: DefaultLanguage,
  availableLanguages: {
    en: {
      name: 'English',
      locale: '@angular/common/locales/en',
      localeExtra: '@angular/common/locales/extra/en'
    }
  },
  enabledLanguages: ['en']
};
