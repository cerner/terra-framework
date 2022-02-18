Terra.describeViewports('Pills', ['medium'], () => {
  describe('Single Selectable Removable Pills', () => {
    it('displays a selectable-pill', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/single-selectable-removable-filter-pill');
      Terra.validates.element('truncated');
    });

    it('focuses on the pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus the pill');
    });

    it('opens popup', () => {
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
    it('display a single removable pill', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/single-removable-filter-pill');
      Terra.validates.element('removable');
    });

    it('focus on the pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus pill');
    });
  });
});

Terra.describeViewports('Pills', ['large'], () => {
  describe('Removable Pills', () => {
    it('should render removable pills', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/removable-filter-pills');
      Terra.validates.element('removable pills');
    });

    it('should set focus to the first removable-pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus first removable-pill');
    });

    it('should set focus to the second removable-pill', () => {
      browser.keys('ArrowRight');
      Terra.validates.element('focus second removable-pill');
    });

    it('should delete the second pill and set focus on the first pill', () => {
      browser.keys('Delete');
      Terra.validates.element('delete second removable-pill');
    });
  });

  describe('Selectable Pills', () => {
    it('should render Selectable pills', () => {
      browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/selectable-removable-filter-pills');
      Terra.validates.element('selectable pills');
    });

    it('should set focus to the first selectable-pill', () => {
      browser.keys('Tab');
      Terra.validates.element('focus first selectable-pill');
    });

    it('should set focus to the second selectable-pill', () => {
      browser.keys('ArrowRight');
      Terra.validates.element('focus second selectable-pill');
    });

    it('should open pop up', () => {
      browser.keys('Enter');
      Terra.validates.element('popup open second selectable-pill', { selector: '#root' });
    });

    let viewportSize;
    describe('Collapsible Pills', () => {
      before(() => {
        viewportSize = browser.getWindowSize();
      });

      it('should render Collapsible pills', () => {
        browser.url('/raw/tests/cerner-terra-framework-docs/pills/filter-pills/collapsible-filter-pills');
        Terra.validates.element('collapsible pills', { selector: '#root' });
      });

      it('should collapse more pills after resizing the window', () => {
        browser.setWindowSize(viewportSize.width - 400, 1000);
        Terra.validates.element('collapsed pills afeter resize', { selector: '#root' });
      });

      it('should collapse all collapsible-pills', () => {
        browser.keys(['Tab', 'ArrowRight', 'Enter']);
        Terra.validates.element('collapse all pills', { selector: '#root' });
      });

      it('should hide all collapsible-pills', () => {
        browser.keys(['ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'ArrowRight', 'Enter']);
        Terra.validates.element('hide all pills', { selector: '#root' });
      });

      it('deleting a pill should update the collapsed pill count', () => {
        browser.keys(['ArrowLeft', 'Delete']);
        Terra.validates.element('collapsed pills count after delete', { selector: '#root' });
      });
    });
  });
});
