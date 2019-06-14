import DisclosureManager, {
  withDisclosureManager, // eslint-disable-line import/named
  disclosureManagerShape, // eslint-disable-line import/named
  DisclosureManagerContext, // eslint-disable-line import/named
  DisclosureManagerDelegate, // eslint-disable-line import/named
} from '../../../src/disclosure-manager';

describe('disclosure-manager/index', () => {
  it('should export DisclosureManager', () => {
    expect(DisclosureManager).toBeDefined();
  });

  it('should export withDisclosureManager', () => {
    expect(withDisclosureManager).toBeDefined();
  });

  it('should export disclosureManagerShape', () => {
    expect(disclosureManagerShape).toBeDefined();
  });

  it('should export DisclosureManagerContext', () => {
    expect(DisclosureManagerContext).toBeDefined();
  });

  it('should export DisclosureManagerDelegate', () => {
    expect(DisclosureManagerDelegate).toBeDefined();
  });
});
