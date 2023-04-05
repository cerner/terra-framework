const selector = '#root';

Terra.describeViewports('Workspace Overlay', ['huge'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-application/workspace/overlay-workspace');
    browser.execute('document.title = "Test Title";');
  });

  it('renders as expected with overlay styles', () => {
    Terra.validates.element('1. renders with overlay styles', { selector });
  });
});
