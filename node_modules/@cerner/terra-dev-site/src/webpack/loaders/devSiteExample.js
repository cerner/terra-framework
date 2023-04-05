const path = require('path');
const startCase = require('lodash.startcase');
const findCssFileName = require('../loaderUtils/determineCssFileName');

/**
 * Generate the example with the supplied file.
 * Don't use an arrow function
 */
const loader = async function loader(content) {
  const callback = this.async();

  const exampleSource = this.resourcePath;
  const parsedResourcePath = path.parse(exampleSource);
  const cssFileName = findCssFileName(content);

  const code = [
    'import React from \'react\';',
    `import Example from '${exampleSource}';`,
    `import Code from '${exampleSource}?dev-site-codeblock';`,
    'import ExampleTemplate from \'@cerner/terra-dev-site/lib/loader-components/_ExampleTemplate\';',
  ];

  if (cssFileName !== undefined) {
    try {
      this.resolve(this.context, cssFileName, async () => {
      });
      code.push(`import Css from '${cssFileName}?dev-site-codeblock';`,
        `export default ({ title, description, isExpanded }) => (
            <ExampleTemplate
            title={ title || '${startCase(parsedResourcePath.name)}'}
            description={description}
            example={<Example />}
            exampleCssSrc={<Css />}
            exampleSrc={<Code />}
            isExpanded={isExpanded}
            />
          );`);
      return callback(null, code.join('\n'));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(((`Cannot resolve path:\n${cssFileName}\n${err}`)));
    }
  }
  code.push(`export default ({ title, description, isExpanded }) => (
    <ExampleTemplate
      title={ title || '${startCase(parsedResourcePath.name)}'}
      description={description}
      example={<Example />}
      exampleSrc={<Code />}
      isExpanded={isExpanded}
    />
  );`);

  return callback(null, code.join('\n'));
};

module.exports = loader;
