/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { I18nModule } from '../src/i18n.module';

describe('I18nModule', () => {
  let i18nModule: I18nModule;

  beforeEach(() => {
    i18nModule = new I18nModule(null);
  });

  it('should create an instance', () => {
    expect(i18nModule).toBeTruthy();
  });
});
