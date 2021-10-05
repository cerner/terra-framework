Terra.describeViewports('BrandFooter', ['tiny', 'large'], () => {
  it('should display default', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/default-brand-footer');
    Terra.validates.element('default');
  });

  it('should display links prop', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/links-prop-brand-footer');
    Terra.validates.element('links prop');
  });

  it('should display no nav', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/no-nav-brand-footer');
    Terra.validates.element('no nav');
  });

  it('should display section headers', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/section-header-brand-footer');
    Terra.validates.element('section headers');
  });

  it('should display vertical nav', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/vertical-nav-brand-footer');
    Terra.validates.element('vertical nav');
  });

  it('should display vertical mixed headers', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/vertical-mixed-headers-brand-footer');
    Terra.validates.element('vertical mixed headers');
  });

  it('should display horizontal wrap', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/horizontal-wrap-brand-footer');
    Terra.validates.element('horizontal wrap');
  });
});

// Medium exemplifies 3x2 layout and Large 4 in a row with 2 on the botton row
Terra.describeViewports('BrandFooter', ['medium', 'large'], () => {
  it('should display many sections', () => {
    browser.url('/raw/tests/cerner-terra-framework-docs/brand-footer/many-sections-brand-footer');
    Terra.validates.element('many sections');
  });
});
