"use strict";

/**
 * Script to add or remove the scrollbars from the document.
 *
 * @param {boolean} enabled - Whether or not the scrollbars should be visible.
 * @returns {undefined}
 */
function scrollbars(enabled) {
  if (enabled) {
    document.documentElement.style.overflow = '';
  } else {
    document.documentElement.style.overflow = 'hidden';
  }
}
module.exports = scrollbars;