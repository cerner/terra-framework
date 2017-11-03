import Home from './Home';
import Components from './Components';
import ComponentsMenu from './ComponentsMenu';
import Tests from './Tests';
import TestsMenu from './TestsMenu';
import RootMenu from './RootMenu';

import testConfig from './testConfig';

const config = {
  navigation: {
    index: '/home',
    links: [{
      path: '/home',
      text: 'Home',
    //   component: ChartMenuIcon,
    }, {
      path: '/components',
      text: 'Components',
    //   component: AlertsMenuIcon,
    }, {
      path: '/tests',
      text: 'Tests',
    //   component: AlertsMenuIcon,
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
          componentClass: RootMenu,
        },
        small: {
          componentClass: RootMenu,
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
