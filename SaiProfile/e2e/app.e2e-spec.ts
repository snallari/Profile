import { SaiProfilePage } from './app.po';

describe('sai-profile App', () => {
  let page: SaiProfilePage;

  beforeEach(() => {
    page = new SaiProfilePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
