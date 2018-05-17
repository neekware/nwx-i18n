# @nwx/logger

**A simple logger module for Angular applications**

[![status-image]][status-link]
[![version-image]][version-link]
[![coverage-image]][coverage-link]
[![download-image]][download-link]

# How to install

    npm i @nwx/logger |OR| yarn add @nwx/logger

# How to use

```typescript
// In your environment{prod,staging}.ts

import { AppCfg, TargetPlatform, HttpMethod } from '@nwx/cfg';

import { LogLevels } from 'pkgs/logger';

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
  imports: [BrowserModule, CfgModule.forRoot(environment), LoggerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```typescript
// In your app.component.ts or (some.service.ts)

import { Component } from '@angular/core';
import { CfgService } from '@nwx/cfg';
import { LoggerService } from '@nwx/logger';

@Component({
  selector: 'app-root'
})
export class AppComponent {
  title = 'Neekware';
  options = {};
  constructor(public cfg: CfgService, public log: LogService) {
    this.title = this.cfg.options.appName;
    this.log.critical('Logging critical');
    this.log.error('Logging error and above');
    this.log.warn('Logging warn and above');
    this.log.info('Logging info and above');
    this.log.debug('Logging debug and above');
  }
}
```

# Note:

1. `@nwx/logger` depends on `@nwx/cfg` for accessing the log level.
2. You may want to set the log level to `LogLevels.debug` for development and `LogLevels.warn` for production.
3. `@nwx/logger` should be imported at the root level of your application.
4. To disable the logger, set the level to `LogLevels.none`.

# Sample logs
```
CfgService ready ...
2018-05-17T02:47:54.184Z [DEBUG] LogService ready ...
2018-05-17T02:47:54.188Z [DEBUG] GqlService ready ...
2018-05-17T02:47:54.375Z [DEBUG] I18nService ready ... (en)
2018-05-17T02:47:54.378Z [DEBUG] UixService ready ...
2018-05-17T02:47:54.379Z [DEBUG] JwtService ready ...
2018-05-17T02:47:54.384Z [DEBUG] Token expiry ... (21 seconds)
2018-05-17T02:47:54.388Z [DEBUG] AuthService ready ... (loggedIn)
2018-05-17T02:47:54.390Z [DEBUG] UsrService ready ...
2018-05-17T02:47:54.392Z [DEBUG] Web app starting now ...
2018-05-17T02:47:54.406Z [DEBUG] LayoutService ready ...
```

# Running the tests

To run the tests against the current environment:

    npm run ci

# License

Released under a ([MIT](https://github.com/neekware/nwx-logger/blob/master/LICENSE)) license.

# Version

X.Y.Z Version

    `MAJOR` version -- making incompatible API changes
    `MINOR` version -- adding functionality in a backwards-compatible manner
    `PATCH` version -- making backwards-compatible bug fixes

[status-image]: https://secure.travis-ci.org/neekware/nwx-logger.png?branch=master
[status-link]: http://travis-ci.org/neekware/nwx-logger?branch=master

[version-image]: https://img.shields.io/npm/v/@nwx/logger.svg
[version-link]: https://www.npmjs.com/package/@nwx/logger

[coverage-image]: https://coveralls.io/repos/neekware/nwx-logger/badge.svg
[coverage-link]: https://coveralls.io/r/neekware/nwx-logger

[download-image]: https://img.shields.io/npm/dm/@nwx/logger.svg
[download-link]: https://www.npmjs.com/package/@nwx/logger
