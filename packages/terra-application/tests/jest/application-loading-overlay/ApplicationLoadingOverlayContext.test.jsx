import ApplicationLoadingOverlayContext from '../../../src/application-loading-overlay/ApplicationLoadingOverlayContext';

describe('ApplicationLoadingOverlayContext', () => {
  it('export the created context', () => {
    expect(ApplicationLoadingOverlayContext).toBeDefined();
    expect(ApplicationLoadingOverlayContext.Provider).toBeDefined();
    expect(ApplicationLoadingOverlayContext.Consumer).toBeDefined();
  });
});
