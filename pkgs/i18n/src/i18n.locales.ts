/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { registerLocaleData } from '@angular/common';

import { LanguageInfo } from './i18n.types';

export function registerActiveLocales(
  avialableLanguages: LanguageInfo,
  enabledLanguages: string[]
) {
  for (const lang of enabledLanguages) {
    const { name, locale, localeExtra } = avialableLanguages[lang];
    registerLocaleData(locale, localeExtra);
  }
}
