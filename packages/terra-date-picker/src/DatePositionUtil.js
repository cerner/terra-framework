/**
 * Calculates the bottom position of the element.
 *
 * @param {Object} rect - The element's size and position relative to the viewport.
 */
const calculateBottomPosition = rect => (rect.top + rect.height);

/**
 * Calculates the right position of the element.
 *
 * @param {Object} rect - The element's size and position relative to the viewport.
 */
const calculateRightPosition = rect => (rect.left + rect.width);

/**
 * Checks if the arrow offset fits within both the left and right bounds of the target.
 *
 * @param {Object} contentRect - The content element's size and position relative to the viewport.
 * @param {Object} targetRect -  The target element's size and position relative to the viewport.
 * @param {number} arrowOffset - Half the base of the arrow.
 * @param {number} cornerOffset - The rounded corner size of the content.
 */
const doesArrowFitHorizontal = (contentRect, targetRect, arrowOffset, cornerOffset) => {
  const fitsLeftBound = calculateRightPosition(contentRect) - arrowOffset - cornerOffset >= targetRect.left;
  const fitsRightBound = contentRect.left + arrowOffset + cornerOffset <= calculateRightPosition(targetRect);

  return fitsLeftBound && fitsRightBound;
};

/**
 * This method calculates the arrow position based on the content and target's relative positions.
 *
 * @param {Object} contentPosition - The content x/y coords, rectangle, offset, and attachment.
 * @param {Object} targetPosition - The target x/y coords, rectangle, offset, and attachment.
 * @param {number} arrowOffset - Half the base of the arrow.
 * @param {number} cornerOffset - The rounded corner size of the content.
 */
const getArrowPosition = (contentPosition, targetPosition, arrowOffset, cornerOffset) => {
  const contentRect = contentPosition.rect;
  const targetRect = targetPosition.rect;

  // If content is fully above the target, try to attach arrow on the bottom
  if (calculateBottomPosition(contentRect) <= targetRect.top) {
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'bottom';
    }
  } else if (contentRect.top >= calculateBottomPosition(targetRect)) {
    // If content is fully below the target, try to attach arrow on the top
    if (doesArrowFitHorizontal(contentRect, targetRect, arrowOffset, cornerOffset)) {
      return 'top';
    }
  }

  return 'bottom';
};

const DatePositionUtils = {
  getArrowPosition,
};

export default DatePositionUtils;
