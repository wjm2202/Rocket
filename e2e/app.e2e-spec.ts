import { RocketPage } from './app.po';

describe('rocket App', () => {
  let page: RocketPage;

  beforeEach(() => {
    page = new RocketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
