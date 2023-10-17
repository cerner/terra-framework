// eslint-disable-next-line import/prefer-default-export
export const getColumns = (colsData, colsNumber) => {
  const newColsData = [];
  for (let i = 1; i <= colsNumber; i += 1) {
    colsData.map((colData, index) => newColsData.push({ ...colData, id: `visual-column${i}-semantic-column-${index + 1}` }));
  }
  return newColsData;
};

export const getRows = (rowsData, colsNumber) => {
  const newRows = [];
  let i = 1;
  let newCells = [];
  rowsData.forEach((row, index) => {
    newCells.push(...row.cells);
    i += 1;
    // debugger
    if (i > colsNumber || index === rowsData.length - 1) {
      newRows.push({ cells: newCells, id: index });
      newCells = [];
      i = 1;
    }
  });
  return newRows;
};
