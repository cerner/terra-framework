/**
 * The Object representation of the row selection column.
 */
const ROW_SELECTION_COLUMN = {
  id: 'WorklistDataGrid-rowSelectionColumn',
  width: '40px',
  isSelectable: false,
};

const FIRST_NON_HEADER_ROW = 1;

const writeToClipboard = (cellContent) => {
  if ('clipboard' in navigator) {
    navigator.clipboard.writeText(cellContent);
  } else {
    document.execCommand('copy', true, cellContent);
  }
};

const WorklistDataGridUtils = {
  ROW_SELECTION_COLUMN,
  FIRST_NON_HEADER_ROW,
  writeToClipboard,
};

export default WorklistDataGridUtils;
