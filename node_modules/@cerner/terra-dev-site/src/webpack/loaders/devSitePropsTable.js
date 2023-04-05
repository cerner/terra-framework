const { getOptions } = require('loader-utils');
const reactDocs = require('react-docgen');
const findSource = require('../loaderUtils/findSource');

/**
 * Parses prop types into a more compact representation.
 * @param {object} type prop type information to parse.
 * @param {string} type.value the value for the type
 * @param {string} type.name the name of the type
 * @param {boolean} type.required whether or not the type is required
 * @param {description} type.description the description of the type
 * @param {bool} indent should indent the return value.
 */
const parsePropType = ({ type, indent = false }) => {
  const {
    value,
    name,
    required,
    description,
  } = type;
  let returnValue = [];

  if (value) {
    if (name === 'instanceOf') {
      returnValue = [
        `InstanceOf: ${value},`,
      ];
    } else if (name === 'enum') {
      returnValue = [
        'enum: [',
        ...value.map(val => `  ${val.value}`),
        '],',
      ];
    } else if (name === 'union') {
      returnValue = [
        'unionOf: [',
        ...value.map((val) => parsePropType({ type: val, indent: true })),
        '],',
      ];
    } else if (name === 'arrayOf') {
      returnValue = [
        'arrayOf: [{',
        ...parsePropType({ type: value, indent: true }),
        '}],',
      ];
    } else if (name === 'objectOf') {
      returnValue = [
        'objectOf: {',
        ...parsePropType({ type: value, indent: true }),
        '},',
      ];
    } else if (name === 'shape') {
      returnValue = [
        'shape: {',
        ...Object.entries(value).reduce((acc, [key, val]) => acc.concat([`${key}: {`, ...parsePropType({ type: val, indent: true }), '},']), []).map((val) => `  ${val}`),
        '},',
      ];
    } else if (name === 'exact') {
      returnValue = [
        'exactShape: {',
        ...Object.entries(value).reduce((acc, [key, val]) => acc.concat([`${key}: {`, ...parsePropType({ type: val, indent: true }), '},']), []).map((val) => `  ${val}`),
        '},',
      ];
    }
  } else {
    if (!indent) {
      returnValue.push(name);
    } else {
      returnValue.push(`type: '${name}',`);
    }

    if (required) {
      returnValue.push(`required: ${required},`);
    }
    if (description) {
      returnValue.push(`description: '${description}',`);
    }
  }

  if (indent) {
    return returnValue.map((val) => `  ${val}`);
  }
  return returnValue;
};

/**
 * Create the type mdx react component
 * @param {name, value} type
 */
const propType = ({ type }) => {
  // return value;
  const parsed = parsePropType({ type }).join('\n');

  return `\n\`\`\`javascript\n${parsed}\n\`\`\``;
};

/**
 * Create the default value string.
 * @param {*} value
 */
const propDefaultValue = (value) => {
  if (!value) {
    return 'none';
  }

  return `\`\`\`javascript\n${value.value}\n\`\`\``;
};

const generatePropsTable = ({ filePath, source, callback }) => {
  let parsedProps;
  try {
    parsedProps = reactDocs.parse(source, undefined, undefined, {
      filename: filePath,
    });
  } catch (e) {
    return callback(`Could not convert file to props table:\n${filePath}\n${e}`);
  }

  let count = 0;
  // loop through parsed props to generate table.
  const rows = Object.entries(parsedProps.props).map(([name, prop]) => {
    if (prop.description.includes('@private')) {
      return '';
    }
    count += 1;
    const type = propType({ type: prop.type });
    const defaultValue = propDefaultValue(prop.defaultValue);
    const required = prop.required || (prop.type.name === 'custom' && prop.type.raw && prop.type.raw.includes('isRequired')) ? 'true' : 'false';

    return [
      `<Row key="ROW${count}">`,
      '<PropNameCell>',
      name,
      '</PropNameCell>',
      '<TypeCell>',
      // these spaces are important, it allows mdx to process this value.
      '',
      type,
      '',
      '</TypeCell>',
      `<RequiredCell isRequired={${required}} />`,
      '<DefaultValueCell>',
      '',
      defaultValue,
      '',
      '</DefaultValueCell>',
      '<DescriptionCell>',
      '',
      prop.description,
      '',
      '</DescriptionCell>',
      '</Row>',
    ].join('\n');
  });

  return callback(null, [
    'import PropsTable, { PropNameCell, TypeCell, RequiredCell, DefaultValueCell, DescriptionCell, Row } from \'@cerner/terra-dev-site/lib/loader-components/_PropsTable\';',
    '',
    '<PropsTable>',
    ...rows,
    '</PropsTable>',
    '',
  ].join('\n'));
};

/**
 * The async loader to create the props table component
 * Don't use an arrow function or you wont have access to `this`
 */
const loader = async function loader(content) {
  // Retrieve mdx options and resolve extensions.
  const { resolveExtensions } = getOptions(this);

  // Find src
  const { resourcePath } = this;
  const { source, filePath } = findSource(resourcePath, resolveExtensions);

  const callback = this.async();

  // short circuit, if this already is the source file, just return that.
  if (filePath === resourcePath) {
    return generatePropsTable({ filePath, source: content, callback });
  }
  // ensure src exists
  return this.resolve('', source, async (err, result) => {
    if (err) {
      return callback(new Error(`A non transpiled source file is required for the props table to be generated:\n${source}`));
    }

    // Add the src file to webpack's dependency list
    this.addDependency(result);

    // Read src file
    return this.fs.readFile(result, async (readFileError, srcFile) => (
      generatePropsTable({ filePath: result, source: srcFile, callback })
    ));
  });
};

module.exports = loader;
