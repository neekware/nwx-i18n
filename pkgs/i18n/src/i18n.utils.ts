/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';

import { TranslateLoader } from '@ngx-translate/core';

import { DefaultLanguage } from './i18n.defaults';

export const I18nTranslations = {
  de: {
    'COMMON.ABOUT': 'Über'
  },
  en: {
    'COMMON.ABOUT': 'About'
  },
  es: {
    'COMMON.ABOUT': 'Acerca de'
  },
  fa: {
    'COMMON.ABOUT': 'در باره'
  },
  fr: {
    'COMMON.ABOUT': 'Sur'
  },
  he: {
    'COMMON.ABOUT': 'על אודות'
  },
  'zh-cn': {
    'COMMON.ABOUT': '关于'
  }
};

export class I18nTranslationLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    const code = lang.toLocaleLowerCase();
    if (I18nTranslations.hasOwnProperty(lang)) {
      return observableOf(I18nTranslations[lang]);
    } else {
      const parts = code.split('-');
      if (parts.length === 2) {
        if (I18nTranslations.hasOwnProperty(parts[0])) {
          return observableOf(I18nTranslations[parts[0]]);
        }
      }
    }
    return observableOf(I18nTranslations[DefaultLanguage]);
  }
}
