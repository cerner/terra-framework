"use strict";

function getBoundingRect(selector) {
  var elements = document.querySelectorAll(selector);
  return Array.prototype.map.call(elements, function (elem) {
    var boundingRect = elem.getBoundingClientRect();
    return {
      top: boundingRect.top,
      right: boundingRect.right,
      bottom: boundingRect.bottom,
      left: boundingRect.left
    };
  });
}
module.exports = getBoundingRect;