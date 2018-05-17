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
    'APP.HEADLINE': 'Finanzmarktforschungsportal',
    'COMMON.ABOUT': 'Über',
    'COMMON.ACCOUNT': 'Konto',
    'COMMON.ADMIN': 'Administrator',
    'COMMON.ANALYZE': 'Analysieren',
    'COMMON.BONDS': 'Fesseln',
    'COMMON.CONTACT': 'Kontakt',
    'COMMON.DARK': 'Dunkles Thema',
    'COMMON.EMAIL': 'Email'
  },
  en: {
    'APP.HEADLINE': 'Financial Market Research Portal',
    'COMMON.ABOUT': 'About',
    'COMMON.ACCOUNT': 'Account',
    'COMMON.ADMIN': 'Admin',
    'COMMON.ANALYZE': 'Analyze',
    'COMMON.BONDS': 'Bonds',
    'COMMON.CONTACT': 'Contact',
    'COMMON.DARK': 'Dark Theme',
    'COMMON.EMAIL': 'Email'
  },
  es: {
    'APP.HEADLINE': 'Portal de investigación del mercado financiero',
    'COMMON.ABOUT': 'Acerca de',
    'COMMON.ACCOUNT': 'Cuenta',
    'COMMON.ADMIN': 'Administración',
    'COMMON.ANALYZE': 'Analizar',
    'COMMON.BONDS': 'Cautiverio',
    'COMMON.CONTACT': 'Contacto',
    'COMMON.DARK': 'Tema oscuro',
    'COMMON.EMAIL': 'Email'
  },
  fa: {
    'APP.HEADLINE': 'پورتال تحقیقات بازار مالی',
    'COMMON.ABOUT': 'در باره',
    'COMMON.ACCOUNT': 'حساب',
    'COMMON.ADMIN': 'مدیر',
    'COMMON.ANALYZE': 'تجزیه و تحلیل',
    'COMMON.BONDS': 'اوراق قرضه',
    'COMMON.CONTACT': 'تماس',
    'COMMON.DARK': 'تم تاریک',
    'COMMON.EMAIL': 'پست الکترونیک'
  },
  fr: {
    'APP.HEADLINE': 'Portail de recherche sur les marchés financiers',
    'COMMON.ABOUT': 'Sur',
    'COMMON.ACCOUNT': 'Compte',
    'COMMON.ADMIN': 'Admin',
    'COMMON.ANALYZE': 'Analyser',
    'COMMON.BONDS': 'Obligations',
    'COMMON.CONTACT': 'Contact',
    'COMMON.DARK': 'Thème sombre',
    'COMMON.EMAIL': 'Email'
  },
  he: {
    'APP.HEADLINE': 'פורטל שוק ההון',
    'COMMON.ABOUT': 'על אודות',
    'COMMON.ACCOUNT': 'חֶשְׁבּוֹן',
    'COMMON.ADMIN': 'מנהל מערכת',
    'COMMON.ANALYZE': 'לְנַתֵחַ',
    'COMMON.BONDS': 'קשרים',
    'COMMON.CONTACT': 'איש קשר',
    'COMMON.DARK': 'ערכת נושא כהה',
    'COMMON.EMAIL': 'אֶלֶקטרוֹנִי'
  },
  'zh-cn': {
    'APP.HEADLINE': '金融市场研究门户',
    'COMMON.ABOUT': '关于',
    'COMMON.ACCOUNT': '帐户',
    'COMMON.ADMIN': '管理员',
    'COMMON.ANALYZE': '分析',
    'COMMON.BONDS': '债券',
    'COMMON.CONTACT': '联系',
    'COMMON.DARK': '黑暗的主题',
    'COMMON.EMAIL': '电子邮件'
  }
};

export class I18nMockTranslationLoader implements TranslateLoader {
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
