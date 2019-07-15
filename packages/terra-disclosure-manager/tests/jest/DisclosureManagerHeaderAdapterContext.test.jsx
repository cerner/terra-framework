import DisclosureManagerHeaderAdapterContext from '../../src/DisclosureManagerHeaderAdapterContext';

describe('DisclosureManagerHeaderAdapterContext', () => {
  it('should export a Context object', () => {
    expect(DisclosureManagerHeaderAdapterContext.Provider).toBeDefined();
    expect(DisclosureManagerHeaderAdapterContext.Consumer).toBeDefined();
  });
});
