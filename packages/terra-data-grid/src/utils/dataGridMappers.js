const mapDataGridRows = (row) => ({
  ...row,
  cells: row.cells.map((cell) => ({
    ...cell,
    isSelectable: cell.isSelectable !== false,
  })),
});

const mapDataGridColumns = (column) => ({
  ...column,
  isResizable: column.isResizeable !== false,
  isSelectable: column.isSelectable !== false,
});

export { mapDataGridColumns, mapDataGridRows };
