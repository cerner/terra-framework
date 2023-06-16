/**
 * The Object representation of the row selection column.
 */
const ROW_SELECTION_COLUMN = {
  id: 'WorklistDataGrid-rowSelectionColumn',
  width: 40,
};

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

const WorklistDataGridUtils = {
  ROW_SELECTION_COLUMN,
  copyCellContent,
};

export default WorklistDataGridUtils;
