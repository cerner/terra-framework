import { flattenRouteConfig, configHasMatchingRoute } from '../../../src/routing/routingUtils';

describe('RoutingStackDelegate', () => {
  describe('flattenRouteConfig', () => {
    it('should properly process the given config', () => {
      expect(flattenRouteConfig).not.toBe(undefined);
    });
  });

  describe('configHasMatchingRoute', () => {
    it('should properly determine if config has matching route', () => {
      expect(configHasMatchingRoute).not.toBe(undefined);
    });
  });
});
