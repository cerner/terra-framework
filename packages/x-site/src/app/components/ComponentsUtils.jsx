
const aggregateExamples = config => (
  [].concat(...Object.keys(config).map((componentKey) => {
    const rootPath = config[componentKey].examplesRoot;
    const examples = config[componentKey].examples;

    if (rootPath && examples) {
      return examples.map((example) => {
        const componentName = config[componentKey].name;
        return ({
          fullPath: rootPath + example.path,
          component: example.component,
          linkText: examples.length === 1 ? componentName : `${componentName} - ${example.description}`,
        });
      });
    }
    return undefined;
  }))
  .filter(example => !!example)
);

export default aggregateExamples;
