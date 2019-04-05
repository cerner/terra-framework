describe('Embedded Content Provider Test Template', () => {
  before(() => {
    browser.url('#/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider');
  });

  it('has mounted and overriden the body height of 100%', () => {
    const bodyHeight = browser.getElementSize('body', 'height');
    const viewportHeight = browser.getViewportSize('height');

    expect(bodyHeight).not.to.equal(viewportHeight);
  });
});
