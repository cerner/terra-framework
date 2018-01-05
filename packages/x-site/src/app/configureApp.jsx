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

const buildSubNavigationConfig = (config, ComponentClass, exampleType, rootPath) => {
  const generatedConfig = {};
  const subNavConfig = Object.keys(config).map((componentKey) => {
    const path = config[componentKey].path;
    const examples = config[componentKey][`${exampleType}`];

    if (path && examples) {
      if (exampleType === 'pages' && examples.length === 1) {
        return undefined;
      }
      return {
        path: `${rootPath}${path}`,
        component: buildComponent(ComponentClass, { config: config[componentKey], pathRoot: `${rootPath}${path}`, exampleType, isSubMenu: true }),
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

const routeConfiguration = (siteConfig, componentConfig) => {
  const navigation = siteConfig.navigation;
  const configuredLinks = [];

  let content = {};
  let menu = {};

  menu[siteConfig.rootPath] = {
    path: siteConfig.rootPath,
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
    // build navigation link configuration
    configuredLinks.push({
      path: link.path,
      text: link.text,
    });

    const exampleType = link.exampleType;
    const componentProps = { config: componentConfig, pathRoot: link.path, exampleType };

    // build content configuration
    let contentComponent = Components;
    if (link.component) {
      contentComponent = link.component;
    }

    content[link.path] = {
      path: link.path,
      component: buildComponent(contentComponent, componentProps),
    };

    if (exampleType === 'pages') {
      content = Object.assign(content, buildRawConfigForPageComponents(componentConfig, '/raw'));
    }

    // build content configuration
    let menuComponent = ComponentsMenu;
    if (link.menuComponent) {
      menuComponent = link.menuComponent;
    }

    if (!link.isStatic) {
      menu[link.path] = {
        path: link.path,
        component: buildComponent(menuComponent, componentProps),
      };
      menu = Object.assign(menu, buildSubNavigationConfig(componentConfig, ComponentsMenu, exampleType, link.path));
    }
  });

  const navigationConfig = { index: navigation.index, links: configuredLinks };
  const routeConfig = { content, menu };

  return { routeConfig, navigation: navigationConfig };
};


export default routeConfiguration;
