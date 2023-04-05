Terra.describeViewports('ApplicationStatusOverlay', ['large'], () => {
  describe('Status View', () => {
    it('should render a status overlay with all props', () => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-all-props');

      Terra.validates.element('all props', { selector: '#root' });
    });
  });

  describe('Status View variant', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-variant');
    });

    it('should render the initial view', () => {
      Terra.validates.element('initial', { selector: '#root' });
    });

    it('should render with no-data variant', () => {
      $('#no-data-button').click();

      Terra.validates.element('no-data', { selector: '#root' });
    });

    it('should render with error variant', () => {
      $('#reset-button').click();
      $('#error-button').click();

      Terra.validates.element('error', { selector: '#root' });
    });

    it('should render with no-matching-results variant', () => {
      $('#reset-button').click();
      $('#no-matching-results-button').click();

      Terra.validates.element('no-matching-results', { selector: '#root' });
    });

    it('should render with not-authorized variant', () => {
      $('#reset-button').click();
      $('#not-authorized-button').click();

      Terra.validates.element('not-authorized', { selector: '#root' });
    });

    it('should make background elements inert when status view is overlaid', () => {
      $('#reset-button').click();
      $('#error-button').click();
      expect(['', 'true']).toContain($('#test-status-view-container > [data-status-overlay-container-content="true"]').getAttribute('inert')); // chrome returns true, firefox returns ''
      expect($('#test-status-view-container > [data-status-overlay-container-content="true"]').getAttribute('aria-hidden')).toEqual('true');
    });

    it('should enable interaction of background elements once status view is removed', () => {
      $('#reset-button').click();
      expect([null, 'false']).toContain($('#test-status-view-container > [data-status-overlay-container-content="true"]').getAttribute('inert')); // chrome returns false, firefox returns null
      expect($('#test-status-view-container > [data-status-overlay-container-content="true"]').getAttribute('aria-hidden')).toEqual(null);
    });
  });

  describe('Status View registration order', () => {
    before(() => {
      browser.url('/raw/tests/terra-application/application-status-overlay/status-overlay-priority');
    });

    it('should render with last registered status view', () => {
      $('#show-status').click();

      Terra.validates.element('last registered status view', { selector: '#root' });
    });

    it('should render with same last registered status view even after updates to other status views', () => {
      $('#button1').click();
      $('#button2').click();

      Terra.validates.element('other status view updates', { selector: '#root' });
    });

    it('should render with updated last registered status view', () => {
      $('#button3').click();

      Terra.validates.element('updated last registered status view', { selector: '#root' });
    });
  });
});
