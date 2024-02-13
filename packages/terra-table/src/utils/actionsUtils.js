/**
 * The method that checks if at least one of the columns has actions object with two parameters - text label and onCall method.
 * @param {*} columns - array of data grid columns
 * @returns bool
 */
const checkForColumnActions = (columns) => (!!columns.find(column => column.action?.label && column.action?.onClick && typeof column.action.onClick === 'function'));

export default checkForColumnActions;
