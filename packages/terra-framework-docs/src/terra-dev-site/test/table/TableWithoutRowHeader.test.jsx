import React from 'react';
import Table from 'terra-table';
import tableData from './mockTableData.json';

const TableWithoutRowHeader = () => {
  const { cols, rows } = tableData;

  return (
    <Table
      id="table-without-row-header"
      overflowColumns={cols}
      rows={rows}
      rowHeaderIndex={-1}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default TableWithoutRowHeader;
