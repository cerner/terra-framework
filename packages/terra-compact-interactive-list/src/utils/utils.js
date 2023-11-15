/**
 * A column is responsive in following cases:
 * 1) flexGrow is set to true.
 * 2) there is no width prop set to a number.
 */
export const checkIfColumnIsResponsive = (flexGrow, width) => flexGrow || !(width && typeof width === 'number');

// A row is considered being responsive if it has at least one column that can grow or shrink (a flex column).
const checkIfAnyColumnIsResponsive = (total, column) => total || checkIfColumnIsResponsive(column.flexGrow, column.width);
export const checkIfRowHasResponsiveColumns = (columns) => columns.reduce(checkIfAnyColumnIsResponsive, false);

/**
 * A semantic row needs a maxWidth prop if:
 * 1) There is at least one flex column in the list.
 * 2) All flex columns have maximumWidth property set, or columnMaximumWidth was set for the whole list component.
 */
export const getRowMaximumWidth = (columns, columnMaximumWidth) => {
  let flexColumnWasFound = false;
  let maxWidth = 0;
  for (let i = 0; i < columns.length; i += 1) {
    if (checkIfColumnIsResponsive(columns[i].flexGrow, columns[i].width)) {
      flexColumnWasFound = true;
      if (columns[i].maximumWidth || columnMaximumWidth) {
        const colMaxWidth = columns[i].maximumWidth || columnMaximumWidth;
        maxWidth += colMaxWidth;
      } else { return null; }
    } else if (columns[i].width) {
      maxWidth += columns[i].width;
    } else { return null; }
  }
  return flexColumnWasFound ? maxWidth : null;
};

/**
 * A semantic row needs a minimumWidth prop if:
 * 1) There is at least one flex column in the list.
 * 2) All flex columns have minimumWidth property set, or columnMinimumWidth was set for the whole list component.
 */
export const getRowMinimumWidth = (columns, columnMinimumWidth) => {
  let flexColumnWasFound = false;
  let minWidth = 0;
  for (let i = 0; i < columns.length; i += 1) {
    if (checkIfColumnIsResponsive(columns[i].flexGrow, columns[i].width)) {
      flexColumnWasFound = true;
      if (columns[i].minimumWidth || columnMinimumWidth) {
        minWidth += columns[i].minimumWidth || columnMinimumWidth;
      } else { return null; }
    } else if (columns[i].width) {
      minWidth += columns[i].width;
    } else { return null; }
  }
  return flexColumnWasFound ? minWidth : null;
};

/**
 * @param {HTMLElement} element - The element to check if it is a text input
 * @returns True if the element is a text input. Otherwise, false.
 */
export const isTextInput = (element) => {
  const { tagName } = element;
  if (tagName.toLowerCase() === 'input') {
    const validTypes = ['text', 'password', 'number', 'email', 'tel', 'url', 'search', 'date', 'datetime', 'datetime-local', 'time', 'month', 'week'];
    const inputType = element.type;
    return validTypes.indexOf(inputType) >= 0;
  }

  return false;
};

/**
 * Move focus to next focusable element outside the data grid
 */
export const moveFocusFromGrid = (moveForward, id, containerRef) => {
  // add all elements we want to include in our selection
  const focusableElementSelector = 'a[href]:not([tabindex=\'-1\']), area[href]:not([tabindex=\'-1\']), input:not([disabled]):not([tabindex=\'-1\']), '
    + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
    + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

  const focusableElements = [...document.body.querySelectorAll(`${focusableElementSelector}`)].filter(
    element => !element.hasAttribute('disabled')
      && !element.getAttribute('aria-hidden')
      && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
      && window.getComputedStyle(element).visibility !== 'hidden'
      && element.closest('[inert]') === null
      && (element.id === id || !containerRef.current.contains(element)),
  );

  // Identify index of the active element in the DOM excluding data grid children
  const index = focusableElements.indexOf(containerRef.current);
  if (index > -1) {
    // Move focus outside data grid
    const indexOffset = moveForward ? 1 : -1;
    let newFocusElement;

    if (index + indexOffset < focusableElements.length) {
      newFocusElement = focusableElements[index + indexOffset];
    } else if (focusableElements[0].id !== id) {
      // eslint-disable-next-line prefer-destructuring
      newFocusElement = focusableElements[0];
    }

    if (newFocusElement) {
      newFocusElement.focus();
    }
  }
};

/**
 * Calculates the new cell to focus on the LEFT ARROW KEY press
 * @param {KeyboardEvent} event - keyboard event for Left Arrow Key press.
 * @param {number} row - an index of the currently focused row in row array.
 * @param {number} col - an index of the currently focused col in the item (semantic row) cells array.
 * @param {number} numberOfColumns - a number of visual columns.
 * @param {number} columnsLength - a number of seamntic columns (cells) in a visual column (item).
 * @returns - an object { row, col } for the new cell to focus on
 */
export const handleLeftKey = (event, row, col, numberOfColumns, columnsLength) => {
  let nextVisualRow = row;
  let nextSemanticCol = col;
  const lastItemInVisualRow = Math.ceil((row + 1) / numberOfColumns) * numberOfColumns;
  const firstItemInVisualRow = lastItemInVisualRow - numberOfColumns;
  if (event.metaKey) {
    // Mac: Cmd + Right
    // Win: End
    if (event.ctrlKey) {
      // Mac: Ctrl + Cmd + Right
      // Windows: Ctrl + End
      // Focus moves to the first cell in the first item in the list.
      nextVisualRow = 0;
      nextSemanticCol = 0;
      return { row: nextVisualRow, col: nextSemanticCol };
    }
    // Focus moves to the first cell in the first item in the visual row.
    nextSemanticCol = 0;
    nextVisualRow = firstItemInVisualRow;
    return { row: nextVisualRow, col: nextSemanticCol };
  }
  // Focus should go till the start of the visual row, and should not break to the previous visual row.
  if (col === 0) {
    // The first cell.
    if (row === 0 || row === firstItemInVisualRow) {
      // The first item in the list, or the first item in the visual row.
      return { row: nextVisualRow, col: nextSemanticCol };
    }
    nextSemanticCol = columnsLength - 1;
    nextVisualRow -= 1;
  } else {
    // Not first cell.
    nextSemanticCol -= 1;
  }
  return { row: nextVisualRow, col: nextSemanticCol };
};

/**
 *
 * Calculates the new cell to focus on the RIGHT ARROW KEY press.
 * @param {KeyboardEvent} event - keyboard event for Left Arrow Key press.
 * @param {number} row - an index of the currently focused row in row array.
 * @param {number} col - an index of the currently focused col in the item (semantic row) cells array.
 * @param {number} numberOfColumns - a number of visual columns.
 * @param {number} columnsLength - a number of seamntic columns (cells) in a visual column (item).
 * @param {number} rowsLength - a number of seamntic rows (items) in the list.
 * @returns - an object { row, col } for the new cell to focus on.
 */
export const handleRightKey = (event, row, col, numberOfColumns, columnsLength, rowsLength) => {
  let nextVisualRow = row;
  let nextSemanticCol = col;
  if (event.metaKey) {
    // Mac: Cmd + Right
    // Win: End
    if (event.ctrlKey) {
      // Mac: Ctrl + Cmd + Right
      // Windows: Ctrl + End
      // Focus moves to the last cell in the last item in the list.
      nextVisualRow = rowsLength - 1;
      nextSemanticCol = columnsLength - 1;
      return { row: nextVisualRow, col: nextSemanticCol };
    }
    // Focus moves to the last cell in the last item in the visual row.
    nextSemanticCol = columnsLength - 1;
    const lastItemInVisualRow = (Math.ceil((row + 1) / numberOfColumns) * numberOfColumns) - 1;
    nextVisualRow = lastItemInVisualRow < rowsLength - 1 ? lastItemInVisualRow : rowsLength - 1;
    return { row: nextVisualRow, col: nextSemanticCol };
  }
  // Focus should go till the end of the visual row, and should not break to the next visual row.
  if (col === (columnsLength - 1)) {
    // The last cell.
    if (row === rowsLength - 1 || (row + 1) % numberOfColumns === 0) {
      // The last item in the list, or the last item in the visual row.
      return { row: nextVisualRow, col: nextSemanticCol };
    }
    nextSemanticCol = 0;
    nextVisualRow += 1;
  } else {
    // Not last cell.
    nextSemanticCol += 1;
  }
  return { row: nextVisualRow, col: nextSemanticCol };
};

