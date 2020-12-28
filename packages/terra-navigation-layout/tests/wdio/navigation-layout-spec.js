/* global $ */
const selector = '#test-root';

Terra.describeViewports('Navigation Layout', ['tiny', 'small', 'medium', 'large', 'huge'], () => {
  it('Displays a basic NavigationLayout', () => {
    browser.url('/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-basic');
    Terra.validates.element('basic', { selector });
  });

  it('Displays a complex NavigationLayout - page 1', () => {
    browser.url('/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
    $('#test-root .page-1-link').click();
    Terra.validates.element('complex - page 1', { selector });
  });

  it('Displays a complex NavigationLayout - page 2', () => {
    browser.url('/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
    $('#test-root .page-2-link').click();
    Terra.validates.element('complex - page 2', { selector });
  });

  it('Displays a complex NavigationLayout - page 3', () => {
    browser.url('/raw/tests/terra-navigation-layout/navigation-layout/navigation-layout-complex');
    $('#test-root .page-3-link').click();
    Terra.validates.element('complex - page 3', { selector });
  });
});
