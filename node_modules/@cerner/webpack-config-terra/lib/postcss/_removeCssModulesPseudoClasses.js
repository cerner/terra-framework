const Tokenizer = require('css-selector-tokenizer');

/**
 * Remove the css modules pseudo classes from a selector string.
 */
module.exports = (selector) => {
  const nodeNames = ['local', 'global', 'root'];
  const sel = Tokenizer.parse(selector);
  sel.nodes.forEach(item => {
    // eslint-disable-next-line no-param-reassign
    item.nodes = item.nodes.reduce((acc, node) => {
      if (node.type === 'pseudo-class' && nodeNames.includes(node.name)) {
        // remove the pseudo selector and the following space.
        if (acc.length && acc[acc.length - 1].type === 'spacing') {
          acc.pop();
        }
        return acc;
      }

      // replace the pseudo selector for the nested node.
      if (node.type === 'nested-pseudo-class' && nodeNames.includes(node.name)) {
        acc.push(...node.nodes);
        return acc;
      }

      // Don't add a beginning space
      if (node.type === 'spacing' && !acc.length) {
        return acc;
      }

      // Don't add double spacing
      if (node.type === 'spacing' && acc.length && acc[acc.length - 1].type === 'spacing') {
        return acc;
      }

      acc.push(node);
      return acc;
    }, []);
  });

  return Tokenizer.stringify(sel);
};

