const ignoredA11y = {
  'aria-required-parent': { enabled: false },
  'aria-required-children': { enabled: false },
};

Terra.describeViewports('Responsive', ['tiny', 'small', 'medium'], () => {
  it('should display responsive default', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/file-path/default-file-path');
    Terra.validates.element('responsive');
  });
});

// Only test viewports that have collapsed menu items
Terra.describeViewports('Responsive Hidden Open', ['tiny', 'small'], () => {
  it('should display responsive hidden open', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/file-path/default-file-path');
    browser.keys('Tab');
    browser.keys('Enter');
    Terra.validates.element('responsive hidden open', { selector: '#root', rules: ignoredA11y });
  });
});

Terra.describeViewports('On Click File Path', ['tiny', 'small'], () => {
  it('should display the on click file path', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/file-path/on-click-file-path');
    browser.keys('Tab');
    browser.keys('Enter');
    Terra.validates.element('on click', { selector: '#root', rules: ignoredA11y });
  });

  it('should change the display text when clicking on', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/file-path/on-click-file-path');
    browser.keys('Tab');
    Terra.validates.element('on click menu icon focused');
    browser.keys('Tab');
    Terra.validates.element('on click first displayed link focused');
    browser.keys('Enter');
    Terra.validates.element('on click first displayed link clicked', { selector: '#root', rules: ignoredA11y });
  });

  it('should display file path with clinical header', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/file-path/file-pathwith-clinical-header');
    browser.keys('Tab');
    Terra.validates.element('file path with header');
    browser.keys('Enter');
    Terra.validates.element('add file path with header', { selector: '#root', rules: ignoredA11y });
  });
});
