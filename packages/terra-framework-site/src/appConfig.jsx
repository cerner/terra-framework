import React from 'react';
import Home from './app/home/Home';
import ApplicationMenu from './app/ApplicationMenu';
import Tests from './app/tests/Tests';
import TestsMenu from './app/tests/TestsMenu';

import componentConfig from './componentConfig';

import Components from './app/components/Components';
import ComponentsMenu from './app/components/ComponentsMenu';
import ComponentTests from './app/tests/ComponentTests';
import ComponentTestsMenu from './app/tests/ComponentTestsMenu';

const injectConfig = config => (
  ComponentClass => (
    props => (
      <ComponentClass {...props} config={config} />
    )
  )
);

const buildConfigForComponent = (config, ComponentClass) => {
  const generatedConfig = {};
  Object.keys(config).map((componentKey) => {
    const testRoot = config[componentKey].testRoot;
    if (testRoot) {
      return {
        path: `/site${testRoot}`,
        component: {
          default: {
            componentClass: injectConfig(config[componentKey])(ComponentClass),
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

const buildRawConfigForComponent = (config) => {
  const generatedConfig = {};
  Object.keys(config).map((componentKey) => {
    const example = config[componentKey].example;
    if (example) {
      return {
        path: `/raw${example.path}`,
        component: {
          default: {
            componentClass: () => {
              const ComponentClass = example.component;
              return (
                <div style={{ height: '100%', position: 'relative', padding: '15px', overflow: 'auto' }}>
                  <ComponentClass />
                </div>
              );
            },
          },
        },
      };
    }
    return undefined;
  })
  .filter(example => !!example)
  .forEach((example) => {
    generatedConfig[example.path] = example;
  });

  return generatedConfig;
};

const navigation = {
  index: '/site/home',
  links: [{
    path: '/site/home',
    text: 'Home',
  }, {
    path: '/site/components',
    text: 'Components',
  }, {
    path: '/site/tests',
    text: 'Tests',
  }],
};

const routes = Object.freeze({
  content: {
    '/site/home': {
      path: '/site/home',
      component: {
        default: {
          componentClass: Home,
        },
      },
    },
    '/site/components': {
      path: '/site/components',
      component: {
        default: {
          componentClass: injectConfig(componentConfig)(Components),
        },
      },
    },
    '/site/tests': {
      path: '/site/tests',
      component: {
        default: {
          componentClass: Tests,
        },
      },
    },
    ...buildConfigForComponent(componentConfig, ComponentTests),
    ...buildRawConfigForComponent(componentConfig),
  },
  menu: {
    '/site': {
      path: '/site',
      component: {
        tiny: {
          componentClass: ApplicationMenu,
          props: {
            navigation,
          },
        },
        small: {
          componentClass: ApplicationMenu,
          props: {
            navigation,
          },
        },
      },
    },
    '/site/components': {
      path: '/site/components',
      component: {
        default: {
          componentClass: injectConfig(componentConfig)(ComponentsMenu),
        },
      },
    },
    '/site/tests': {
      path: '/site/tests',
      component: {
        default: {
          componentClass: injectConfig(componentConfig)(TestsMenu),
        },
      },
    },
    ...buildConfigForComponent(componentConfig, ComponentTestsMenu),
  },
});

export { routes, navigation };
