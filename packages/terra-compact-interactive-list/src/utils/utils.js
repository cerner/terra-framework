/**
 * A column is flex growing in following cases:
 * 1) flexGrow is set to true.
 * 2) there is no width prop set to a number.
 */
export const checkIfColumnIsFlex = (flexGrow, width) => flexGrow || !(width && typeof width === 'number');

// A row is considered being flex growing if it has at least one column that can grow or shrink (a flex column).
const checkIfAnyColumnIsFlex = (total, column) => total || checkIfColumnIsFlex(column.flexGrow, column.width);
export const checkIfRowHasFlexColumns = (columns) => columns.reduce(checkIfAnyColumnIsFlex, false);

/**
 * A semantic row needs a maxWidth prop if:
 * 1) There is at least one flex column in the list.
 * 2) All flex columns have maximumWidth property set, or columnMaximumWidth was set for the whole list component.
 */
export const getRowMaximumWidth = (columns, columnMaximumWidth) => {
  let flexColumnWasFound = false;
  let maxWidth = 0;
  for (let i = 0; i < columns.length; i += 1) {
    if (checkIfColumnIsFlex(columns[i].flexGrow, columns[i].width)) {
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
    if (checkIfColumnIsFlex(columns[i].flexGrow, columns[i].width)) {
      flexColumnWasFound = true;
      if (columns[i].minimumWidth || columnMinimumWidth) {
        const colMaxWidth = columns[i].minimumWidth || columnMinimumWidth;
        minWidth += colMaxWidth;
      } else { return null; }
    } else if (columns[i].width) {
      minWidth += columns[i].width;
    } else { return null; }
  }
  return flexColumnWasFound ? minWidth : null;
};

/**
 * A list needs a maximumWidth set if:
 * 1) There are no flex items, but the max width was set for the whole list (for scroll).
 * 2) There are flex columns:
 *      a) If there is now rowMaxWidth, use list max width.
 *      b) If rowMaxWidth * numberOfColumns is < list max width, use rowMaxWidth * numberOfColumns, as the list shouldn't grow wider thatn it's rows.
 *      c) If rowMaxWidth * numberOfColumns is >= list max width, use list max width
 */
export const getListMaximumWidth = (isFlex, numberOfColumns, rowMaximumWidth, maximumWidth) => {
  if (!isFlex || !rowMaximumWidth) {
    return maximumWidth || null;
  }
  return Math.min(rowMaximumWidth * numberOfColumns, maximumWidth);
};

export const getListMinimumWidth = (isFlex, numberOfColumns, rowMinimumWidth, minimumWidth) => {
  if (!isFlex || !rowMinimumWidth) {
    return minimumWidth || null;
  }
  return Math.max(rowMinimumWidth * numberOfColumns, minimumWidth);
};
