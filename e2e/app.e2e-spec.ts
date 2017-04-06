import { NgCollectionPage } from './app.po';

describe('ng-collection App', () => {
  let page: NgCollectionPage;

  beforeEach(() => {
    page = new NgCollectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
