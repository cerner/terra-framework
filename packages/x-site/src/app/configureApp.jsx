import React from 'react';
import aggregateExamples from './components/ComponentsUtils';

import ApplicationMenu from './ApplicationMenu';

import Components from './components/Components';
import ComponentsMenu from './components/ComponentsMenu';

import Tests from './tests/Tests';
import TestsMenu from './tests/TestsMenu';
import ComponentTests from './tests/ComponentTests';
import ComponentTestsMenu from './tests/ComponentTestsMenu';

const injectConfig = (config, siteRoot) => (
  ComponentClass => (
    props => (
      <ComponentClass {...props} config={config} siteRoot={siteRoot} />
    )
  )
);

const buildComponent = (ComponentClass, component, siteRoot) => {
  let build = injectConfig(component, siteRoot)(ComponentClass);

  if (!component) {
    build = () => (
      <div style={{ height: '100%', position: 'relative', padding: '15px', overflow: 'auto' }}>
        <ComponentClass />
      </div>
    );
  }

  return { default: { componentClass: build } };
};

const buildTestComponentsConfig = (config, ComponentClass, siteRoot) => {
  const generatedConfig = {};
  Object.keys(config).map((componentKey) => {
    const testsRoot = config[componentKey].testsRoot;
    const tests = config[componentKey].tests;
    if (testsRoot && tests) {
      return {
        path: `${siteRoot}${testsRoot}`,
        component: buildComponent(ComponentClass, config[componentKey], siteRoot),
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

const buildRawConfigForExampleComponents = (config) => {
  const generatedConfig = {};
  const examples = aggregateExamples(config).map(example => (
    {
      path: `/raw${example.fullPath}`,
      component: buildComponent(example.component),
    }
  ),
  );

  examples.forEach((example) => {
    generatedConfig[example.path] = example;
  });

  return generatedConfig;
};

const routeConfiguration = (navigation, componentConfig, siteRoot = '/site') => {
  let content = {};
  let menu = {};

  menu[`${siteRoot}`] = {
    path: `${siteRoot}`,
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
  };

  navigation.links.forEach((link) => {
    let contentComponentClass = null;
    let menuComponentClass = null;

    if (link.path.includes('components')) {
      contentComponentClass = injectConfig(componentConfig, siteRoot)(Components);
      content = Object.assign(content, buildRawConfigForExampleComponents(componentConfig));

      menuComponentClass = injectConfig(componentConfig, siteRoot)(ComponentsMenu);
    } else if (link.path.includes('tests')) {
      contentComponentClass = Tests;
      content = Object.assign(content, buildTestComponentsConfig(componentConfig, ComponentTests, siteRoot));

      menuComponentClass = injectConfig(componentConfig, siteRoot)(TestsMenu);
      menu = Object.assign(menu, buildTestComponentsConfig(componentConfig, ComponentTestsMenu, siteRoot));
    }

    content[link.path] = {
      path: link.path,
      component: { default: { componentClass: contentComponentClass } },
    };

    if (!link.path.includes('home')) {
      menu[link.path] = {
        path: link.path,
        component: { default: { componentClass: menuComponentClass } },
      };
    }
  });

  return { content, menu };
};


export default routeConfiguration;
