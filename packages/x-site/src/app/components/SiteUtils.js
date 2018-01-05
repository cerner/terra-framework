const aggregateExamples = (config, exampleType, siteRoot) => (
  [].concat(...Object.keys(config).map((componentKey) => {
    const pathRoot = config[componentKey][`${exampleType}Root`];
    const components = config[componentKey][`${exampleType}`];

    if (pathRoot && components) {
      return components.map(component => (
        {
          fullPath: siteRoot + pathRoot + component.path,
          component: component.component,
          linkText: component.description,
        }),
      );
    }
    return undefined;
  }))
  .filter(component => !!component)
);

const generateMenuLinks = (config, exampleType, siteRoot) => (
  Object.keys(config).map((componentKey) => {
    const pathRoot = config[componentKey][`${exampleType}Root`];
    const components = config[componentKey][`${exampleType}`];

    if (pathRoot && components) {
      // Tests will always have create sub menu navigation
      const hasSubNav = exampleType === 'tests' || components.length > 1;

      let path = `${siteRoot}${pathRoot}`;
      if (!hasSubNav) {
        path = `${siteRoot}${pathRoot}${components[0].path}`;
      }

      return ({
        id: siteRoot + pathRoot,
        path,
        text: config[componentKey].name,
        hasSubNav,
      });
    }

    return undefined;
  })
  .filter(component => !!component)
);

const generateSubMenuLinks = (config, exampleType, siteRoot) => (
  config[`${exampleType}`].map(component => ({
    id: siteRoot + config[`${exampleType}Root`] + component.path,
    path: `${siteRoot}${config[`${exampleType}Root`]}${component.path}`,
    text: component.description,
  }))
);

const SiteUtils = {
  generateMenuLinks,
  generateSubMenuLinks,
  aggregateExamples,
};

export default SiteUtils;
