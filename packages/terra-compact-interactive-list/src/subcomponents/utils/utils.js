// Check if semantic row needs to be flexGrowing
export const checkIfColumnIsFlex = (flexGrow, width) => flexGrow || !(width && typeof width === 'number');
const checkIfAnyColumnIsFlex = (total, column) => total || checkIfColumnIsFlex(column.flexGrow, column.width);
export const checkIfRowHasFlexColumns = (columns) => columns.reduce(checkIfAnyColumnIsFlex, false);

// Check if semantic row needs the maxWidth property
const checkIfAllColumnsHaveMaxWidth = (total, column) => total && column.maximumWidth;
const checkIfAllColumnsHaveMaxWidthOrWidth = (total, column) => total && (column.maximumWidth || column.width);
const checkIfAtLeastOneColumnHasMaxWidth = (total, column) => total || column.maximumWidth;
export const checkIfRowNeedsMaxWidth = (columns, columnMaximumWidth) => columnMaximumWidth || columns.reduce(checkIfAllColumnsHaveMaxWidth, true) || (columns.reduce(checkIfAllColumnsHaveMaxWidthOrWidth, true) && columns.reduce(checkIfAtLeastOneColumnHasMaxWidth, false));
