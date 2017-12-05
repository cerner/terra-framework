import { reduceRouteConfig, validateMatchExists } from '../../src/routingUtils';

describe('routingUtils', () => {
  describe('reduceRouteConfig', () => {
    it('should return an empty array if no config is given', () => {
      expect(reduceRouteConfig()).toEqual([]);
    });

    it('should gracefully reduce configuration if given config is malformed', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
        },
      };

      const result = reduceRouteConfig(testConfig);
      expect(result).toEqual([]);
    });

    it('should reduce configuration if only given ', () => {
      const testConfig = {
        '/': {
          path: '/',
          component: {
            default: {
              componentClass: 'RootComponentClass',
            },
          },
        },
      };

      const result = reduceRouteConfig(testConfig);
      expect(result.length).toBe(1);
      expect(result[0].componentClass).toBe('RootComponentClass');
    });

    it('should properly reduce configuration if component configuration is not provided', () => {
      const testConfig = {
        '/page1': {
          path: '/page1',
        },
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
      };

      const result = reduceRouteConfig(testConfig);
      expect(result.length).toBe(2);
      expect(result[0].componentClass).toBe('Page1Item2ComponentClass');
      expect(result[1].componentClass).toBe('Page1Item1ComponentClass');
      expect(result[1].componentProps).toEqual({
        testProp: 'test value',
      });
    });

    it('should return all relevant configuration data for a given route', () => {
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
          },
        },
      };

      const result = reduceRouteConfig(testConfig);
      expect(result.length).toBe(1);
      expect(result[0].componentClass).toBe('Page1ComponentClass');
      expect(result[0].componentProps).toEqual({
        testProp: 'test value',
      });
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

      const result = reduceRouteConfig(testConfig, 'tiny');
      expect(result.length).toBe(2);
      expect(result[0].componentClass).toBe('Page3DefaultComponentClass');
      expect(result[0].path).toBe('/page3');
      expect(result[1].componentClass).toBe('Page1TinyComponentClass');
      expect(result[1].path).toBe('/page1');
    });

    it('should properly order child route configurations', () => {
      const testConfig = {
        '/a/b/': {
          path: '/a/b',
          component: {
            default: {
              componentClass: 'BComponentClass',
            },
          },
        },
        '/a/b/c/d/e': {
          path: '/a/b/c/d/e',
          component: {
            default: {
              componentClass: 'EComponentClass',
            },
          },
        },
        '/a': {
          path: '/a',
          component: {
            default: {
              componentClass: 'AComponentClass',
            },
          },
        },
        '/a/b/c': {
          path: '/a/b/c',
          component: {
            default: {
              componentClass: 'CComponentClass',
            },
          },
        },
        '/aardvark/path': {
          path: '/aardvark/path',
          component: {
            default: {
              componentClass: 'AardvarkComponentClass',
            },
          },
        },
        '/a/g': {
          path: '/a/g',
          component: {
            default: {
              componentClass: 'GComponentClass',
            },
          },
        },
        '/a/g/h': {
          path: '/a/g/h',
          component: {
            default: {
              componentClass: 'HComponentClass',
            },
          },
        },
        '/x': {
          path: '/x',
          component: {
            default: {
              componentClass: 'XComponentClass',
            },
          },
        },
        '/x/x': {
          path: '/x/x',
          component: {
            default: {
              componentClass: 'DoubleXComponentClass',
            },
          },
        },
        '/': {
          path: '/',
          component: {
            default: {
              componentClass: 'RootComponentClass',
            },
          },
        },
      };

      const result = reduceRouteConfig(testConfig);
      expect(result.length).toBe(10);
      expect(result[0].path).toBe('/x/x');
      expect(result[0].parentPaths).toEqual(['/', '/x']);
      expect(result[1].path).toBe('/x');
      expect(result[1].parentPaths).toEqual(['/']);
      expect(result[2].path).toBe('/aardvark/path');
      expect(result[2].parentPaths).toEqual(['/']);
      expect(result[3].path).toBe('/a/g/h');
      expect(result[3].parentPaths).toEqual(['/', '/a', '/a/g']);
      expect(result[4].path).toBe('/a/g');
      expect(result[4].parentPaths).toEqual(['/', '/a']);
      expect(result[5].path).toBe('/a/b/c/d/e');
      expect(result[5].parentPaths).toEqual(['/', '/a', '/a/b', '/a/b/c']);
      expect(result[6].path).toBe('/a/b/c');
      expect(result[6].parentPaths).toEqual(['/', '/a', '/a/b']);
      expect(result[7].path).toBe('/a/b');
      expect(result[7].parentPaths).toEqual(['/', '/a']);
      expect(result[8].path).toBe('/a');
      expect(result[8].parentPaths).toEqual(['/']);
      expect(result[9].path).toBe('/');
      expect(result[9].parentPaths).toEqual([]);
    });

    it('should properly order child route configurations with wildcards', () => {
      const testConfig = {
        '/patients': {
          path: '/patients',
          component: {
            default: {
              componentClass: 'PatientsClass',
            },
          },
        },
        '/patients/:id': {
          path: '/patients/:id',
          component: {
            default: {
              componentClass: 'PatientsIdClass',
            },
          },
        },
        '/patients/:id/orders': {
          path: '/patients/:id/orders',
          component: {
            default: {
              componentClass: 'OrdersClass',
            },
          },
        },
        '/patients/:id/chart': {
          path: '/patients/:id/chart',
          component: {
            default: {
              componentClass: 'ChartClass',
            },
          },
        },
      };

      const result = reduceRouteConfig(testConfig);
      expect(result.length).toBe(4);
      expect(result[0].path).toBe('/patients/:id/orders');
      expect(result[0].parentPaths).toEqual(['/patients', '/patients/:id']);
      expect(result[1].path).toBe('/patients/:id/chart');
      expect(result[1].parentPaths).toEqual(['/patients', '/patients/:id']);
      expect(result[2].path).toBe('/patients/:id');
      expect(result[2].parentPaths).toEqual(['/patients']);
      expect(result[3].path).toBe('/patients');
      expect(result[3].parentPaths).toEqual([]);
    });

    it('should properly order child route configurations taking variable sizes into account', () => {
      const testConfig = {
        '/a/b/': {
          path: '/a/b',
          component: {
            tiny: {
              componentClass: 'BComponentClass',
            },
          },
        },
        '/a/b/c/d/e': {
          path: '/a/b/c/d/e',
          component: {
            small: {
              componentClass: 'EComponentClass',
            },
          },
        },
        '/a': {
          path: '/a',
          component: {
            default: {
              componentClass: 'AComponentClass',
            },
          },
        },
        '/a/b/c': {
          path: '/a/b/c',
          component: {
            default: {
              componentClass: 'CComponentClass',
            },
          },
        },
      };

      const tinyResult = reduceRouteConfig(testConfig, 'tiny');
      expect(tinyResult.length).toBe(3);
      expect(tinyResult[0].path).toBe('/a/b/c');
      expect(tinyResult[0].parentPaths).toEqual(['/a', '/a/b']);
      expect(tinyResult[1].path).toBe('/a/b');
      expect(tinyResult[1].parentPaths).toEqual(['/a']);
      expect(tinyResult[2].path).toBe('/a');
      expect(tinyResult[2].parentPaths).toEqual([]);

      const smallResult = reduceRouteConfig(testConfig, 'small');
      expect(smallResult.length).toBe(3);
      expect(smallResult[0].path).toBe('/a/b/c/d/e');
      expect(smallResult[0].parentPaths).toEqual(['/a', '/a/b/c']);
      expect(smallResult[1].path).toBe('/a/b/c');
      expect(smallResult[1].parentPaths).toEqual(['/a']);
      expect(smallResult[2].path).toBe('/a');
      expect(smallResult[2].parentPaths).toEqual([]);
    });
  });

  describe('validateMatchExists', () => {
    it('should abort if no route config is given', () => {
      expect(validateMatchExists('/path', undefined)).toBe(false);
    });

    it('should abort if no path is given', () => {
      expect(validateMatchExists(undefined, [])).toBe(false);
    });

    it('should abort if route config is empty', () => {
      expect(validateMatchExists('/path', [])).toBe(false);
    });

    it('should properly determine if path matches among multiple route', () => {
      const testRoutes = [{
        path: '/a',
        componentClass: 'AClass',
      }, {
        path: '/b',
        componentClass: 'BClass',
      }, {
        path: '/c',
        componentClass: 'BClass',
      }];

      expect(validateMatchExists('/a', testRoutes)).toBe(true);
      expect(validateMatchExists('/b', testRoutes)).toBe(true);
      expect(validateMatchExists('/c', testRoutes)).toBe(true);
      expect(validateMatchExists('/a/1', testRoutes)).toBe(true);
      expect(validateMatchExists('/b/1', testRoutes)).toBe(true);
      expect(validateMatchExists('/c/1', testRoutes)).toBe(true);
      expect(validateMatchExists('/d', testRoutes)).toBe(false);
      expect(validateMatchExists('/', testRoutes)).toBe(false);
    });
  });
});
