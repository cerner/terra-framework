const describeViewports = require('./describeViewports');

/**
 * Mocha describe block to filter tests based on form factors, locales, and themes.
 * The block of tests will only execute if the form factor, locale, and theme in the current configuration match what is defined in the options.
 * If any option is not defined, then the block of tests will not be filtered based on that particular option.
 * @param {string} title - The describe block title.
 * @param {Object} options - An object containing arrays of formFactors, locales, and themes that the block of tests will only qualify to execute in.
 * @param {string} options.formFactors - The form factors that the block of tests only execute in.
 * @param {string} options.locales -  The language locales that the block of tests only execute in.
 * @param {string} options.themes - The themes that the block of tests only execute in.
 * @param {function} - The block of tests to execute based on the defined form factor, locale, and theme.
 */
const describeTests = (title, options = {}, fn) => {
  let {
    formFactor,
    locale,
    theme
  } = global.Terra.serviceOptions;
  const {
    formFactors,
    locales,
    themes
  } = options;
  formFactor = formFactor || 'huge';
  locale = locale || 'en';
  theme = theme || 'terra-default-theme';
  if (formFactors && !formFactors.includes(formFactor)) {
    return;
  }
  if (locales && !locales.includes(locale)) {
    return;
  }
  if (themes && !themes.includes(theme)) {
    return;
  }
  describeViewports(title, formFactors || ['huge'], fn);
};
module.exports = describeTests;