import RoutingStackDelegate from '../../../src/routing/RoutingStackDelegate';

describe('RoutingStackDelegate', () => {
  describe('create', () => {
    it('should create a RoutingStackDelegate', () => {
      const testData = {
        location: { pathname: '/4' },
        stackLocation: { pathname: '/4' },
        parentPaths: ['/1', '/2', '/3'],
        goBack: () => {},
        goToRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const result = RoutingStackDelegate.create(testData);
      expect(result.location).toBe(testData.location);
      expect(result.stackLocation).toBe(testData.stackLocation);
      expect(result.parentPaths).toBe(testData.parentPaths);
      expect(result.goBack).toBe(testData.goBack);
      expect(result.goToRoot).toBe(testData.goToRoot);
      expect(result.invalidKeyForTest).toBe(undefined);
    });
  });

  describe('clone', () => {
    it('should clone a RoutingStackDelegate instance and update attributes as necessary', () => {
      const sourceData = {
        location: { pathname: '/4' },
        stackLocation: 'test stackLocation',
        parentPaths: ['/1', '/2', '/3'],
        goBack: () => {},
        goToRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const sourceDelegate = RoutingStackDelegate.create(sourceData);

      const cloneData = {
        location: { pathname: '/5' },
        stackLocation: 'test stackLocation',
        parentPaths: ['/1', '/2', '/3', '/4'],
        goBack: () => {},
        goToRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const result = RoutingStackDelegate.clone(sourceDelegate, cloneData);

      expect(result.location).toBe(cloneData.location);
      expect(result.stackLocation).toBe(cloneData.stackLocation);
      expect(result.parentPaths).toBe(cloneData.parentPaths);
      expect(result.goBack).toBe(cloneData.goBack);
      expect(result.goToRoot).toBe(cloneData.goToRoot);
      expect(result.differentInvalidKeyForTest).toBe(undefined);
    });

    it('should still work if source delegate is not provided', () => {
      const cloneData = {
        location: { pathname: '/5' },
        stackLocation: 'test stackLocation',
        parentPaths: ['/1', '/2', '/3', '/4'],
        goBack: () => {},
        goToRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const result = RoutingStackDelegate.clone(undefined, cloneData);

      expect(result.location).toBe(cloneData.location);
      expect(result.stackLocation).toBe(cloneData.stackLocation);
      expect(result.parentPaths).toBe(cloneData.parentPaths);
      expect(result.goBack).toBe(cloneData.goBack);
      expect(result.goToRoot).toBe(cloneData.goToRoot);
      expect(result.differentInvalidKeyForTest).toBe(undefined);
    });

    it('should clone a RoutingStackDelegate instance and update attributes as necessary', () => {
      const sourceData = {
        location: { pathname: '/4' },
        stackLocation: 'test stackLocation',
        parentPaths: ['/1', '/2', '/3'],
        goBack: () => {},
        goToRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const sourceDelegate = RoutingStackDelegate.create(sourceData);

      const cloneData = {
        location: { pathname: '/5' },
        stackLocation: 'test stackLocation',
        parentPaths: ['/1', '/2', '/3', '/4'],
        goBack: () => {},
        goToRoot: () => {},
        invalidKeyForTest: 'test invalidKey',
      };
      const result = RoutingStackDelegate.clone(sourceDelegate, cloneData);

      expect(result.location).toBe(cloneData.location);
      expect(result.stackLocation).toBe(cloneData.stackLocation);
      expect(result.parentPaths).toBe(cloneData.parentPaths);
      expect(result.goBack).toBe(cloneData.goBack);
      expect(result.goToRoot).toBe(cloneData.goToRoot);
      expect(result.differentInvalidKeyForTest).toBe(undefined);
    });
  });

  describe('isEqual', () => {
    it('should return false if either given delegate is falsey', () => {
      const testDelegate = RoutingStackDelegate.create();
      expect(RoutingStackDelegate.isEqual(testDelegate, undefined)).toBe(false);
      expect(RoutingStackDelegate.isEqual(undefined, testDelegate)).toBe(false);
    });

    it('should return true if the same instance is given', () => {
      const testDelegate = RoutingStackDelegate.create();
      expect(RoutingStackDelegate.isEqual(testDelegate, testDelegate)).toBe(true);
    });

    it('should compare the given instances', () => {
      const location = { pathname: '/4' };
      const parentPaths = ['/1', '/2', '/3'];
      const goBack = () => {};
      const goToRoot = () => {};

      const delegate1Data = {
        location,
        stackLocation: 'test stackLocation',
        parentPaths,
        goBack,
        goToRoot,
        invalidKeyForTest: 'test invalidKey',
      };
      const delegate1 = RoutingStackDelegate.create(delegate1Data);

      const delegate2Data = {
        location,
        stackLocation: 'test stackLocation',
        parentPaths,
        goBack,
        goToRoot,
        differentInvalidKeyForTest: 'test another invalidKey',
      };
      const delegate2 = RoutingStackDelegate.create(delegate2Data);

      expect(RoutingStackDelegate.isEqual(delegate1, delegate2)).toBe(true);
    });

    it('should compare the given instances and deny object/array inequalities', () => {
      const parentPaths = ['/1', '/2', '/3'];
      const goBack = () => {};
      const goToRoot = () => {};

      const delegate1Data = {
        location: { pathname: '/4' },
        stackLocation: 'test stackLocation',
        parentPaths,
        goBack,
        goToRoot,
        invalidKeyForTest: 'test invalidKey',
      };
      const delegate1 = RoutingStackDelegate.create(delegate1Data);

      const delegate2Data = {
        location: { pathname: '/4' },
        stackLocation: 'test stackLocation',
        parentPaths,
        goBack,
        goToRoot,
        invalidKeyForTest: 'test invalidKey',
      };
      const delegate2 = RoutingStackDelegate.create(delegate2Data);

      expect(RoutingStackDelegate.isEqual(delegate1, delegate2)).toBe(false);
    });
  });
});
