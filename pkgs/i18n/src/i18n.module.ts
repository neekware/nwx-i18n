/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { get, merge } from 'lodash';
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CfgService } from '@nwx/cfg';

import { I18nService } from './i18n.service';

export function HttpLoaderFactory(http: HttpClient, cfg: CfgService) {
  const cache = get(cfg.options.i18n, 'cacheBustingHash');
  return new TranslateHttpLoader(http, '/assets/i18n/', `.json?hash=${cache}`);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient, CfgService]
      }
    })
  ],
  exports: [TranslatePipe, TranslateDirective]
})
export class I18nModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: I18nModule
  ) {
    if (parentModule) {
      throw new Error('I18nModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: I18nModule,
      providers: [I18nService, TranslateService]
    };
  }
}
