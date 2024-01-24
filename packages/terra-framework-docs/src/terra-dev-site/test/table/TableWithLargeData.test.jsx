import React from 'react';
import Table from 'terra-table';

const TableWithLargeData = () => {
  const rows = [
    {
      id: '1',
      cells: [
        { content: 'The Table component is an accessible table with a static tabular structure containing one or more rows that each contain one or more cells. The Table component is not an interactive widget. Thus, its cells are not focusable or selectable.Tables are often used to present a combination of information and interactive widgets. Because a table is not a widget, each widget contained on a table is a separate stop in the page tab sequence. If the number of widgets is large, replacing the table with a grid can dramatically reduce the length of the page tab sequence because a grid is a composite widget that can contain other widgets' },
        { content: '1007-MTN-DR' },
      ],
    },
    {
      height: '150px',
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '1007-MTN' },
      ],
    },
  ];
  const columns = [
    { id: 'Column-0', displayName: 'Patient Data' },
    { id: 'Column-1', displayName: 'Location' },
  ];
  return (
    <Table
      id="default-terra-table"
      overflowColumns={columns}
      rows={rows}
      rowHeaderIndex={0}
      columnHeaderHeight="50px"
      ariaLabel="table"
    />
  );
};

export default TableWithLargeData;
