import { Component } from '@angular/core';

import { CfgService, DefaultCfg } from '@nwx/cfg';
import { LogService } from '@nwx/logger';

import { I18nService } from 'pkgs/i18n';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
})
export class LazyComponent {
  title = 'Lazy';
  options = {};
  constructor(public cfg: CfgService, public log: LogService, public i18n: I18nService) {
    this.log.info('LazyComponent loaded ...');
  }
}
