/*
Terra.describeViewports('Toggle the slide panel and hidden styles', ['medium'], () => {
  it('toggles the slide panel and hidden styles', () => {
    browser.url('/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.refresh();
    $('[class*=_panel_][aria-hidden="true"]').waitForExist();
    Terra.validates.element('toggle slide panel', { selector: '#site' });
  });
});

describe('Toggle the slide panel click', () => {
  it('toggles the panel with click', () => {
    browser.url('/raw/tests/terra-layout/layout/layout-slide-panel-example');
    $('#test-toggle-1').click();
    $('[class*=_panel_][aria-hidden="false"]').waitForExist();
    Terra.validates.element('click', { selector: '#site' });
  });
});

describe('Toggle the slide panel double click', () => {
  it('toggles the slide panel with double click', () => {
    const toggleBtn1 = $('#test-toggle-1');
    browser.pause(150);
    const toggleBtn2 = $('#test-toggle-2');
    expect(toggleBtn2.isFocused()).toEqual(true);
    $('#test-toggle-2').click();
    $('[class*=_panel_][aria-hidden="true"]').waitForExist();
    expect(toggleBtn1.isFocused()).toEqual(true);
    Terra.validates.element('double click', { selector: '#site' });
  });
}); */
