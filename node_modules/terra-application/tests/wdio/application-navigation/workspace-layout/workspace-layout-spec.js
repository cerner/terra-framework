const selector = '#root';

Terra.describeViewports('Workspace Layout', ['large'], () => {
  describe('open state', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/private/workspace-layout/workspace-layout-open-test'));

    it('initialIsOpen true', () => {
      Terra.validates.element('1. loads with workspace open', { selector });
    });

    it('closes with toggle action', () => {
      $('#test-action-id-0').click();

      Terra.validates.element('2. workspace closed', { selector });
    });
  });

  describe('close state', () => {
    before(() => browser.url('/raw/tests/terra-application/application-navigation/private/workspace-layout/workspace-layout-closed-test'));

    it('initialIsOpen false', () => {
      Terra.validates.element('1. loads with workspace closed', { selector });
    });

    it('opens with toggle action', () => {
      $('#test-action-id-0').click();
      $('#test-workspace-0').waitForDisplayed();

      Terra.validates.element('2. workspace open', { selector });
    });
  });
});
