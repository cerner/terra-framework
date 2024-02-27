/**
 * The method that checks if at least one of the columns has actions object with two parameters - text label and onCall method.
 * @param {PropTypes.arrayOf(columnShape)} columns - array of data grid columns
 * @returns bool
 */
const hasColumnActions = (columns) => (!!columns.find(column => column.action));

export default hasColumnActions;
