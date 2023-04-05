"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * Returns the highest upperbound index value above the validTop value, starting with an index value and incrementing the index value.
 * @param {array} scrollItems - Items with the offsetTop value and height repsenting the nodes of each list item.
 * @param {number} index - Index value to begin from when finding the hidden index value.
 * @param {number} validTop - Upper visual bounds offsetTop value to use for virtualization.
 */
var getTopFromTopDown = function getTopFromTopDown(scrollItems, index, validTop) {
  var lastHidden = {
    index: -1,
    height: -1
  };
  for (var i = index; i < scrollItems.length; i += 1) {
    var item = scrollItems[i];
    if (item.offsetTop + item.height <= validTop) {
      lastHidden.index = i;
      lastHidden.height = item.offsetTop + item.height;
    } else {
      break;
    }
  }
  return lastHidden;
};

/**
 * Returns the highest upperbound index value above the validTop value, starting from an index value and decrementing the index value.
 * @param {array} scrollItems - Items with the offsetTop value and height repsenting the nodes of each list item.
 * @param {number} index - Index value to begin from when finding the hidden index value.
 * @param {number} validTop - Upper visual bounds offsetTop value to use for virtualization.
 */
var getTopFromBottomUp = function getTopFromBottomUp(scrollItems, index, validTop) {
  var nextHidden = {
    index: -1,
    height: -1
  };
  for (var i = index; i >= 0; i -= 1) {
    var item = scrollItems[i];
    if (item.offsetTop + item.height <= validTop) {
      nextHidden.index = i;
      nextHidden.height = item.offsetTop + item.height;
      break;
    }
  }
  return nextHidden;
};

/**
 * Returns the lowest lowerbound index value below the validBottom value, starting from an index value and incrementing the index value.
 * @param {array} scrollItems - Items with the offsetTop value and height repsenting the nodes of each list item.
 * @param {number} index - Index value to begin from when finding the hidden index value.
 * @param {number} validBottom - Lower visual bounds offsetTop value to use for virtualization.
 */
var getBottomFromTopDown = function getBottomFromTopDown(scrollItems, index, validBottom) {
  var nextHidden = {
    index: -1,
    height: -1
  };
  var finalItem = scrollItems[scrollItems.length - 1];
  for (var i = index; i < scrollItems.length; i += 1) {
    var item = scrollItems[i];
    if (item.offsetTop >= validBottom) {
      nextHidden.index = i;
      nextHidden.height = finalItem.offsetTop + finalItem.height - item.offsetTop;
      break;
    }
  }
  return nextHidden;
};

/**
 * Returns the lowest lowerbound index value below the validBottom value, starting with an index value and decrementing the index value.
 * @param {array} scrollItems - Items with the offsetTop value and height repsenting the nodes of each list item.
 * @param {number} index - Index value to begin from when finding the hidden index value.
 * @param {number} validBottom - Lower visual bounds offsetTop value to use for virtualization.
 */
var getBottomFromBottomUp = function getBottomFromBottomUp(scrollItems, index, validBottom) {
  var lastHidden = {
    index: -1,
    height: -1
  };
  var finalItem = scrollItems[scrollItems.length - 1];
  for (var i = index; i >= 0; i -= 1) {
    var item = scrollItems[i];
    if (item.offsetTop >= validBottom) {
      lastHidden.index = i;
      lastHidden.height = finalItem.offsetTop + finalItem.height - item.offsetTop;
    } else {
      break;
    }
  }
  return lastHidden;
};

/**
 * Returns the bottom and top hidden items containing the hidden indexes and placeholder heights.
 * @param {array} scrollItems - Items with the offsetTop value and height repsenting the nodes of each list item.
 * @param {object} contentData - Bounds and scrollheight data for the content node.
 * @param {number} previousTopIndex - Index value of the previous hidden top item.
 * @param {number} previousBottomIndex - Index value of the previous hidden bottom item.
 */
var getHiddenItems = function getHiddenItems(scrollItems, contentData, previousTopIndex, previousBottomIndex) {
  if (!scrollItems || !scrollItems.length) {
    return {
      topHiddenItem: {
        index: -1,
        height: -1
      },
      bottomHiddenItem: {
        index: -1,
        height: -1
      }
    };
  }
  var validTop = contentData.validTop,
    validBottom = contentData.validBottom;
  var topHiddenItem;
  if (validTop > 0) {
    var _nextIndex = previousTopIndex;
    if (_nextIndex < 0) {
      _nextIndex = 0;
    }
    var topItem = scrollItems[_nextIndex];
    if (topItem.offsetTop + topItem.height <= validTop) {
      topHiddenItem = getTopFromTopDown(scrollItems, _nextIndex, validTop);
    } else {
      topHiddenItem = getTopFromBottomUp(scrollItems, _nextIndex, validTop);
    }
  } else {
    topHiddenItem = {
      index: -1,
      height: -1
    };
  }
  var bottomHiddenItem;
  var nextIndex = previousBottomIndex;
  if (nextIndex < 0) {
    nextIndex = 0;
  }
  var bottomItem = scrollItems[nextIndex];
  if (bottomItem.offsetTop >= validBottom) {
    bottomHiddenItem = getBottomFromBottomUp(scrollItems, nextIndex, validBottom);
  } else {
    bottomHiddenItem = getBottomFromTopDown(scrollItems, nextIndex, validBottom);
  }
  return {
    topHiddenItem: topHiddenItem,
    bottomHiddenItem: bottomHiddenItem
  };
};

/**
 * Returns relevant scrolling and height information to be used to calculation visible items for virtualization.
 * @param {node} contentNode - Html node of the scroll parent.
 */
var getContentData = function getContentData(contentNode) {
  var scrollTop = contentNode.scrollTop,
    scrollHeight = contentNode.scrollHeight,
    clientHeight = contentNode.clientHeight;
  return {
    scrollTop: scrollTop,
    scrollHeight: scrollHeight,
    clientHeight: clientHeight,
    validTop: scrollTop - 0.5 * clientHeight,
    validBottom: scrollTop + 1.5 * clientHeight
  };
};

/**
 * Returns whether or not the scroll position is in a position where further data should be requested.
 * @param {object} contentData - Bounds and scrollheight data for the content node.
 */
var shouldTriggerItemRequest = function shouldTriggerItemRequest(contentData) {
  return contentData.scrollHeight - (contentData.scrollTop + contentData.clientHeight) < contentData.clientHeight;
};

/**
 * Returns the visible children for render after they've been passed to the provided wrapper function for any props adjustments.
 * @param {array} scrollGroups - Groups of scroll items with the offsetTop value and height repsenting the nodes of each list item.
 * @param {array} childrenArray -  Children that map to the visible scroll items.
 * @param {number} topIndex -  Index of the top hidden component.
 * @param {number} bottomIndex -  Index of the bottom hidden component.
 * @param {func} wrapperFunction -  Function whose retrun value should be the child with completed props.
 * @param {number} upperChildIndex -  Maximum upper index to be rendered, used to prevent new children from being included.
 */
var getVisibleChildren = function getVisibleChildren(scrollGroups, childrenArray, topIndex, bottomIndex, wrapperFunction, upperChildIndex) {
  if (!childrenArray.length) {
    return null;
  }
  var noTopIndex = false;
  var validTopIndex = topIndex;
  if (validTopIndex < 0) {
    validTopIndex = -1;
    noTopIndex = true;
  }
  var noBottomIndex = false;
  var validBottomIndex = bottomIndex;
  if (validBottomIndex < 0) {
    validBottomIndex = scrollGroups.length;
    noBottomIndex = true;
  }
  var visibleChildren = [];
  if (!noTopIndex || !noBottomIndex) {
    for (var i = validTopIndex + 1; i < validBottomIndex; i += 1) {
      var scrollGroup = scrollGroups[i].items;
      var scrollGroupLength = scrollGroup.length;
      for (var j = 0; j < scrollGroupLength; j += 1) {
        var itemIndex = scrollGroup[j];
        visibleChildren.push(wrapperFunction(childrenArray[itemIndex], itemIndex, true));
      }
    }
    return visibleChildren;
  }
  for (var _i = 0; _i < upperChildIndex; _i += 1) {
    visibleChildren.push(wrapperFunction(childrenArray[_i], _i, true));
  }
  return visibleChildren;
};

/**
 * Returns the new children for render after they've been passed to the provided wrapper function for any props adjustments.
 * @param {number} lastCount - The child count prior to these new children being added.
 * @param {array} childrenArray -  Array containing the child ListItems.
 * @param {func} wrapperFunction -  Function whose retrun value should be the child with completed props.
 */
var getNewChildren = function getNewChildren(lastCount, childrenArray, wrapperFunction) {
  var newChildren = [];
  for (var i = lastCount; i < childrenArray.length; i += 1) {
    newChildren.push(wrapperFunction(childrenArray[i], i, true));
  }
  return newChildren;
};
var ScrollUtils = {
  getHiddenItems: getHiddenItems,
  getContentData: getContentData,
  getNewChildren: getNewChildren,
  getVisibleChildren: getVisibleChildren,
  shouldTriggerItemRequest: shouldTriggerItemRequest
};
var _default = ScrollUtils;
exports.default = _default;