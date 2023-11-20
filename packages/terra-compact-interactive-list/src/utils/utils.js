import { widthUnitTypes, WARNINGS } from './constants';

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
const checkIfAnyColumnIsResponsive = (total, column) => total || checkIfColumnIsResponsive(column.flexGrow, column.width);
export const checkIfRowHasResponsiveColumns = (columns) => columns.reduce(checkIfAnyColumnIsResponsive, false);

/**
 * The method checks if width, maxWidth, and minWidth props use the same unit (px, em or rem).
 * The first unit type is considered the width unit, all props with types different tham that will be disregarded.
 */
export const converseColumnTypes = (columns, defaultType) => {
  let unitType;
  // get unitType and check it's consistant across columns

  let i = 0;
  while (!unitType && i < columns.length) {
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
    if (
      (width && width?.unitType !== unitType)
      || (minimumWidth && maximumWidth?.unitType !== unitType)
      || (minimumWidth && minimumWidth?.unitType !== unitType)) {
      // eslint-disable-next-line no-console
      console.warn(WARNINGS.COLUMN_WIDTH_INCONSISTENT_TYPE);
    }
    const newColumn = { ...column };
    if (width?.unitType === unitType) {
      newColumn.width = width?.value;
    }
    if (maximumWidth?.unitType === unitType) {
      newColumn.maximumWidth = maximumWidth?.value;
    }
    if (minimumWidth) {
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
