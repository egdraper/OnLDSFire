import { OnLDSFirePage } from './app.po';

describe('on-ldsfire App', function() {
  let page: OnLDSFirePage;

  beforeEach(() => {
    page = new OnLDSFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
