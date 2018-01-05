const aggregateExamples = (config, exampleType, pathRoot) => (
  [].concat(...Object.keys(config).map((componentKey) => {
    const componentPath = config[componentKey].path;
    const examples = config[componentKey][`${exampleType}`];

    if (componentPath && examples) {
      return examples.map(example => (
        {
          fullPath: pathRoot + componentPath + example.path,
          component: example.component,
          linkText: example.description,
        }),
      );
    }
    return undefined;
  }))
  .filter(example => !!example)
);

const generateMenuLinks = (config, exampleType, pathRoot) => (
  Object.keys(config).map((componentKey) => {
    const componentPath = config[componentKey].path;
    const examples = config[componentKey][`${exampleType}`];

    if (componentPath && examples) {
      // Tests will always have create sub menu navigation
      const hasSubNav = exampleType === 'tests' || examples.length > 1;

      let path = `${pathRoot}${componentPath}`;
      if (!hasSubNav) {
        path = `${pathRoot}${componentPath}${examples[0].path}`;
      }

      return ({
        id: pathRoot + componentPath,
        path,
        text: config[componentKey].name,
        hasSubNav,
      });
    }

    return undefined;
  })
  .filter(example => !!example)
);

const generateSubMenuLinks = (componentConfig, exampleType, pathRoot) => (
  componentConfig[`${exampleType}`].map(example => ({
    id: pathRoot + example.path,
    path: `${pathRoot}${example.path}`,
    text: example.description,
  }))
);

const SiteUtils = {
  generateMenuLinks,
  generateSubMenuLinks,
  aggregateExamples,
};

export default SiteUtils;
