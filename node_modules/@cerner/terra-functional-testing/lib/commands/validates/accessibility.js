/**
 * Analyzes the current documentation for accessibility violations.
 * @param {Object} options - Optional axe configuration overrides.
 */
function accessibility(options = {}) {
  expect().toBeAccessible(options);
}
module.exports = accessibility;