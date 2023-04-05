module.exports = function (filename, suffix) {
  if (typeof filename !== 'string') {
    throw new TypeError('Expected a string as filename')
  }

  if (!suffix) {
    return filename
  }

  return filename.replace(/(\.[a-zA-Z0-9]+)?$/, suffix + '$1')
}
