const focusableElementSelector = 'a[href]:not([tabindex=\'-1\']), area[href]:not([tabindex=\'-1\']), input:not([disabled]):not([tabindex=\'-1\']), '
        + "select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), "
        + "iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])";

/* NOTE: This method doesn't include check for element.closest('[inert]') === null in purpose
 * The method is caled on initial render to ensure the cell has no interactable elements, and set the cell tabindex based on that.
 * on render one of the parent elements has inert="" which made it always return no interactible elements for every cell.
*/
export const getFocusableElements = (parentElement) => [...parentElement.querySelectorAll(`${focusableElementSelector}`)].filter(
  element => !element.hasAttribute('disabled')
      && !element.getAttribute('aria-hidden')
      && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
      && window.getComputedStyle(element).visibility !== 'hidden',
);

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
 * Move focus to next focusable element outside the container element
 */
export const moveFocusFromElement = (containerRef, id, moveForward) => {
  // get focusable elements from the documen, filter out the container and its children
  const focusableElements = getFocusableElements(document.body).filter(
    element => (element.id === id || !containerRef.current.contains(element)),
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
 * @param {object} focusedCell - a { row, cell } pair, where row and cell are indexes of currently focused semantic row and a cell within that row.
 * @param {number} numberOfColumns - a number of visual columns.
 * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
 * @param {number} rowsLength - a total number of seamntic rows in the list.
 * @returns - a { row, cell } indexes pair to focus on.
 */
export const handleDownKey = (focusedCell, numberOfColumns, flowHorizontally, rowsLength) => {
  const { row, cell } = focusedCell;
  let visualColumnNumber;
  if (flowHorizontally) {
    visualColumnNumber = row % numberOfColumns;
    const nextRow = row + numberOfColumns;
    if (nextRow > rowsLength - 1) {
      if (visualColumnNumber === numberOfColumns - 1) {
        // the last semantic row in the last visual column, focus shouldn't go anywhere
        return focusedCell;
      }
      // the last semantic row in current visual column, focus should move to the next visual column
      return { row: visualColumnNumber + 1, cell };
    }
    return { row: nextRow, cell };
  }
  // vertical flow
  const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
  const numberOfPlaceholders = (rowsPerColumn * numberOfColumns) - rowsLength;
  if ((numberOfPlaceholders === 0 && row + 1 === rowsLength) || (numberOfPlaceholders !== 0 && row + 1 === rowsLength + numberOfPlaceholders - 1)) {
    // the last semantic row in the last visual column, focus shouldn't go anywhere
    return focusedCell;
  }
  // focus should go to the next semantic row except placeholder rows
  visualColumnNumber = Math.floor(row / rowsPerColumn);
  const nextRowIsLastRow = ((row + 2) % rowsPerColumn === 0);
  const lastRowIsPlaceholder = !(numberOfColumns - numberOfPlaceholders > visualColumnNumber);
  const placeholderShift = nextRowIsLastRow && lastRowIsPlaceholder ? 1 : 0;
  return { row: row + 1 + placeholderShift, cell };
};

/**
 *
 * @param {focusedCellShape} focusedCell - a { row, cell } pair, where row and cell are indexes of currently focused semantic row and a cell within that row.
 * @param {number} numberOfColumns - a number of visual columns.
 * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
 * @param {number} rowsLength - a total number of seamntic rows in the list.
 * @returns - a { row, cell } indexes pair to focus on.
 */
export const handleUpKey = (focusedCell, numberOfColumns, flowHorizontally, rowsLength) => {
  const { row, cell } = focusedCell;
  if (row === 0) {
    // the first semantic row, focus shouldn't go anywhere
    return focusedCell;
  }
  const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
  let visualColumnNumber;
  if (flowHorizontally) {
    visualColumnNumber = row % numberOfColumns;
    if (row === visualColumnNumber) {
      // the first semantic row in current visual column, focus should move to the previous visual column last semantic row
      let newRow = (numberOfColumns * rowsPerColumn) - (numberOfColumns - (visualColumnNumber - 1));
      if (newRow > rowsLength - 1) {
        newRow -= numberOfColumns;
      }
      return { row: newRow, cell };
    }
    // moving focus ove visual row up
    return { row: row - numberOfColumns, cell };
  }
  // vertical flow
  const numberOfPlaceholders = (rowsPerColumn * numberOfColumns) - rowsLength;
  // focus should go to the next semantic row except placeholder rows
  visualColumnNumber = Math.floor(row / rowsPerColumn);
  const isFirstRowInVisualColumn = (row % rowsPerColumn === 0);
  const previousColumnHasPlaceholder = !(numberOfColumns - numberOfPlaceholders > visualColumnNumber - 1);
  const placeholderShift = isFirstRowInVisualColumn && previousColumnHasPlaceholder ? 1 : 0;
  return { row: row - 1 - placeholderShift, cell };
};

/**
   * Finds the first semantic row index in a visual row, where the given row is located
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} row - an index of the currently focused semantic row.
   * @returns - the index of the first semantic row in the same visual row as currently focused row.
   */
const getFirstSemanticRowIndexInVisualRow = (rowsLength, numberOfColumns, flowHorizontally, row) => {
  if (row === undefined || row === null) {
    return 0;
  }
  if (flowHorizontally) {
    const firstItemInVisualRow = (Math.floor(row / numberOfColumns) * numberOfColumns);
    return firstItemInVisualRow;
  }
  const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
  const visualColumnNumber = Math.floor(row / rowsPerColumn);
  const firstItemInVisualRow = row - (visualColumnNumber * rowsPerColumn);
  return firstItemInVisualRow;
};

/**
   * Calculates new semantic row and cell indexes to focus on per LEFT ARROW KEY press.
   * @param {KeyboardEvent} event - keyboard event.
   * @param {object} focusedCell - a { row, cell } pair, where row and cell are indexes of currently focused semantic row and a cell within that row.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} cellsLength - a number of cells in a semantic row.
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @returns - an object { row, cell } for the new cell to focus on.
   */
export const handleLeftKey = (event, focusedCell, numberOfColumns, flowHorizontally, cellsLength, rowsLength) => {
  const { row, cell } = focusedCell;
  const firstItemInVisualRow = getFirstSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
  if (event.metaKey) {
    if (event.ctrlKey) {
      // Mac: Ctrl + Cmd + Left
      // Windows: Ctrl + Home
      // Focus moves to the first cell in the first item in the list.
      return { row: 0, cell: 0 };
    }
    // Mac: Cmd + Left
    // Win: Home
    // Focus moves to the first cell in the first item in the visual row.
    return { row: firstItemInVisualRow, cell: 0 };
  }
  // Focus should go till the start of the visual row, and should not break to the previous visual row.

  if (cell === 0) {
    let nextCell = cell;
    let nextRow = row;
    if (row === 0 || row === firstItemInVisualRow) {
      // The first item in the list, or the first item in the visual row.
      // Focus should stay where it is.
      return focusedCell;
    }
    // The first cell. Focus moves to the last cell of the semantic row to the left.
    nextCell = cellsLength - 1;
    nextRow -= flowHorizontally ? 1 : Math.ceil(rowsLength / numberOfColumns);
    return { row: nextRow, cell: nextCell };
  }
  // Not first cell. Focus moves within the row to the next cell to the left.
  return { row, cell: cell - 1 };
};

/**
   * Finds the last semantic row index in a visual row, where the given row is located
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} row - an index of the currently focused semantic row.
   * @returns - the index of the last semantic row in the same visual row as currently focused row.
   */
const getLastSemanticRowIndexInVisualRow = (rowsLength, numberOfColumns, flowHorizontally, row) => {
  if (flowHorizontally) {
    if (row === undefined || row === null) {
      // If current row omitted, return the index of the last element
      return rowsLength - 1;
    }
    const lastItemInVisualRow = (Math.ceil((row + 1) / numberOfColumns) * numberOfColumns) - 1;
    return lastItemInVisualRow < rowsLength - 1 ? lastItemInVisualRow : rowsLength - 1;
  }
  const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
  const numberOfPlaceholders = (rowsPerColumn * numberOfColumns) - rowsLength;
  if ((row === undefined || row === null)) {
    // If current row omitted, return the index of the last element in the last visual row for vertical flow
    return (rowsPerColumn * numberOfColumns) - (rowsPerColumn * numberOfPlaceholders) - 1;
  }
  const visualColumnNumber = Math.floor(row / rowsPerColumn);
  const isLastRow = ((row + 1) % rowsPerColumn === 0);
  const columnsTillRowEnd = numberOfColumns - (isLastRow ? numberOfPlaceholders : 0) - (visualColumnNumber + 1);
  return row + columnsTillRowEnd * rowsPerColumn;
};

/**
   * Calculates new semantic row and cell indexes to focus on per RIGHT ARROW KEY press.
   * @param {KeyboardEvent} event - keyboard event.
   * @param {object} focusedCell - a { row, cell } pair, where row and cell are indexes of currently focused semantic row and a cell within that row.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} cellsLength - a number of cells in a semantic row.
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @returns - an object { row, cell } for the new cell to focus on.
   */
export const handleRightKey = (event, focusedCell, numberOfColumns, flowHorizontally, cellsLength, rowsLength) => {
  const { row, cell } = focusedCell;
  let nextRow = row;
  let nextCell = cell;
  if (event.metaKey) {
    if (event.ctrlKey) {
      // Mac: Ctrl + Cmd + Right
      // Windows: Ctrl + End
      // Focus moves to the last cell in the last item in the list.

      // Omit row index for the last element in the list
      nextRow = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally);
      nextCell = cellsLength - 1;
      return { row: nextRow, cell: nextCell };
    }
    // Mac: Cmd + Right
    // Win: End
    // Focus moves to the last cell in the last item in the visual row.
    nextCell = cellsLength - 1;
    nextRow = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
    return { row: nextRow, cell: nextCell };
  }
  // Focus should go till the end of the visual row, and should not break to the next visual row.
  if (cell === (cellsLength - 1)) {
    // The last semantic column in the row.
    // Check if the last item in visual row.
    const lastRowIndex = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
    if (row === lastRowIndex) {
      // The last item in the visual row or next semantic row to the right is a placeholder.
      // Focus should not move anywhere.
      return { row, cell };
    }
    // Focus moves to the first cell of the next semantic row.
    nextCell = 0;
    nextRow += flowHorizontally ? 1 : Math.ceil(rowsLength / numberOfColumns);
  } else {
    // Focus moves to the next cell to the right in the same semantic row.
    nextCell += 1;
  }
  return { row: nextRow, cell: nextCell };
};

/**
   * Calculates new semantic row and cell indexes to focus on per END KEY press.
   * @param {KeyboardEvent} event - keyboard event.
   * @param {object} focusedCell - a { row, cell } pair, where row and cell are indexes of currently focused semantic row and a cell within that row.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} cellsLength - a number of cells in a semantic row.
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @returns - an object { row, cell } for the new cell to focus on.
   */
export const handleEndKey = (event, focusedCell, numberOfColumns, flowHorizontally, cellsLength, rowsLength) => {
  const { row, cell } = focusedCell;
  let nextRow = row;
  let nextCell = cell;
  if (event.metaKey && event.ctrlKey) {
    // Focus moves to the last cell in the last item in the list.

    // Omiting row index for the last element in the list
    nextRow = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally);
    nextCell = cellsLength - 1;
    return { row: nextRow, cell: nextCell };
  }
  // Focus moves to the last cell in the last item in the visual row.
  nextCell = cellsLength - 1;
  nextRow = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
  return { row: nextRow, cell: nextCell };
};

/**
   * Calculates new semantic row and cell indexes to focus on per HOME ARROW KEY press.
   * @param {KeyboardEvent} event - keyboard event.
   * @param {object} focusedCell - a { row, cell } pair, where row and cell are indexes of currently focused semantic row and a cell within that row.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @returns - an object { row, cell } for the new cell to focus on.
   */
export const handleHomeKey = (event, focusedCell, numberOfColumns, flowHorizontally, rowsLength) => {
  const { row } = focusedCell;
  if (event.metaKey && event.ctrlKey) {
    // Focus moves to the first cell in the first item in the list.
    return { row: 0, cell: 0 };
  }
  // Focus moves to the first cell in the first item in the visual row.
  const firstItemInVisualRow = getFirstSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
  return { row: firstItemInVisualRow, cell: 0 };
};
