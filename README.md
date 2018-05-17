# @nwx/i18n

**A simple translation module for Angular applications**

[![status-image]][status-link]
[![version-image]][version-link]
[![coverage-image]][coverage-link]
[![download-image]][download-link]

# How to install

    npm i @nwx/i18n |OR| yarn add @nwx/i18n

# How to use

```typescript
// In your environment{prod,staging}.ts

import { AppCfg, TargetPlatform, HttpMethod } from '@nwx/cfg';
import { LogLevels } from '@nwx/logger';

export const environment: AppCfg = {
  // app name
  appName: 'Neekware',
  // target (browser, mobile, desktop)
  target: TargetPlatform.web,
  // production, staging or development
  production: false,
  // one or more app specific field(s)
  log: {
    // Log level, (default = none)
    level: LogLevels.info
  },
  i18n: {
    // available languages
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
      }
    },
    // enabled languages (iso list)
    enabledLanguages: [
      // order is important
      'en',
      'fr'
    ]
  }
};
```

```typescript
// In your app.module.ts

import { CfgModule } from '@nwx/cfg';
import { LoggerModule } from '@nwx/logger';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CfgModule.forRoot(environment), // make the environment injectable
    LoggerModule,
    I18nModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```typescript
// In your app.module.ts
import { Component } from '@angular/core';
import { CfgService, DefaultCfg } from '@nwx/cfg';
import { LogService } from '@nwx/logger';
import { I18nService } from '@nwx/i18n';

@Component({
  selector: 'app-root',
  template: `<h1>{{'COMMON.WELCOME' | translate}} to {{ title }}!</h1>`
})
export class AppComponent {
  title = 'Neekware';
  constructor(public cfg: CfgService, public log: LogService, public i18n: I18nService) {
    this.title = this.cfg.options.appName;
    this.log.info('AppComponent loaded ...');
  }
}
```

Include your translated files in the `/assets/i18n` directory of your application.

`/assets/i18n/en.json`

```json
{
  "COMMON.WELCOME": "Welcome",
  "COMMON.ABOUT": "About"
}
```

`/assets/i18n/fr.json`

```json
{
  "COMMON.WELCOME": "Bienvenue",
  "COMMON.ABOUT": "Sur"
}
```

# Advanced usage:

```typescript
// In your app.module.ts
import { Component } from '@angular/core';
import { CfgService, DefaultCfg } from '@nwx/cfg';
import { LogService } from '@nwx/logger';
import { I18nService } from '@nwx/i18n';

@Component({
  selector: 'app-root',
  template: `<h1>{{'COMMON.WELCOME' | translate}} to {{ title }}!</h1>`
})
export class AppComponent {
  direction = 'ltr';
  title = 'Neekware';
  constructor(public cfg: CfgService, public log: LogService, public i18n: I18nService) {
    this.title = this.cfg.options.appName;

    // translate in ts files
    i18n.xlate.get('COMMON.WELCOME').subscribe((res: string) => {
      this.log.info(res);
    });

    // check if language is Right2Left `rtl`
    if (i18n.isLanguageRTL('he')) {
      this.direction = 'rtl';
    }

    // change the language
    i18n.setCurrentLanguage('fr');

    // other available methods
    // currentLanguage()
    // defaultLanguage()
    // enabledLanguages()
    // isCurrentLanguage(iso)
    // getLanguageName(iso)
    // getLanguageDirection(iso)
    // isLanguageEnabled(iso)
  }
}
```

# Note:

1.  `@nwx/i18n` uses the great `@ngx-translate` package under the hood.

# Running the tests

To run the tests against the current environment:

    npm run ci

# License

Released under a ([MIT](https://github.com/neekware/nwx-i18n/blob/master/LICENSE)) license.

# Version

X.Y.Z Version

    `MAJOR` version -- making incompatible API changes
    `MINOR` version -- adding functionality in a backwards-compatible manner
    `PATCH` version -- making backwards-compatible bug fixes

[status-image]: https://secure.travis-ci.org/neekware/nwx-i18n.png?branch=master
[status-link]: http://travis-ci.org/neekware/nwx-i18n?branch=master
[version-image]: https://img.shields.io/npm/v/@nwx/i18n.svg
[version-link]: https://www.npmjs.com/package/@nwx/i18n
[coverage-image]: https://coveralls.io/repos/neekware/nwx-i18n/badge.svg
[coverage-link]: https://coveralls.io/r/neekware/nwx-i18n
[download-image]: https://img.shields.io/npm/dm/@nwx/i18n.svg
[download-link]: https://www.npmjs.com/package/@nwx/i18n
