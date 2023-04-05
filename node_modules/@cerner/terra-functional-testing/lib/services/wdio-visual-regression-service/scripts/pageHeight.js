"use strict";

/**
 * Script to set the document height.
 *
 * @param {string} height - The height to set the document to.
 * @returns {undefined}
 */
function pageHeight(height) {
  document.body.style.height = height;
}
module.exports = pageHeight;