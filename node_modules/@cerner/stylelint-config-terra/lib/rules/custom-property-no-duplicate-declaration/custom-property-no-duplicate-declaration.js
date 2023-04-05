const stylelint = require('stylelint');
const valueParser = require('postcss-value-parser');

const ruleName = 'terra/custom-property-no-duplicate-declaration';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected(property, value) {
    return `Unexpected duplicate property declaration. ${property} has already been declared as ${value}.`;
  },
});

/**
 * Stores the set of all custom property declarations.
 */
const declarations = {};

/**
 * Disallows a custom property to be declared more than once with a different fallback value.
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

      // Return if the node is not a custom property.
      const propertyNode = node.nodes[0];
      if (propertyNode.type !== 'word' || propertyNode.value.slice(0, 2) !== '--') {
        return;
      }

      const propertyName = propertyNode.value;
      const valueNode = node.nodes[node.nodes.length - 1];
      const previousDeclaration = declarations[propertyName];

      // Return if the property is declared for the first time or matches a previous declaration.
      if (previousDeclaration === undefined || previousDeclaration === valueNode.value) {
        declarations[propertyName] = valueNode.value;
        return;
      }

      stylelint.utils.report({
        message: messages.expected(propertyNode.value, previousDeclaration),
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
