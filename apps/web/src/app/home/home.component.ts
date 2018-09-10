import { Component } from '@angular/core';

import { CfgService, DefaultCfg } from '@nwx/cfg';
import { LogService } from '@nwx/logger';

import { I18nService } from 'pkgs/i18n';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'home';
  options = {};
  constructor(public cfg: CfgService, public log: LogService, public i18n: I18nService) {
    this.title = cfg.options.appName;
    this.log.info('HomeComponent loaded ...');
  }
}
