import { BetterListPage } from './app.po';

describe('better-list App', () => {
  let page: BetterListPage;

  beforeEach(() => {
    page = new BetterListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
