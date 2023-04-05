const lint = require('../../lint');

const packageJsonLint = {
  command: 'package-json-lint',
  describe: 'Lint the package.json file(s) in the current package',
  handler: lint,
};

module.exports = packageJsonLint;
