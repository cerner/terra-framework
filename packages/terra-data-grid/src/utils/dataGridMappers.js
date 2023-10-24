const mapDataGridRow = (row) => ({
  ...row,
  cells: row.cells.map((cell) => ({
    ...cell,
    isSelectable: cell.isSelectable !== false,
  })),
});

const mapDataGridColumn = (column) => ({
  ...column,
  isResizable: column.isResizable !== false,
  isSelectable: column.isSelectable !== false,
});

export { mapDataGridColumn, mapDataGridRow };
