import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    setTimeout(() => {
      // allow translation pipe to get ready
      expect(page.getParagraphText()).toEqual('Welcome to @nwx/i18n!');
    }, 2000);
  });
});
