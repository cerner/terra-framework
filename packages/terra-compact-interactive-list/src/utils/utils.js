import { widthUnitTypes, DefaultListValues, WARNINGS } from './constants';

/**
 * A method that splits the css width, mimWidth or Maxwidth string into number value and string type.
 */
export const getValueUnitTypePair = (valueString) => {
  if (!valueString || valueString.length === 0 || typeof valueString !== 'string') {
    return null;
  }
  const regex = new RegExp('([0-9.]+)|([a-zA-Z]+)', 'g');
  const parsedValueString = valueString.match(regex);
  if (!parsedValueString || parsedValueString.length < 2) {
    return null;
  }
  const unitType = parsedValueString[1] || widthUnitTypes.PX;
  const value = unitType === widthUnitTypes.PX ? parseInt(parsedValueString[0], 10) : parseFloat(parsedValueString[0]);
  // If the first element is number and the second is in widthUnitTypes, return the value/type pair
  if (typeof value === 'number' && Object.values(widthUnitTypes).includes(unitType)) {
    return { value, unitType };
  }
  return null;
};

/**
 * A column is responsive in following cases:
 * 1) flexGrow is set to true.
 * 2) there is no width prop set to a number.
 */
export const checkIfColumnIsResponsive = (flexGrow, width) => flexGrow || !(width && typeof width === 'number');

// A row is considered being responsive if it has at least one column that can grow or shrink (a flex column).
const checkIfAnyColumnIsResponsive = (total, column) => total || checkIfColumnIsResponsive(column?.flexGrow, column?.width);
export const checkIfRowHasResponsiveColumns = (columns) => columns.reduce(checkIfAnyColumnIsResponsive, false);

/**
 * The method checks if width, maxWidth, and minWidth props use the same unit (px, em or rem).
 * The first unit type is considered the width unit, all props with types different tham that will be disregarded.
 */
export const converseColumnTypes = (columns, defaultType) => {
  let unitType;
  // get unitType and check it's consistant across columns

  let i = 0;
  while (!unitType && i < columns?.length) {
    const widthProp = columns[i].width || columns[i].minimumWidth || columns[i].maximumWidth;
    if (widthProp) {
      unitType = getValueUnitTypePair(widthProp)?.unitType;
    }
    i += 1;
  }

  if (!unitType) {
    return [[columns], defaultType];
  }

  const newColumns = columns.map(column => {
    const width = getValueUnitTypePair(column.width);
    const minimumWidth = getValueUnitTypePair(column.minimumWidth);
    const maximumWidth = getValueUnitTypePair(column.maximumWidth);
    const newColumn = { ...column };
    if (width && width?.unitType !== unitType) {
      delete newColumn.width;
      // eslint-disable-next-line no-console
      console.warn(`${WARNINGS.COLUMN_WIDTH_INCONSISTENT_TYPE} ${column.id} column's ${'width'} property unit type is ${width?.unitType}, while it should be ${unitType}. It will be disregarded, which will lead to ${column.id} becoming a responsive column.`);
    }
    if (maximumWidth && maximumWidth?.unitType !== unitType) {
      delete newColumn.maximumWidth;
      // eslint-disable-next-line no-console
      console.warn(`${WARNINGS.COLUMN_WIDTH_INCONSISTENT_TYPE} ${column.id} column's ${'maximumWidth'} property unit type is ${maximumWidth?.unitType} instead of ${unitType}. It will be disregarded.`);
    }
    if (minimumWidth && minimumWidth?.unitType !== unitType) {
      delete newColumn.minimumWidth;
      // eslint-disable-next-line no-console
      console.warn(`${WARNINGS.COLUMN_WIDTH_INCONSISTENT_TYPE} ${column.id} column's ${'minimumWidth'} property unit type is ${minimumWidth?.unitType} instead of ${unitType}. It will be disregarded, the default value will be used instead.`);
    }

    if (width?.unitType === unitType) {
      newColumn.width = width?.value;
    }
    if (maximumWidth?.unitType === unitType) {
      newColumn.maximumWidth = maximumWidth?.value;
    }
    if (minimumWidth?.unitType === unitType) {
      newColumn.minimumWidth = minimumWidth?.value;
    }
    return newColumn;
  });
  return [newColumns, unitType];
};

/**
 * A semantic row needs a maxWidth prop if:
 * 1) There is at least one flex column in the list.
 * 2) All flex columns have maximumWidth property set, or columnMaximumWidth was set for the whole list component.
 */
export const getRowMaximumWidth = (columns, columnMaximumWidth) => {
  let flexColumnWasFound = false;
  let maxWidth = 0;
  for (let i = 0; i < columns.length; i += 1) {
    if (checkIfColumnIsResponsive(columns[i]?.flexGrow, columns[i]?.width)) {
      flexColumnWasFound = true;
      if (columns[i]?.maximumWidth || columnMaximumWidth) {
        const colMaxWidth = columns[i]?.maximumWidth || columnMaximumWidth;
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
    if (checkIfColumnIsResponsive(columns[i]?.flexGrow, columns[i]?.width)) {
      flexColumnWasFound = true;
      if (columns[i]?.minimumWidth || columnMinimumWidth) {
        minWidth += columns[i]?.minimumWidth || columnMinimumWidth;
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
    const firstItemInVisualRow = (Math.floor((row + 1) / numberOfColumns) * numberOfColumns);
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
 * @param {number} row - an index of the currently focused semantic row.
 * @param {number} cell - an index of the currently focused cell.
 * @param {number} numberOfColumns - a number of visual columns.
 * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
 * @param {number} cellsLength - a number of cells in a semantic row.
 * @param {number} rowsLength - a total number of seamntic rows in the list.
 * @returns - an object { row, cell } for the new cell to focus on.
 */
export const handleLeftKey = (event, row, cell, numberOfColumns, flowHorizontally, cellsLength, rowsLength) => {
  let nextRow = row;
  let nextCell = cell;
  const firstItemInVisualRow = getFirstSemanticRowIndexInVisualRow(rowsLength, numberOfColumns, flowHorizontally, row);
  if (event.metaKey) {
    // Mac: Cmd + Right
    // Win: End
    if (event.ctrlKey) {
      // Mac: Ctrl + Cmd + Right
      // Windows: Ctrl + End
      // Focus moves to the first cell in the first item in the list.
      nextRow = 0;
      nextCell = 0;
      return { row: nextRow, cell: nextCell };
    }
    // Focus moves to the first cell in the first item in the visual row.
    nextCell = 0;
    nextRow = firstItemInVisualRow;
    return { row: nextRow, cell: nextCell };
  }
  // Focus should go till the start of the visual row, and should not break to the previous visual row.
  if (cell === 0) {
    if (row === 0 || row === firstItemInVisualRow) {
      // The first item in the list, or the first item in the visual row.
      // Focus should stay where it is.
      return { row, cell };
    }
    // The first cell. Focus moves to the last cell of the semantic row to the left.
    nextCell = cellsLength - 1;
    nextRow -= flowHorizontally ? 1 : Math.ceil(rowsLength / numberOfColumns);
  } else {
    // Not first cell. Focus moves within the row to the next cell to the left.
    nextCell -= 1;
  }
  return { row: nextRow, cell: nextCell };
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
 * @param {number} row - an index of the currently focused semantic row.
 * @param {number} cell - an index of the currently focused cell.
 * @param {number} numberOfColumns - a number of visual columns.
 * @param {boolean} flowHorizontally - sematic rows horizontal flow direction
 * @param {number} cellsLength - a number of cells in a semantic row.
 * @param {number} rowsLength - a total number of seamntic rows in the list.
 * @returns - an object { row, cell } for the new cell to focus on.
 */
export const handleRightKey = (event, row, cell, numberOfColumns, flowHorizontally, cellsLength, rowsLength) => {
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

// ensures that columnMinimumWidth is width unit type consistent
export const getColumnMinWidth = (columnMinimumWidth, widthUnit) => {
  let columnMinWidth = getValueUnitTypePair(columnMinimumWidth);
  if (!columnMinWidth) {
    columnMinWidth = getValueUnitTypePair(DefaultListValues.minimumWidth[widthUnit]);
  } else if (columnMinWidth.unitType !== widthUnit) {
    // eslint-disable-next-line no-console
    console.warn(WARNINGS.COLUMN_MIN_WIDTH_UNIT_TYPE);
    columnMinWidth = getValueUnitTypePair(DefaultListValues.minimumWidth[widthUnit]);
  }
  return columnMinWidth;
};

// ensures that columnMinimumWidth is width unit type consistent
export const getColumnMaxWidth = (columnMaximumWidth, widthUnit) => {
  let columnMaxWidth = getValueUnitTypePair(columnMaximumWidth);
  if (columnMaxWidth && columnMaxWidth.unitType !== widthUnit) {
    // eslint-disable-next-line no-console
    console.warn(WARNINGS.COLUMN_MAX_WIDTH_UNIT_TYPE);
    columnMaxWidth = null;
  }
  return columnMaxWidth;
};
