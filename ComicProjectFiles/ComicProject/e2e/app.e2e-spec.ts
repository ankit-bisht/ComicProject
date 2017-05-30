import { OnlineComicsPage } from './app.po';

describe('online-comics App', () => {
  let page: OnlineComicsPage;

  beforeEach(() => {
    page = new OnlineComicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
