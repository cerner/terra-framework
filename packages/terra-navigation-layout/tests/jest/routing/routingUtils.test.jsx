import { flattenRouteConfig, configHasMatchingRoute } from '../../../src/routing/routingUtils';

const config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: 'HeaderExample',
        },
      },
    },
  },
  menu: {
    '/': {
      path: '/',
      component: {
        tiny: {
          componentClass: 'MenuExample',
        },
        small: {
          componentClass: 'MenuExample',
        },
      },
      children: {
        '/page1': {
          path: '/page1',
          component: {
            default: {
              componentClass: 'Page1Menu',
            },
          },
        },
        '/page2': {
          path: '/page2',
          component: {
            default: {
              componentClass: 'Page2Menu',
            },
          },
        },
      },
    },
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: 'Page1Content',
        },
      },
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: 'Page2Content',
        },
      },
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: 'Page3Content',
        },
      },
    },
  },
};

describe('routingUtils', () => {
  describe('flattenRouteConfig', () => {
    it('should properly process the given config for header', () => {
      const result = flattenRouteConfig(config.header, 'tiny');
      expect(result.length).toBe(1);
      expect(result[0].componentClass).toBe('HeaderExample');
    });

    it('should properly process the given config for menu', () => {
      const result = flattenRouteConfig(config.menu, 'tiny');
      expect(result.length).toBe(3);
      expect(result[0].componentClass).toBe('Page1Menu');
      expect(result[1].componentClass).toBe('Page2Menu');
      expect(result[2].componentClass).toBe('MenuExample');

      const result2 = flattenRouteConfig(config.menu, 'large');
      expect(result2.length).toBe(2);
      expect(result2[0].componentClass).toBe('Page1Menu');
      expect(result2[1].componentClass).toBe('Page2Menu');
    });

    it('should properly process the given config for content', () => {
      const result = flattenRouteConfig(config.content, 'tiny');
      expect(result.length).toBe(3);
      expect(result[0].componentClass).toBe('Page1Content');
      expect(result[1].componentClass).toBe('Page2Content');
      expect(result[2].componentClass).toBe('Page3Content');
    });
  });

  describe('configHasMatchingRoute', () => {
    it('should properly determine if config has matching route', () => {
      expect(configHasMatchingRoute('/page3', config.menu, 'tiny')).toBe(true);
      expect(configHasMatchingRoute('/page3', config.menu, 'medium')).toBe(false);
    });
  });
});
