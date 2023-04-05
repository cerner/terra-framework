const stylelint = require('stylelint');
const valueParser = require('postcss-value-parser');

const ruleName = 'terra/custom-property-pattern';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected(property) {
    return `Expected ${property} to include only lowercase alphanumeric characters and hyphens`;
  },
});

const regex = new RegExp('--[a-z]+([a-z0-9-]+[a-z0-9]+)?$');

/**
 * Requires custom properties defined within var functions to contain only lowercase
 * alphanumeric characters and hyphens.
 * @param {boolean} enabled - Indicates whether or not the rule is enabled.
 * @return {func} - A rule function.
 */
const rule = enabled => (root, result) => {
  if (!enabled) {
    return;
  }

  root.walkDecls((decl) => {
    valueParser(decl.value).nodes.forEach((node) => {
      if (node.type !== 'function' || node.value !== 'var') {
        return;
      }

      const { type, value } = node.nodes[0];
      if (type !== 'word' || value.slice(0, 2) !== '--' || regex.test(value)) {
        return;
      }

      stylelint.utils.report({
        message: messages.expected(value),
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
