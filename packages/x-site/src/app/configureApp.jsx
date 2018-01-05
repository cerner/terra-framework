import React from 'react';
import SiteUtils from './components/SiteUtils';

import ApplicationMenu from './ApplicationMenu';

import Components from './components/Components';
import ComponentsMenu from './components/ComponentsMenu';

const injectConfig = configuredProps => (
  ComponentClass => (
    props => (
      <ComponentClass {...props} {...configuredProps} />
    )
  )
);

const buildComponent = (ComponentClass, configuredProps) => (
  {
    default: {
      componentClass: injectConfig(configuredProps)(ComponentClass),
    },
  }
);

const buildSubNavigationConfig = (config, ComponentClass, exampleType, siteRoot) => {
  const generatedConfig = {};
  const subNavConfig = Object.keys(config).map((componentKey) => {
    const pathRoot = config[componentKey][`${exampleType}Root`];
    const examples = config[componentKey][`${exampleType}`];

    if (pathRoot && examples) {
      if (exampleType === 'pages' && examples.length === 1) {
        return undefined;
      }
      return {
        path: `${siteRoot}${pathRoot}`,
        component: buildComponent(ComponentClass, { config: config[componentKey], siteRoot, exampleType, isSubMenu: true }),
      };
    }
    return undefined;
  })
  .filter(test => !!test);

  subNavConfig.forEach((test) => {
    generatedConfig[test.path] = test;
  });
  return generatedConfig;
};

const buildRawConfigForPageComponents = (config, pathRoot) => {
  const generatedConfig = {};
  const rawPageConfig = SiteUtils.aggregateExamples(config, pathRoot, 'pages').map(page => (
    {
      path: `${page.fullPath}`,
      component: buildComponent(page.component),
    }
  ));

  rawPageConfig.forEach((page) => {
    generatedConfig[page.path] = page;
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
    let exampleType = null;

    if (link.path.includes('components')) {
      exampleType = 'pages';

      content = Object.assign(content, buildRawConfigForPageComponents(componentConfig, '/raw'));
      menu = Object.assign(menu, buildSubNavigationConfig(componentConfig, ComponentsMenu, exampleType, siteRoot));
    } else if (link.path.includes('tests')) {
      exampleType = 'tests';

      menu = Object.assign(menu, buildSubNavigationConfig(componentConfig, ComponentsMenu, exampleType, siteRoot));
    }

    const componentProps = { config: componentConfig, siteRoot, exampleType };

    content[link.path] = {
      path: link.path,
      component: buildComponent(Components, componentProps),
    };


    if (!link.path.includes('home')) {
      menu[link.path] = {
        path: link.path,
        component: buildComponent(ComponentsMenu, componentProps),
      };
    }
  });

  return { content, menu };
};


export default routeConfiguration;
