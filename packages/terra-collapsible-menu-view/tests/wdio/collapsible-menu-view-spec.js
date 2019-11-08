Terra.describeViewports('Responsive', ['tiny', 'small', 'medium', 'huge', 'large', 'enormous'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
  });

  Terra.it.matchesScreenshot();
  Terra.it.isAccessible();
});

Terra.describeViewports('Responsive - Utility More Button', ['tiny', 'small', 'medium', 'huge', 'large', 'enormous'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/collapsible-menu-view-utility-more-button');
  });

  Terra.it.validatesElement();
});

// Only test viewports that have collapsed menu items
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small', 'medium', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
    browser.click('[data-collapsible-menu-toggle]');
  });

  Terra.it.matchesScreenshot({ selector: '#root' });
  Terra.it.isAccessible();
});

Terra.describeViewports('Collapsible Menu With Item Before Divider', ['tiny', 'small', 'medium', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/default-collapsible-menu-view');
    browser.click('[data-collapsible-menu-toggle]');
  });

  Terra.it.matchesScreenshot({ selector: '[data-terra-popup-content]' });
  Terra.it.isAccessible();
});

Terra.describeViewports('First hidden item visible when isIconOnly', ['medium'], () => {
  before(() => browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/first-hidden-item-is-icon'));

  Terra.it.matchesScreenshot();
  Terra.it.isAccessible();
});

Terra.describeViewports('Responsive Single Item', ['tiny', 'large'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/collapsible-menu-view-single-item');
    browser.moveToObject('#root', 0, 0);
  });

  Terra.describeViewports('Single Item Group', ['enormous', 'large', 'huge', 'medium'], () => {
    before(() => {
      browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/single-item-group');
    });

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  Terra.describeViewports('Single Item Group Hidden Open', ['tiny', 'small'], () => {
    before(() => {
      browser.url('/#/raw/tests/terra-collapsible-menu-view/collapsible-menu-view/single-item-group');
      browser.click('[data-collapsible-menu-toggle]');
    });

    Terra.it.matchesScreenshot({ selector: '#root' });
    Terra.it.isAccessible();
  });
  Terra.it.matchesScreenshot({ selector: '#root' });
  Terra.it.isAccessible();
});
