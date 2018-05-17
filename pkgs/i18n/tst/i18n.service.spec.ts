/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { TestBed, inject } from '@angular/core/testing';

import { Observable, of as observableOf } from 'rxjs';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { CfgModule } from '@nwx/cfg';
import { LogModule } from '@nwx/logger';

import { I18nModule } from '../src/i18n.module';
import { I18nService } from '../src/i18n.service';
import { I18nTranslations } from '../src/i18n.utils';

class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return observableOf(I18nTranslations[lang]);
  }
}

describe('I18nService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CfgModule.forRoot(),
        LogModule,
        I18nModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: CustomLoader }
        })
      ]
    });
  });

  it(
    'should be created',
    inject([I18nService, TranslateService], (service: I18nService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should translate to English',
    inject([I18nService, TranslateService], (service: I18nService) => {
      service.xlate.get('COMMON.WELCOME').subscribe((res: string) => {
        expect(res).toEqual('Welcome');
      });
    })
  );

  it(
    'should translate to French',
    inject([I18nService, TranslateService], (service: I18nService) => {
      service.setCurrentLanguage('fr');
      service.xlate.get('COMMON.WELCOME').subscribe((res: string) => {
        expect(res).toEqual('Bienvenue');
      });
    })
  );

  it(
    'should detect Rigth to Left',
    inject([I18nService, TranslateService], (service: I18nService) => {
      service.setCurrentLanguage('fa');
      service.xlate.get('COMMON.WELCOME').subscribe((res: string) => {
        expect(res).toEqual('خوش آمدی');
      });
      expect(service.isLanguageRTL('fa')).toEqual(true);
    })
  );
});
