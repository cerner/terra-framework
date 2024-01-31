import React from 'react';
import Table from 'terra-table';
import tableData from './mockTableData.json';

const TableWithResizableColumns = () => {
  let { cols, rows } = tableData;
  cols = cols.map(col => ({ ...col, isResizable: true }));

  return (
    <Table
      id="resizable-terra-table"
      overflowColumns={cols}
      rows={rows}
      rowHeaderIndex={0}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default TableWithResizableColumns;
