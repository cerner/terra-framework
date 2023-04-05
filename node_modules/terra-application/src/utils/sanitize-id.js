/**
 * Replaces characters unsafe for ids with dashes.
 * @param {string} idString The string to sanitize.
 * @returns The sanitized string.
 */
function sanitizeId(idString) {
  return idString.replace(/[^A-Za-z\w\-:.]+/g, () => '-');
}

export default sanitizeId;
