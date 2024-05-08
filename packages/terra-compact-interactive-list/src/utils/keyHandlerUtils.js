import getFocusableElements from 'terra-table/lib/utils/focusManagement';

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
  if (flowHorizontally) {
    const visualColumnNumber = row % numberOfColumns;
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
  // focus should go to the next semantic row unless the last row
  return { row: row + 1 < rowsLength ? row + 1 : row, cell };
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
  if (flowHorizontally) {
    const visualColumnNumber = row % numberOfColumns;
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
  return { row: row - 1, cell };
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
   * Finds the last semantic row index in a visual row, where the given row is located
   * @param {number} rowsLength - a total number of seamntic rows in the list.
   * @param {number} numberOfColumns - a number of visual columns.
   * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
   * @param {number} row - an index of the currently focused semantic row.
   * @returns - the index of the last semantic row in the same visual row as currently focused row.
   */
const getLastSemanticRowIndexInVisualRow = (rowsLength, numberOfColumns, flowHorizontally, row) => {
  if (row === undefined || row === null) {
    // If current row omitted, return the index of the last element
    return rowsLength - 1;
  }
  if (flowHorizontally) {
    const lastItemInVisualRow = (Math.ceil((row + 1) / numberOfColumns) * numberOfColumns) - 1;
    return lastItemInVisualRow < rowsLength - 1 ? lastItemInVisualRow : rowsLength - 1;
  }
  const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
  const rowsToTop = row % rowsPerColumn;
  const lastItemInVisualRow = (numberOfColumns - 1) * rowsPerColumn + rowsToTop;
  return lastItemInVisualRow < rowsLength ? lastItemInVisualRow : lastItemInVisualRow - rowsPerColumn;
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

  if (cell === 0) {
    // Focus reached the beginning of the the semantic row.
    // Check if focus reached the beginning of the visual row.
    let nextCell = cell;
    let nextRow = row;
    if (row === 0) {
      // The first item in the list. Focus should stay where it is.
      return focusedCell;
    }
    if (!flowHorizontally) {
      // VERTICAL FLOW
      // Check if the first semantic row in a VISUAL row has been reached.
      const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
      if (row < rowsPerColumn) {
        // Focus should wrap to the previous visual row.
        const rowsToTop = row % rowsPerColumn;
        const previousVisualRow = rowsToTop - 1;
        const previousVisualRowlastSemanticRowIndex = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, previousVisualRow);
        return { row: previousVisualRowlastSemanticRowIndex, cell: cellsLength - 1 };
      }
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
      nextRow = rowsLength - 1;
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

  if (cell === (cellsLength - 1)) {
    // Focus reached the end of the semantic row.
    if (!flowHorizontally) {
      // VERTICAL FLOW
      // Check if the last semantic row in the LAST VISUAL row has been reached.
      const rowsPerColumn = Math.ceil(rowsLength / numberOfColumns);
      const lastVisualRowIndex = rowsPerColumn - 1;
      const lastSemanticRowInLastVisualRow = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, lastVisualRowIndex);
      if (row === lastSemanticRowInLastVisualRow) {
        // Focus should stay where it is and NOT move to the right.
        return { row, cell };
      }

      // Check if the last semantic row in ANY VISUAL row has been reached.
      const lastSemanticRowIndex = getLastSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
      if (row === lastSemanticRowIndex) {
        // Focus should wrap to the next next visual row.
        const rowsToTop = row % rowsPerColumn;
        return { row: rowsToTop + 1, cell: 0 };
      }
    }

    if (flowHorizontally && row === rowsLength - 1) {
      // HORIZONTAL FLOW
      // The last row in the list has been reached, focus should not move to the right.
      return { row, cell };
    }

    // Not the end of the visual row, focus moves to the first cell of the next semantic row.
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
  if (event.metaKey || event.ctrlKey) {
    // Focus moves to the last cell in the last item in the list.

    // Omiting row index for the last element in the list
    nextRow = rowsLength - 1;
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
  if (event.metaKey || event.ctrlKey) {
    // Focus moves to the first cell in the first item in the list.
    return { row: 0, cell: 0 };
  }
  // Focus moves to the first cell in the first item in the visual row.
  const firstItemInVisualRow = getFirstSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
  return { row: firstItemInVisualRow, cell: 0 };
};

/**
  * Finds the row and cell indexes of the element per it's row and column ids.
  * @param {object} - columns
  * @param {HTMLDivElement} list - listRef.current for the list element
  * @param {object} ids - { rowId, columnId } object
  * @returns - a pair of indexes for the row and cell in { row, cell } format.
  */
export const getFocusedCellIndexes = (list, columns, ids) => {
  const { rowId, columnId } = ids;
  const row = [...list.children].findIndex(rowElement => rowElement.getAttribute('data-row-id') === rowId);
  const cell = columns.findIndex(col => col.id === columnId);
  // row - 1 needs to accommodate for the hidden header row
  return { row: row - 1, cell };
};

/**
  * Finds the row and column ids of the element per it's row and cell indexes.
  * @param {object} - columns
  * @param {HTMLDivElement} list - listRef.current for the list element
  * @param {object} ids - { rowId, columnId } object
  * @returns - a pair of ids for the row and cell in { rowId, columnId } format.
  */
export const getFocusedCellIds = (list, columns, indexes) => {
  const { row, cell } = indexes;
  // row + 1 needs to accommodate for the hidden header row
  const rowId = list.children[row + 1].getAttribute('data-row-id');
  const columnId = columns[cell].id;
  return { rowId, columnId };
};
