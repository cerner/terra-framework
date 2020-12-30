/* global $ */
Terra.describeViewports('Embedded Content Provider Test Template', ['huge'], () => {
  it('has mounted and overridden the body height of 100%', () => {
    browser.url('/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider');
    const bodyHeight = $('body').getSize('height');
    const viewportHeight = browser.getWindowSize('height');

    expect(bodyHeight).not.toEqual(viewportHeight);
  });
});
