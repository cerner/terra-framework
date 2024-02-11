/**
 * The Object representation of the row selection column.
 */
const ROW_SELECTION_COLUMN = {
  id: 'WorklistDataGrid-rowSelectionColumn',
  width: 40,
  isSelectable: true,
  isResizable: false,
};

const WorklistDataGridUtils = {
  ROW_SELECTION_COLUMN,
};

/**
 * The method that checks if at least one of the columns has actions object with two parameters - text label and onCall method.
 * @param {*} columns - array of data grid columns
 * @returns bool
 */
const checkForColumnActions = (columns) => columns.find(column => column.action?.label && column.action?.onCall && typeof column.action.onCall === 'function');

export default WorklistDataGridUtils;
export { checkForColumnActions };
