import RoutingStackDelegate from '../../../src/routing/RoutingStackDelegate';

describe('RoutingStackDelegate', () => {
  describe('create', () => {
    it('should create a RoutingStackDelegate', () => {
      const result = RoutingStackDelegate.create({});
      expect(result).not.toBe(undefined);
    });
  });
});
