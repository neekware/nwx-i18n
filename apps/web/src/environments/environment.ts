import { AppCfg, TargetPlatform, HttpMethod } from '@nwx/cfg';
import { LogLevels } from '@nwx/logger';

export const environment: AppCfg = {
  // app name
  appName: '@nwx/i18n',
  // target (browser, mobile, desktop)
  target: TargetPlatform.web,
  // production, staging or development
  production: false,
  log: {
    // log level (application-wide)
    level: LogLevels.debug
  },
  //
  i18n: {
    availableLanguages: {
      en: {
        name: 'English',
        locale: '@angular/common/locales/en',
        localeExtra: '@angular/common/locales/extra/en'
      },
      fr: {
        name: 'Français',
        locale: '@angular/common/locales/fr',
        localeExtra: '@angular/common/locales/extra/fr'
      },
      de: {
        name: 'Deutsch',
        locale: '@angular/common/locales/de',
        localeExtra: '@angular/common/locales/extra/de'
      },
      es: {
        name: 'Español',
        locale: '@angular/common/locales/es',
        localeExtra: '@angular/common/locales/extra/es'
      },
      he: {
        name: 'עִברִית',
        locale: '@angular/common/locales/he',
        localeExtra: '@angular/common/locales/extra/he'
      },
      fa: {
        name: 'پارسی',
        locale: '@angular/common/locales/fa',
        localeExtra: '@angular/common/locales/extra/fa'
      },
      'zh-cn': {
        name: '中文 - 简体',
        locale: '@angular/common/locales/zh-Hans',
        localeExtra: '@angular/common/locales/extra/zh-Hans'
      }
    },
    enabledLanguages: [
      // order is important
      'en',
      'fr',
      'zh-cn',
      'de',
      'es',
      'he',
      'fa'
    ],
    cacheBustingHash: '22'
  }
};
