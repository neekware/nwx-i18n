/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { TestBed, inject } from '@angular/core/testing';

import { CfgModule } from '@nwx/cfg';
import { LogModule } from '@nwx/logger';

import { I18nModule } from '../src/i18n.module';
import { I18nService } from '../src/i18n.service';

describe('I18nService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CfgModule.forRoot(), LogModule.forRoot(), I18nModule.forRoot()]
    });
  });

  it(
    'should be created',
    inject([I18nService], (service: I18nService) => {
      expect(service).toBeTruthy();
    })
  );
});
