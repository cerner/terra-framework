import Home from './home/Home';
import Components from './components/Components';
import ComponentsMenu from './components/ComponentsMenu';
import Tests from './tests/Tests';
import TestsMenu, { injectConfig as testsMenuWithConfig } from './tests/TestsMenu';
import ApplicationMenu from './ApplicationMenu';

import componentConfig from '../componentConfig';
import ComponentTests, { injectConfig as componentTestsWithConfig } from './tests/ComponentTests';
import ComponentTestsMenu, { injectConfig as componentTestsMenuWithConfig } from './tests/ComponentTestsMenu';

const componentTests = {};
Object.keys(componentConfig).map((componentKey) => {
  const testRoot = componentConfig[componentKey].testRoot;
  if (testRoot) {
    return {
      path: testRoot,
      component: {
        default: {
          componentClass: componentTestsWithConfig(componentConfig[componentKey])(ComponentTests),
        },
      },
    };
  }
  return undefined;
})
.filter(test => !!test)
.forEach((test) => {
  componentTests[test.path] = test;
});

const componentTestMenus = {};
Object.keys(componentConfig).map((componentKey) => {
  const testRoot = componentConfig[componentKey].testRoot;
  if (testRoot) {
    return {
      path: testRoot,
      component: {
        default: {
          componentClass: componentTestsMenuWithConfig(componentConfig[componentKey])(ComponentTestsMenu),
        },
      },
    };
  }
  return undefined;
})
.filter(test => !!test)
.forEach((test) => {
  componentTestMenus[test.path] = test;
});

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
      children: componentTests,
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
              componentClass: testsMenuWithConfig(componentConfig)(TestsMenu),
            },
          },
          children: componentTestMenus,
        },
      },
    },
  },
};

export default config;
