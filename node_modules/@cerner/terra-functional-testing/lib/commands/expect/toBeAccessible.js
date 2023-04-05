/* global Terra */
const {
  runAxe
} = require('../axe');

/**
 * Invokes axe analysis on the current document and asserts there are no accessibility violations.
 * @param {*} _ - Unused param. The expect is always run on the current document.
 * @param {Object} options - Optional axe configuration overrides.
 * @returns {Object} - An object that indicates if the assertion passed or failed with a message.
 */
function toBeAccessible(_, options = {}) {
  const {
    axe
  } = Terra;
  const {
    rules
  } = axe;
  const {
    result
  } = runAxe(options);
  const {
    violations
  } = result;
  const errors = [];
  const warnings = [];
  violations.forEach(violation => {
    const {
      id
    } = violation;
    if (rules[id] && rules[id].warn === true) {
      warnings.push(violation);
    } else {
      errors.push(violation);
    }
  });
  if (warnings.length > 0) {
    process.emit('terra:report:accessibility', {
      warnings
    });
  }
  return {
    pass: errors.length === 0,
    message: () => `expected no accessibility violations but received ${JSON.stringify(errors, null, 2)}`
  };
}
module.exports = toBeAccessible;