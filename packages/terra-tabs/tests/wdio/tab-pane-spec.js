describe('TabPane', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

  describe('Text Only', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/text-only-tab-pane'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Icon Only', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/icon-only-tab-pane'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Icon and Text', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/icon-and-text-tab-pane'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Custom Display', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/custom-display-tab-pane'));
    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Long text', () => {
    before(() => browser.url('/#/raw/tests/terra-tabs/tabs/tab-pane/long-text-tab-pane'));
    Terra.it.matchesScreenshot({ selector: '#longText' });
    Terra.it.isAccessible();
  });
});
