import React from 'react';
import Table from 'terra-table';
import tableData from './mockResizableColumnsTableData.json';

const ResizableTable = () => {
  const { cols, rows } = tableData;

  return (
    <Table
      id="resizable-columns-table"
      overflowColumns={cols}
      rows={rows}
      rowHeaderIndex={0}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default ResizableTable;
