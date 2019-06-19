/* globals $ */
Terra.describeViewports('Toggle the slide panel and hidden styles', ['medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
  });

  Terra.it.matchesScreenshot({ selector: '#site' });
});

describe('Toggle the slide panel click', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-layout/layout/layout-slide-panel-example');
    browser.click('#test-toggle-1');
    browser.waitForExist('[class*=_panel_][aria-hidden="false"]');
  });

  Terra.it.matchesScreenshot({ selector: '#site' });
});

describe('Toggle the slide panel double click', () => {
  before(() => {
    const toggleBtn1 = $('#test-toggle-1');
    browser.pause(150);
    const toggleBtn2 = $('#test-toggle-2');
    expect(toggleBtn2.hasFocus()).to.be.equal(true);
    browser.click('#test-toggle-2');
    browser.waitForExist('[class*=_panel_][aria-hidden="true"]');
    expect(toggleBtn1.hasFocus()).to.be.equal(true);
  });

  Terra.it.matchesScreenshot({ selector: '#site' });
});
