const selector = '#root';

Terra.describeViewports('NotificationBanner', ['small', 'large'], () => {
  it('validates notification banners', () => {
    browser.url('/#/raw/tests/terra-application/notification-banner/notification-banner');
    Terra.validates.element('validates notification banners', { selector });
  });
});
