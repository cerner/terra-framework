const ignoredA11y = {
  'aria-roles': { enabled: false },
};

Terra.describeViewports('Pills', ['medium'], () => {
  describe('Single Selectable Removable Pills', () => {
    it('display a selectable-pill', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/single-selectable-removable-filter-pill');
      Terra.validates.element('truncated', { rules: ignoredA11y });
    });

    it('focus the pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus the pill', { rules: ignoredA11y });
    });

    it('open popup', () => {
      browser.keys('Enter');
      Terra.validates.element('popup open', { selector: '#root' });
    });

    it('validates pop up open on clicking pill', () => {
      browser.keys('Escape');
      $('#terra-filter-pills-selectable-removable-pill-asthma').click();
      Terra.validates.element('popup open mouse click', { selector: '#root' });
    });
  });

  describe('Single Removable Pills', () => {
    it('display single removable pill', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/single-removable-filter-pill');
      Terra.validates.element('removable', { rules: ignoredA11y });
    });

    it('should focus the pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus pill', { rules: ignoredA11y });
    });
  });
});

Terra.describeViewports('Pills', ['large'], () => {
  describe('Removable Pills', () => {
    it('should render removable pills', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/removable-filter-pills');
      Terra.validates.element('removable pills', { rules: ignoredA11y });
    });

    it('should focus the first removable-pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus first removable-pill', { rules: ignoredA11y });
    });

    it('should focus the second removable-pill', () => {
      browser.keys('ArrowRight');
      Terra.validates.element('focus second removable-pill', { rules: ignoredA11y });
    });

    it('should delete second pill and focus the first pill', () => {
      browser.keys('Delete');
      Terra.validates.element('delete second removable-pill', { rules: ignoredA11y }); // lp052179
    });
  });

  describe('Selectable Pills', () => {
    it('should render Selectable pills', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/selectable-removable-filter-pills');
      Terra.validates.element('selectable pills', { rules: ignoredA11y });
    });

    it('should focus the first selectable-pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus first selectable-pill', { rules: ignoredA11y });
    });

    it('should focus the second selectable-pill', () => {
      browser.keys('ArrowRight');
      Terra.validates.element('focus second selectable-pill', { rules: ignoredA11y });
    });

    it('should open pop up', () => {
      browser.keys('Enter');
      Terra.validates.element('popup open second selectable-pill', { rules: ignoredA11y, selector: '#root' });
    });

    let viewportSize;
    describe('Collapsible Pills', () => {
      before(() => {
        viewportSize = browser.getWindowSize();
      });

      it('should render Collapsible pills', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/collapsible-filter-pills');
        Terra.validates.element('collapsible pills', { rules: ignoredA11y, selector: '#root' });
      });

      it('should collapse more pills after resizing the window', () => {
        browser.setWindowSize(viewportSize.width - 400, 1000);
        Terra.validates.element('collapsed pills afeter resize', { rules: ignoredA11y, selector: '#root' });
      });

      it('should collapse all collapsible-pills', () => {
        browser.keys(['Tab', 'ArrowRight', 'ArrowRight', 'Enter']);
        Terra.validates.element('collapse all pills', { rules: ignoredA11y, selector: '#root' });
      });

      it('should hide all collapsible-pills', () => {
        browser.keys(['ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'Enter']);
        Terra.validates.element('hide all pills', { rules: ignoredA11y, selector: '#root' });
      });

      it('deleting a pill should update the collapsed pill count', () => {
        browser.keys(['ArrowLeft', 'Delete']);
        Terra.validates.element('collapsed pills count after delete', { rules: ignoredA11y, selector: '#root' });
      });
    });
  });
});
