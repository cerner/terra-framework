const fs = require('fs');
const findUp = require('find-up');
const stylelint = require('stylelint');
const valueParser = require('postcss-value-parser');

const ruleName = 'terra/custom-property-namespace';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected(property, namespace) {
    return `Expected ${property} to be prefixed with the namespace: --${namespace}`;
  },
});

/**
 * Requires custom properties defined within var functions to be prefixed with a namespace.
 * @param {boolean} enabled - Indicates whether or not the rule is enabled.
 * @param {object} options - Custom rule configurations.
 * @return {func} - A rule function.
 */
const rule = (enabled, options = {}) => (root, result) => {
  if (!enabled) {
    return;
  }

  // Finds the nearest package json from the target file to obtain the package name.
  const packagePath = findUp.sync('package.json', { cwd: root.source.input.file });
  const { name } = JSON.parse(fs.readFileSync(packagePath));
  // remove scope from package name
  const prefix = name.split('/').pop();

  // If provided use the namespace. Fallback to the package json name.
  const namespace = options.namespace || prefix;

  root.walkDecls((decl) => {
    valueParser(decl.value).nodes.forEach((node) => {
      if (node.type !== 'function' || node.value !== 'var') {
        return;
      }

      const { type, value } = node.nodes[0];
      if (type !== 'word' || value.slice(0, 2) !== '--' || value.match(`^--${namespace}`)) {
        return;
      }

      stylelint.utils.report({
        message: messages.expected(value, namespace),
        node: decl,
        result,
        ruleName,
      });
    });
  });
};

module.exports = stylelint.createPlugin(ruleName, rule);
module.exports.ruleName = ruleName;
module.exports.messages = messages;
module.exports.primaryOptionArray = true;
