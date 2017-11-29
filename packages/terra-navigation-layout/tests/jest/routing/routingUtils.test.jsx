import { flattenRouteConfig, configHasMatchingRoute } from '../../../src/routing/routingUtils';

describe('routingUtils', () => {
  describe('flattenRouteConfig', () => {
    it('should return an empty array if no config is given', () => {
      expect(flattenRouteConfig()).toEqual([]);
    });

    it('should gracefully flatten configuration if no component configuration and no children are provided', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
        },
      };

      const result = flattenRouteConfig(testConfig);
      expect(result).toEqual([]);
    });

    it('should properly flatten configuration if component configuration is not provided', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
          children: {
            '/page1/item1': {
              path: '/page1/item1',
              component: {
                default: {
                  componentClass: 'Page1Item1ComponentClass',
                  props: {
                    testProp: 'test value',
                  },
                },
              },
            },
            '/page1/item2': {
              path: '/page1/item2',
              component: {
                default: {
                  componentClass: 'Page1Item2ComponentClass',
                },
              },
            },
          },
        },
      };

      const result = flattenRouteConfig(testConfig);
      expect(result.length).toBe(2);
      expect(result[0].componentClass).toBe('Page1Item1ComponentClass');
      expect(result[0].componentProps).toEqual({
        testProp: 'test value',
      });
      expect(result[1].componentClass).toBe('Page1Item2ComponentClass');
    });

    it('should return all relevant configuration data for a given route', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
          exact: true,
          strict: true,
          component: {
            default: {
              componentClass: 'Page1ComponentClass',
              props: {
                testProp: 'test value',
              },
            },
          },
        },
      };

      const result = flattenRouteConfig(testConfig);
      expect(result.length).toBe(1);
      expect(result[0].componentClass).toBe('Page1ComponentClass');
      expect(result[0].componentProps).toEqual({
        testProp: 'test value',
      });
      expect(result[0].exact).toBe(true);
      expect(result[0].strict).toBe(true);
      expect(result[0].path).toBe('/page1');
    });

    it('should utilize the given size for config processing', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
          component: {
            default: {
              componentClass: 'Page1ComponentClass',
              props: {
                testProp: 'test value',
              },
            },
            tiny: {
              componentClass: 'Page1TinyComponentClass',
            },
            huge: {
              componentClass: 'Page1HugeComponentClass',
            },
          },
        },
        '/page2': {
          path: '/page2',
          component: {
            huge: {
              componentClass: 'Page2HugeComponentClass',
            },
          },
        },
        '/page3': {
          path: '/page3',
          component: {
            default: {
              componentClass: 'Page3DefaultComponentClass',
            },
          },
        },
      };

      const result = flattenRouteConfig(testConfig, 'tiny');
      expect(result.length).toBe(2);
      expect(result[0].componentClass).toBe('Page1TinyComponentClass');
      expect(result[0].path).toBe('/page1');
      expect(result[1].componentClass).toBe('Page3DefaultComponentClass');
      expect(result[1].path).toBe('/page3');
    });

    it('should recursively flatten child route configurations', () => {
      const testConfig = {
        '/a': {
          path: '/a',
          component: {
            default: {
              componentClass: 'AComponentClass',
            },
          },
          children: {
            '/a/b/': {
              path: '/a/b',
              component: {
                default: {
                  componentClass: 'BComponentClass',
                },
              },
              children: {
                '/a/b/c': {
                  path: '/a/b/c',
                  component: {
                    default: {
                      componentClass: 'CComponentClass',
                    },
                  },
                },
              },
            },
          },
        },
      };

      const result = flattenRouteConfig(testConfig);
      expect(result.length).toBe(3);
      expect(result[0].path).toBe('/a/b/c');
      expect(result[1].path).toBe('/a/b');
      expect(result[2].path).toBe('/a');
    });
  });

  describe('configHasMatchingRoute', () => {
    it('should abort if no route config is given', () => {
      expect(configHasMatchingRoute('/path', undefined)).toBe(false);
    });

    it('should abort if no path is given', () => {
      expect(configHasMatchingRoute(undefined, {})).toBe(false);
    });

    it('should abort if route config is empty', () => {
      expect(configHasMatchingRoute('/path', {})).toBe(false);
    });

    it('should properly determine if config has matching route', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
          component: {
            default: {
              componentClass: 'Page1DefaultComponent',
            },
          },
        },
        '/page2': {
          path: '/page2',
          component: {
            default: {
              componentClass: 'Page2DefaultComponent',
            },
            small: {
              componentClass: 'Page2SmallComponent',
            },
            large: {
              componentClass: 'Page2LargeComponent',
            },
          },
        },
        '/page3': {
          path: '/page3',
          component: {
            medium: {
              componentClass: 'Page3MediumComponent',
            },
          },
        },
        '/page4': {
          path: '/page4',
          component: {
            default: {
              componentClass: 'Page4DefaultComponent',
            },
          },
          children: {
            '/page4/item1': {
              path: '/page4/item1',
              component: {
                default: {
                  componentClass: 'Page4Item1MediumComponent',
                },
              },
            },
          },
        },
      };

      expect(configHasMatchingRoute('/page5', testConfig)).toBe(false);

      expect(configHasMatchingRoute('/page1', testConfig)).toBe(true);
      expect(configHasMatchingRoute('/page1', testConfig, 'tiny')).toBe(true);
      expect(configHasMatchingRoute('/page1', testConfig, 'small')).toBe(true);
      expect(configHasMatchingRoute('/page1', testConfig, 'medium')).toBe(true);
      expect(configHasMatchingRoute('/page1', testConfig, 'large')).toBe(true);
      expect(configHasMatchingRoute('/page1', testConfig, 'huge')).toBe(true);

      expect(configHasMatchingRoute('/page2', testConfig)).toBe(true);
      expect(configHasMatchingRoute('/page2', testConfig, 'tiny')).toBe(true);
      expect(configHasMatchingRoute('/page2', testConfig, 'small')).toBe(true);
      expect(configHasMatchingRoute('/page2', testConfig, 'medium')).toBe(true);
      expect(configHasMatchingRoute('/page2', testConfig, 'large')).toBe(true);
      expect(configHasMatchingRoute('/page2', testConfig, 'huge')).toBe(true);

      expect(configHasMatchingRoute('/page3', testConfig)).toBe(false);
      expect(configHasMatchingRoute('/page3', testConfig, 'tiny')).toBe(false);
      expect(configHasMatchingRoute('/page3', testConfig, 'small')).toBe(false);
      expect(configHasMatchingRoute('/page3', testConfig, 'medium')).toBe(true);
      expect(configHasMatchingRoute('/page3', testConfig, 'large')).toBe(false);
      expect(configHasMatchingRoute('/page3', testConfig, 'huge')).toBe(false);

      expect(configHasMatchingRoute('/page4', testConfig)).toBe(true);
      expect(configHasMatchingRoute('/page4', testConfig, 'tiny')).toBe(true);
      expect(configHasMatchingRoute('/page4', testConfig, 'small')).toBe(true);
      expect(configHasMatchingRoute('/page4', testConfig, 'medium')).toBe(true);
      expect(configHasMatchingRoute('/page4', testConfig, 'large')).toBe(true);
      expect(configHasMatchingRoute('/page4', testConfig, 'huge')).toBe(true);

      expect(configHasMatchingRoute('/page4/item1', testConfig)).toBe(true);
      expect(configHasMatchingRoute('/page4/item1', testConfig, 'tiny')).toBe(true);
      expect(configHasMatchingRoute('/page4/item1', testConfig, 'small')).toBe(true);
      expect(configHasMatchingRoute('/page4/item1', testConfig, 'medium')).toBe(true);
      expect(configHasMatchingRoute('/page4/item1', testConfig, 'large')).toBe(true);
      expect(configHasMatchingRoute('/page4/item1', testConfig, 'huge')).toBe(true);
    });
  });
});
