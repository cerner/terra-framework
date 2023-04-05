const removeCssModulesPseudoClasses = require('./_removeCssModulesPseudoClasses');
const getThemeConfig = require('../utils/_getThemeConfig');

const SUPPORTED_THEMES = [
  'orion-fusion-theme',
  'clinical-lowlight-theme',
  'cerner-clinical-theme',
  'terra-default-theme',
];

/**
 * The purpose of this plugin is to create a default theme from a scoped theme
 * and to remove any supported themes that are not desired.
 */
module.exports = (config) => {
  // Retrieve theme config.
  const themeConfig = config || getThemeConfig();

  // Add the . to find the selector.
  const defaultThemeSelector = `.${themeConfig.theme}`;

  const scopedThemes = themeConfig.scoped || [];

  // Find the set of known themes that should not be included.
  const themesToRemove = SUPPORTED_THEMES.reduce((acc, theme) => {
    if (!scopedThemes.includes(theme)) {
      acc.push(`.${theme}`);
    }
    return acc;
  }, []);

  return {
    postcssPlugin: 'terra-theme-plugin',
    Once(root) {
      if (defaultThemeSelector || themesToRemove.length) {
        root.walkRules((node) => {
          // Scrub css modules pseudo classes from the selector
          const selector = removeCssModulesPseudoClasses(node.selector);
          // Clone the default theme node and apply as root.
          if (selector === defaultThemeSelector) {
            const clone = node.clone({ selector: ':root' });
            root.append(clone);
          }

          // Remove the undesired theme node from it's parent.
          if (themesToRemove.includes(selector)) {
            node.parent.removeChild(node);
          }
        });
      }
    },
  };
};
module.exports.postcss = true;// distinguish between require('plugin') and require('plugin')(opts) end-user calls
