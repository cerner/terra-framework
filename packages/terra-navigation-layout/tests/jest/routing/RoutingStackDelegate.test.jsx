import RoutingStackDelegate from '../../../src/routing/RoutingStackDelegate';

describe('RoutingStackDelegate', () => {
  describe('create', () => {
    it('should create a RoutingStackDelegate', () => {
      const testData = {
        location: 'test location',
        stackLocation: 'test stackLocation',
        parentPaths: 'test parentPaths',
        goBack: 'test goBack',
        goToRoot: 'test goToRoot',
        invalidKey: 'test invalidKey',
      };
      const result = RoutingStackDelegate.create(testData);
      expect(result.location).toBe(testData.location);
      expect(result.stackLocation).toBe(testData.stackLocation);
      expect(result.parentPaths).toBe(testData.parentPaths);
      expect(result.goBack).toBe(testData.goBack);
      expect(result.goToRoot).toBe(testData.goToRoot);
      expect(result.invalidKey).toBe(undefined);
    });
  });
});
