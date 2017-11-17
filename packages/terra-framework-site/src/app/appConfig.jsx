import React from 'react';
import Home from './home/Home';
import ApplicationMenu from './ApplicationMenu';
import Tests from './tests/Tests';
import TestsMenu from './tests/TestsMenu';

import componentConfig from '../componentConfig';
import Components from './components/Components';
import ComponentsMenu from './components/ComponentsMenu';
import ComponentTests from './tests/ComponentTests';
import ComponentTestsMenu from './tests/ComponentTestsMenu';

const injectConfig = config => (
  ComponentClass => (
    props => (
      <ComponentClass {...props} config={config} />
    )
  )
);

const componentTests = {};
Object.keys(componentConfig).map((componentKey) => {
  const testRoot = componentConfig[componentKey].testRoot;
  if (testRoot) {
    return {
      path: testRoot,
      component: {
        default: {
          componentClass: injectConfig(componentConfig[componentKey])(ComponentTests),
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
          componentClass: injectConfig(componentConfig[componentKey])(ComponentTestsMenu),
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

const config = Object.freeze({
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
          componentClass: injectConfig(componentConfig)(Components),
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
              componentClass: injectConfig(componentConfig)(ComponentsMenu),
            },
          },
        },
        '/tests': {
          path: '/tests',
          component: {
            default: {
              componentClass: injectConfig(componentConfig)(TestsMenu),
            },
          },
          children: componentTestMenus,
        },
      },
    },
  },
});

export default config;
