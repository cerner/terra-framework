import Home from './home/Home';
import Components from './components/Components';
import ComponentsMenu from './components/ComponentsMenu';
import Tests from './tests/Tests';
import TestsMenu from './tests/TestsMenu';
import ApplicationMenu from './ApplicationMenu';

import testConfig from './tests/testConfig';

const config = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
    }, {
      path: '/components',
      text: 'Components',
    }, {
      path: '/tests',
      text: 'Tests',
    }],
  },
  contentRoutes: {
    '/home': {
      path: '/home',
      component: {
        default: {
          componentClass: Home,
        },
      },
    },
    '/components': {
      path: '/components',
      component: {
        default: {
          componentClass: Components,
        },
      },
    },
    '/tests': {
      path: '/tests',
      component: {
        default: {
          componentClass: Tests,
        },
      },
    },
  },
  menuRoutes: {
    '/': {
      path: '/',
      component: {
        tiny: {
          componentClass: ApplicationMenu,
        },
        small: {
          componentClass: ApplicationMenu,
        },
      },
      children: {
        '/components': {
          path: '/components',
          component: {
            default: {
              componentClass: ComponentsMenu,
            },
          },
        },
        '/tests': {
          path: '/tests',
          component: {
            default: {
              componentClass: TestsMenu,
            },
          },
          children: testConfig,
        },
      },
    },
  },
};

export default config;
