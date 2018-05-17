import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';

import { CfgModule, AppCfg, CFG_OPTIONS } from '@nwx/cfg';

import { LogModule } from '@nwx/logger';

import { Observable, of as observableOf } from 'rxjs';
import {
  TranslateLoader,
  TranslateModule,
  TranslateFakeLoader
} from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { I18nModule } from 'pkgs/i18n';
import { I18nTranslations } from 'pkgs/i18n/src/i18n.utils';

const AppEnv: AppCfg = {
  appName: '@nwx/i18n',
  production: false
};

class CustomLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return observableOf(I18nTranslations[lang]);
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        CfgModule.forRoot(AppEnv),
        LogModule,
        I18nModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: CustomLoader }
        })
      ],
      providers: [{ provide: CFG_OPTIONS, useValue: AppEnv }],
      declarations: [AppComponent]
    }).compileComponents();
  }));
  it('should create the @nwx/i18n', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title '@nwx/i18n'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('@nwx/i18n');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to @nwx/i18n!');
  }));
});
