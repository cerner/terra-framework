/* TODO Import this helper from terra-toolkit - https://github.com/cerner/terra-toolkit-boneyard/issues/397 */
const dispatchCustomEvent = (name, metaData) => {
  /* If IE support is removed, convert below to use event constructors. */
  // eslint-disable-next-line prefer-arrow-callback
  browser.execute(function dispatch(eventName, eventMetaData) {
    const event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
    event.metaData = eventMetaData;
    window.dispatchEvent(event);
  }, name, metaData);
};

Terra.describeViewports('TestOverrides', ['small'], () => {
  before(() => browser.url('/raw/tests/terra-application/application-base/private/test-overrides-test'));
  it('updates the locale of ApplicationBase from `en` to `pt` and theme to `terra-dev-site-test-theme` via custom event', () => {
    dispatchCustomEvent('applicationBase.testOverride', { locale: 'pt', theme: 'terra-dev-site-test-theme' });
    Terra.validates.element('test overrides', { selector: '#root' });
  });
});
