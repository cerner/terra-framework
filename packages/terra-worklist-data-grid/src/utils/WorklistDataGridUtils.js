/**
 * The Object representation of the row selection column.
 */
const ROW_SELECTION_COLUMN = {
  id: 'WorklistDataGrid-rowSelectionColumn',
  width: 40,
};

const FIRST_NON_HEADER_ROW = 1;

const copyCellContent = (event) => {
  // Use the rendered elements to get the cell content to copy to the clipboard.
  const currentCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
  const cellContent = currentCell.textContent;
  if ('clipboard' in navigator) {
    navigator.clipboard.writeText(cellContent);
  } else {
    document.execCommand('copy', true, cellContent);
  }
};

const getGridCoordinatesOfInitiatingCell = (event) => {
  const clickedCell = event.target.closest('td,th') || document.activeElement.closest('td,th');
  const cellCoordinates = { row: clickedCell.parentElement.rowIndex, col: clickedCell.cellIndex };
  return cellCoordinates;
};

const WorklistDataGridUtils = {
  ROW_SELECTION_COLUMN,
  FIRST_NON_HEADER_ROW,
  copyCellContent,
  getGridCoordinatesOfInitiatingCell,
};

export default WorklistDataGridUtils;
