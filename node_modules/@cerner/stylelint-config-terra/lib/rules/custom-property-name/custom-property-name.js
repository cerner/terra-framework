const stylelint = require('stylelint');
const valueParser = require('postcss-value-parser');

const ruleName = 'terra/custom-property-name';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected(property, name) {
    return `Expected ${property} to be suffixed with -${name}`;
  },
});

/**
 * Requires custom properties defined within var functions to be suffixed with the css property name.
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
      if (type !== 'word' || value.slice(0, 2) !== '--' || value.match(`-${decl.prop}$`)) {
        return;
      }

      stylelint.utils.report({
        message: messages.expected(value, decl.prop),
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
