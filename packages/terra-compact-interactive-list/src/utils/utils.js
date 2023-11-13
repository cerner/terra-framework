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
