import helpers from '../../src/utils/helpers';

describe('helpers', () => {
  describe('isSizeCompact', () => {
    it('returns true when size is tiny', () => {
      expect(helpers.isSizeCompact('tiny')).toBeTruthy();
    });

    it('returns true when size is small', () => {
      expect(helpers.isSizeCompact('small')).toBeTruthy();
    });

    it('returns false when size is not tiny or small', () => {
      expect(helpers.isSizeCompact('medium')).toBeFalsy();
      expect(helpers.isSizeCompact('large')).toBeFalsy();
      expect(helpers.isSizeCompact('huge')).toBeFalsy();
      expect(helpers.isSizeCompact('potato')).toBeFalsy();
    });
  });
});
