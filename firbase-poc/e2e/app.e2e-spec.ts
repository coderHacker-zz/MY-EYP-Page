import { EmergencyaidPage } from './app.po';

describe('emergencyaid App', () => {
  let page: EmergencyaidPage;

  beforeEach(() => {
    page = new EmergencyaidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
