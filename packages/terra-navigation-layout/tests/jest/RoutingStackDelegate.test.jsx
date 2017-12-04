import RoutingStackDelegate from '../../src/RoutingStackDelegate';

describe('RoutingStackDelegate', () => {
  describe('create', () => {
    it('should create a RoutingStackDelegate', () => {
      const testData = {
        location: { pathname: '/4' },
        parentPaths: ['/1', '/2', '/3'],
        showParent: () => {},
        showRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const result = RoutingStackDelegate.create(testData);
      expect(result.location).toBe(testData.location);
      expect(result.parentPaths).toBe(testData.parentPaths);
      expect(result.showParent).toBe(testData.showParent);
      expect(result.showRoot).toBe(testData.showRoot);
      expect(result.invalidKeyForTest).toBe(undefined);
    });
  });

  describe('isEqual', () => {
    it('should return false if either given delegate is falsey', () => {
      const testDelegate = RoutingStackDelegate.create();
      expect(RoutingStackDelegate.isEqual(testDelegate, undefined)).toBe(false);
      expect(RoutingStackDelegate.isEqual(undefined, testDelegate)).toBe(false);
    });

    it('should return true if both params are falsy', () => {
      expect(RoutingStackDelegate.isEqual(undefined, undefined)).toBe(true);
    });

    it('should return true if the same instance is given', () => {
      const testDelegate = RoutingStackDelegate.create();
      expect(RoutingStackDelegate.isEqual(testDelegate, testDelegate)).toBe(true);
    });

    it('should compare the given instances', () => {
      const location = { pathname: '/4' };
      const parentPaths = ['/1', '/2', '/3'];
      const showParent = () => {};
      const showRoot = () => {};

      const delegate1Data = {
        location,
        parentPaths,
        showParent,
        showRoot,
        invalidKeyForTest: 'test invalidKey',
      };
      const delegate1 = RoutingStackDelegate.create(delegate1Data);

      const delegate2Data = {
        location,
        stackLocation: 'test stackLocation',
        parentPaths,
        showParent,
        showRoot,
        differentInvalidKeyForTest: 'test another invalidKey',
      };
      const delegate2 = RoutingStackDelegate.create(delegate2Data);

      expect(RoutingStackDelegate.isEqual(delegate1, delegate2)).toBe(true);
    });

    it('should compare the given instances and deny object/array inequalities', () => {
      const parentPaths = ['/1', '/2', '/3'];
      const showParent = () => {};
      const showRoot = () => {};

      const delegate1Data = {
        location: { pathname: '/4' },
        parentPaths,
        showParent,
        showRoot,
        invalidKeyForTest: 'test invalidKey',
      };
      const delegate1 = RoutingStackDelegate.create(delegate1Data);

      const delegate2Data = {
        location: { pathname: '/4' },
        parentPaths,
        showParent,
        showRoot,
        invalidKeyForTest: 'test invalidKey',
      };
      const delegate2 = RoutingStackDelegate.create(delegate2Data);

      expect(RoutingStackDelegate.isEqual(delegate1, delegate2)).toBe(false);
    });
  });
});
