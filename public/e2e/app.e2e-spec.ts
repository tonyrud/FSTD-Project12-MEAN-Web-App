import { MeanHikingAppPage } from './app.po';

describe('mean-hiking-app App', () => {
  let page: MeanHikingAppPage;

  beforeEach(() => {
    page = new MeanHikingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
