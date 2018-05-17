import { Component } from '@angular/core';

import { CfgService, DefaultCfg } from '@nwx/cfg';
import { LogService } from '@nwx/logger';

import { I18nService } from 'pkgs/i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Neekware';
  options = {};
  constructor(public cfg: CfgService, public log: LogService, public i18n: I18nService) {
    this.title = this.cfg.options.appName;
    this.log.info('AppComponent loaded ...');
  }
}
