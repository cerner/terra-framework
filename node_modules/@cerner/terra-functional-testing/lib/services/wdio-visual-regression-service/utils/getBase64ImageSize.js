"use strict";

var sizeOf = require('image-size');
function getBase64ImageSize(base64Screenshot) {
  var buffer = new Buffer.from(base64Screenshot, 'base64'); // eslint-disable-line new-cap
  var size = sizeOf(buffer);
  return size;
}
module.exports = getBase64ImageSize;