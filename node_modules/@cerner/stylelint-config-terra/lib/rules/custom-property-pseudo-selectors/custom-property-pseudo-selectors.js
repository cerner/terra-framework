const stylelint = require('stylelint');
const valueParser = require('postcss-value-parser');

const ruleName = 'terra/custom-property-pseudo-selectors';

const messages = stylelint.utils.ruleMessages(ruleName, {
  expected(property, selectors) {
    return `Expected ${property} to include all ancestor psuedo selectors in order: [${selectors}]`;
  },
});

// Regex for matching whitelisted pseudo selectors.
const PSEUDO_REGEX = /:(active|before|after|checked|disabled|empty|focus|hover|visited)/g;

/**
 * Recursively traverses the css tree and returns the full selector of a node.
 * @param {PostCSS Node} node - The post css node.
 * @param {string} [path=''] - The accumulated selector.
 * @return {string} - The full selector path to the node.
 */
const fullSelector = (node, path = '') => {
  const { parent, selector, type } = node;

  if (!parent || !selector || type === 'root') {
    return path;
  }

  return fullSelector(parent, `${selector} ${path}`);
};

/**
 * Requires custom properties defined within var functions to contain all pseudo selectors in order.
 * @param {boolean} enabled - Indicates whether or not the rule is enabled.
 * @return {func} - A rule function.
 */
const rule = enabled => (root, result) => {
  if (!enabled) {
    return;
  }

  root.walkDecls((decl) => {
    const { parent } = decl;

    // Matches all selectors in the ancestor tree and converts them into an ordered regex.
    const pseudo = [...new Set(fullSelector(parent).match(PSEUDO_REGEX))];
    const pseudoRegex = new RegExp(pseudo.reduce((acc, current) => `${acc}-${current.slice(1)}.*`, ''));

    valueParser(decl.value).nodes.forEach((node) => {
      if (node.type !== 'function' || node.value !== 'var') {
        return;
      }

      const { type, value } = node.nodes[0];
      if (type !== 'word' || value.slice(0, 2) !== '--' || pseudoRegex.test(value)) {
        return;
      }

      stylelint.utils.report({
        message: messages.expected(value, pseudo.map(current => current.slice(1))),
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
