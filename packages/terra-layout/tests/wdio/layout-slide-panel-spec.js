/* globals $ */
Terra.describeViewports('Toggle the slide panel and hidden styles', ['medium'], () => {
  it('Toggles the slide panel and hidden styles', () => {
    browser.url('/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
    Terra.validates.element('default', { selector: '#site' });
  });
});

describe('Toggle the slide panel click', () => {
  it('Toggles the slide panel click', () => {
    browser.url('/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.click('#test-toggle-1');
    browser.waitForExist('[class*=_panel_][aria-hidden="false"]');
    Terra.validates.element('toggle click', { selector: '#site' });
  });
});

describe('Toggle the slide panel double click', () => {
  it('Toggles the slide panel double click', () => {
    const toggleBtn1 = $('#test-toggle-1');
    browser.pause(150);
    const toggleBtn2 = $('#test-toggle-2');
    expect(toggleBtn2.hasFocus()).to.be.equal(true);
    browser.click('#test-toggle-2');
    browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
    expect(toggleBtn1.hasFocus()).to.be.equal(true);
    Terra.validates.element('toggle double click', { selector: '#site' });
  });
});
