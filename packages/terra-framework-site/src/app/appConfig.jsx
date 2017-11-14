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

const buildConfigForComponent = (config, ComponentClass) => {
  const generatedConfig = {};
  Object.keys(componentConfig).map((componentKey) => {
    const testRoot = componentConfig[componentKey].testRoot;
    if (testRoot) {
      return {
        path: testRoot,
        component: {
          default: {
            componentClass: injectConfig(componentConfig[componentKey])(ComponentClass),
          },
        },
      };
    }
    return undefined;
  })
  .filter(test => !!test)
  .forEach((test) => {
    generatedConfig[test.path] = test;
  });

  return generatedConfig;
};

const routes = {
  content: {
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
      children: buildConfigForComponent(componentConfig, ComponentTests),
    },
  },
  menu: {
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
          children: buildConfigForComponent(componentConfig, ComponentTestsMenu),
        },
      },
    },
  },
};

const navigation = {
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
};

export { routes, navigation };
