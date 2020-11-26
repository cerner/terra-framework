Terra.describeViewports('TabPane', ['tiny'], () => {
  it('displays with Text Only', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tab-pane/text-only-tab-pane');
    Terra.validates.element('text only');
  });

  it('displays with Icon Only', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tab-pane/icon-only-tab-pane');
    Terra.validates.element('icon only');
  });

  it('displays with Icon and Text', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tab-pane/icon-and-text-tab-pane');
    Terra.validates.element('icon and text');
  });

  it('displays with Custom Display', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tab-pane/custom-display-tab-pane');
    Terra.validates.element('custom display');
  });

  it('displays with Long text', () => {
    browser.url('/raw/tests/terra-tabs/tabs/tab-pane/long-text-tab-pane');
    Terra.validates.element('long text', { selector: '#longText' });
  });
});
