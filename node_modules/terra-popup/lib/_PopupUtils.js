"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
/**
 * Map of horizontalvalues from terra-popup API to terra-hooshot
 */
var HORIZONTAL_HOOKSHOT_MAP = {
  center: 'center',
  left: 'start',
  right: 'end'
};
var MIRROR_LR = {
  center: 'center',
  start: 'end',
  end: 'start'
};
var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

/**
 * Checks if attachement is 'top' or 'bottom'.
 *
 * @ param {Object} attachement - The vertical and horizonal hookshot attachments.
 */
var isVerticalAttachment = function isVerticalAttachment(attachment) {
  return attachment.vertical !== 'middle';
};

/**
 * Calculates the bottom position of the element.
 *
 * @ param {Object} rect - The element's size and position relative to the viewport.
 */
var calculateBottomPosition = function calculateBottomPosition(rect) {
  return rect.top + rect.height;
};

/**
 * Calculates the right position of the element.
 *
 * @ param {Object} rect - The element's size and position relative to the viewport.
 */
var calculateRightPosition = function calculateRightPosition(rect) {
  return rect.left + rect.width;
};

/**
 * This function splits a given attachment into an object representing the corresponding vertical and horizontal values.
 *
 * @ param {string} attachment - The vertical-horizontal attachment value to split.
 */
var parseAttachment = function parseAttachment(attachment) {
  if (!attachment) {
    return {
      vertical: '',
      horizontal: ''
    };
  }
  var _attachment$split = attachment.split(' '),
    _attachment$split2 = (0, _slicedToArray2.default)(_attachment$split, 2),
    vertical = _attachment$split2[0],
    horizontal = _attachment$split2[1];
  return {
    vertical: vertical,
    horizontal: HORIZONTAL_HOOKSHOT_MAP[horizontal]
  };
};

/**
 * This function returns an attachment object containing the mirrored attachment values.
 *
 * @ param {Object} attachment - The vertical and horizonal hookshot attachments.
 */
var mirrorAttachment = function mirrorAttachment(attachment) {
  if (attachment.vertical !== 'middle') {
    return {
      vertical: MIRROR_TB[attachment.vertical],
      horizontal: attachment.horizontal
    };
  }
  return {
    vertical: attachment.vertical,
    horizontal: MIRROR_LR[attachment.horizontal]
  };
};

/**
 * This method calculates the horizontal offset to be applied to the content. Considers if the target's
 * horizontal attachment is different than the contents attachment or the target's width is smaller than
 * the arrow's position.
 *
 * @ param {Object} cAttachment - The vertical and horizonal hookshot attachments of the content.
 * @ param {Object} tAttachment - The vertical and horizonal hookshot attachments of the target.
 * @ param {func} targetNode - The target element for the popup to anchor to.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var getContentOffset = function getContentOffset(cAttachment, tAttachment, targetNode, arrowOffset, cornerOffset) {
  var offset = {
    vertical: 0,
    horizontal: 0
  };
  if (targetNode) {
    var segment = arrowOffset + cornerOffset;
    if (isVerticalAttachment(cAttachment)) {
      if (cAttachment.horizontal !== tAttachment.horizontal) {
        // If the target and content attachement are different, apply the offset
        if (cAttachment.horizontal === 'start') {
          offset.horizontal = -segment;
        } else if (cAttachment.horizontal === 'end') {
          offset.horizontal = segment;
        }
      } else if (targetNode.clientWidth < segment) {
        // If the target size is smaller than the arrow position
        if (cAttachment.horizontal === 'start') {
          offset.horizontal = -segment;
        } else if (cAttachment.horizontal === 'end') {
          offset.horizontal = segment;
        }
      }
    }
  }
  return offset;
};

/**
 * Checks if the arrow offset fits within both the left and right bounds of the target.
 *
 * @ param {Object} contentRect - The content element's size and position relative to the viewport.
 * @ param {Object} targetRect -  The target element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var doesArrowFitHorizontal = function doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset) {
  var fitsLeftBound = calculateRightPosition(contentRect) - arrowOffset - cornerOffset >= targetRect.left;
  var fitsRightBound = contentRect.left + arrowOffset + cornerOffset <= calculateRightPosition(targetRect);
  return fitsLeftBound && fitsRightBound;
};

/**
 * Checks if the arrow offset fits within both the top and bottom bounds of the target.
 *
 * @ param {Object} contentRect - The content element's size and position relative to the viewport.
 * @ param {Object} targetRect -  The target element's size and position relative to the viewport.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var doesArrowFitVertical = function doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset) {
  var fitsTopBound = calculateBottomPosition(contentRect) - arrowOffset - cornerOffset >= targetRect.top;
  var fitsBottomBound = contentRect.top + arrowOffset + cornerOffset <= calculateBottomPosition(targetRect);
  return fitsTopBound && fitsBottomBound;
};

/**
 * Manually calculates the arrow position as a fallback when primary positioning fails.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var getSecondaryArrowPosition = function getSecondaryArrowPosition(contentPosition, targetPosition, arrowOffset, cornerOffset) {
  var contentRect = contentPosition.rect;
  var targetRect = targetPosition.rect;
  var contentAttachment = contentPosition.attachment;
  var overlaps = {};
  overlaps.right = calculateRightPosition(contentRect) >= targetRect.left && calculateRightPosition(contentRect) <= calculateRightPosition(targetRect) - arrowOffset;
  overlaps.bottom = calculateBottomPosition(contentRect) >= targetRect.top && calculateBottomPosition(contentRect) <= calculateBottomPosition(targetRect) - arrowOffset;
  overlaps.left = contentRect.left >= targetRect.left + arrowOffset && contentRect.left <= calculateRightPosition(targetRect);
  overlaps.top = contentRect.top >= targetRect.top + arrowOffset && contentRect.top <= calculateBottomPosition(targetRect);
  var positions = [];
  if (overlaps.right || overlaps.left) {
    if (doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset)) {
      if (overlaps.left) {
        positions.push('left');
      }
      if (overlaps.right) {
        positions.push('right');
      }
    }
  }
  if (overlaps.bottom || overlaps.top) {
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      if (overlaps.top) {
        positions.push('top');
      }
      if (overlaps.bottom) {
        positions.push('bottom');
      }
    }
  }
  if (positions.length > 1) {
    if (contentAttachment.vertical === 'middle' && positions.indexOf(contentAttachment.horizontal) >= 0) {
      return contentAttachment.horizontal;
    }
    if (positions.indexOf(contentAttachment.vertical) >= 0) {
      return contentAttachment.vertical;
    }
  }
  return positions[0];
};

/**
 * This method calculates the arrow position based on the content and target's relative positions.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var getArrowPosition = function getArrowPosition(contentPosition, targetPosition, arrowOffset, cornerOffset) {
  var contentRect = contentPosition.rect;
  var targetRect = targetPosition.rect;

  // If content is fully above the target, try to attach arrow on the bottom
  if (calculateBottomPosition(contentRect) <= targetRect.top) {
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'bottom';
    }
  } else if (calculateRightPosition(contentRect) <= targetRect.left) {
    // If content is fully to the left of the target, try to attach arrow on the right
    if (doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'right';
    }
  } else if (contentRect.top >= calculateBottomPosition(targetRect)) {
    // If content is fully below the target, try to attach arrow on the top
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'top';
    }
  } else if (contentRect.left >= calculateRightPosition(targetRect)) {
    // If content is fully to the right of the target, try to attach arrow on the left
    if (doesArrowFitVertical(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'left';
    }
  }

  // If arrow attachement did not fit, try the secondary position
  return getSecondaryArrowPosition(contentPosition, targetPosition, arrowOffset, cornerOffset);
};

/**
 * This method caculates the horizonal offset value to be applied to the left position of the popup arrow.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var leftOffset = function leftOffset(contentPosition, targetPosition, arrowOffset, cornerOffset) {
  var contentRect = contentPosition.rect;
  var targetRect = targetPosition.rect;
  var targetAttachmet = targetPosition.attachment;
  var offset = targetRect.left - contentRect.left + arrowOffset + targetPosition.offset.horizontal;
  if (targetAttachmet.horizontal === 'center') {
    offset += targetRect.width / 2;
  } else if (targetAttachmet.horizontal === 'right') {
    offset += targetRect.width;
  }

  // Check that the offset places the arrow within the contents width
  if (offset < 2 * arrowOffset + cornerOffset) {
    // Offset is too far left
    offset = 2 * arrowOffset + cornerOffset;
  } else if (offset > contentRect.width - cornerOffset) {
    // Offset is too far right
    offset = contentRect.width - cornerOffset;
  }
  return "".concat(offset, "px");
};

/**
 * This method caculates the vertial offset value to be applied to the top position of the popup arrow.
 *
 * @ param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @ param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @ param {number} arrowOffset - Half the base of the arrow.
 * @ param {number} cornerOffset - The rounded corner size of the content.
 */
var topOffset = function topOffset(contentPosition, targetPosition, arrowOffset, cornerOffset) {
  var contentRect = contentPosition.rect;
  var targetRect = targetPosition.rect;
  var targetAttachmet = targetPosition.attachment;
  var offset = targetRect.top - contentRect.top + arrowOffset + targetPosition.offset.vertical;
  if (targetAttachmet.vertical === 'middle') {
    offset += targetRect.height / 2;
  } else if (targetAttachmet.vertical === 'bottom') {
    offset += targetRect.height;
  }

  // Check that the offset places the arrow within the contents height
  if (offset < 2 * arrowOffset + cornerOffset) {
    // Offset is too far above
    offset = 2 * arrowOffset + cornerOffset;
  } else if (offset > contentRect.height - cornerOffset) {
    // Offset is too far below
    offset = contentRect.height - cornerOffset;
  }
  return "".concat(offset, "px");
};
var PopupUtils = {
  isVerticalAttachment: isVerticalAttachment,
  getContentOffset: getContentOffset,
  getArrowPosition: getArrowPosition,
  leftOffset: leftOffset,
  mirrorAttachment: mirrorAttachment,
  parseAttachment: parseAttachment,
  topOffset: topOffset
};
var _default = PopupUtils;
exports.default = _default;