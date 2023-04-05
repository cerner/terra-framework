"use strict";

/* eslint-disable no-param-reassign */
function groupBoundingRect(boundingRects) {
  return boundingRects.reduce(function (groupedBoundingRect, boundingRect) {
    if (typeof groupedBoundingRect.top === 'undefined' || groupedBoundingRect.top > boundingRect.top) {
      groupedBoundingRect.top = boundingRect.top;
    }
    if (typeof groupedBoundingRect.right === 'undefined' || groupedBoundingRect.right < boundingRect.right) {
      groupedBoundingRect.right = boundingRect.right;
    }
    if (typeof groupedBoundingRect.bottom === 'undefined' || groupedBoundingRect.bottom < boundingRect.bottom) {
      groupedBoundingRect.bottom = boundingRect.bottom;
    }
    if (typeof groupedBoundingRect.left === 'undefined' || groupedBoundingRect.left > boundingRect.left) {
      groupedBoundingRect.left = boundingRect.left;
    }
    return groupedBoundingRect;
  }, {});
}
/* eslint-enable no-param-reassign */

module.exports = groupBoundingRect;