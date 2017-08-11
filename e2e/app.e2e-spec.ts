import { UnoCardPage } from './app.po';

describe('uno-card App', () => {
  let page: UnoCardPage;

  beforeEach(() => {
    page = new UnoCardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
