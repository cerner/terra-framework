const path = require('path');
const { getOptions } = require('loader-utils');
const findSource = require('../loaderUtils/findSource');

const generateMarkdown = (content, extension) => ([
  `\`\`\`${extension}`,
  content,
  '```',
].join('\n'));

/**
 * Load the contents of the file into the codeblock
 * This loader expects to be chained with the mdx loader.
 */

const loader = async function loader(content) {
  const callback = this.async();

  const { resourcePath } = this;
  const { resolveExtensions } = getOptions(this);
  const { source, filePath, extension } = findSource(resourcePath, resolveExtensions);

  // short circuit, if this already is the source file, just return that.
  if (filePath === resourcePath) {
    return callback(null, generateMarkdown(content, extension));
  }

  return this.resolve('', source, (resolveError, result) => {
    if (result) {
      this.addDependency(result);
      // remove . from extension;
      const srcExtension = path.extname(result).slice(1);
      return this.fs.readFile(result, (readFileError, srcFile) => (
        callback(null, generateMarkdown(srcFile, srcExtension))
      ));
    }
    // Fallback, if no result is found generate the snippet from the existing file,
    return callback(null, generateMarkdown(content, extension));
  });
};

module.exports = loader;
