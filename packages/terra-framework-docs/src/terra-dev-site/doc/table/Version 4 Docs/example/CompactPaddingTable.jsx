import React from 'react';
import Table from 'legacy-terra-table';

const PaddingTable = () => (
  <Table
    summaryId="compact-table"
    summary="This table has compact row padding."
    cellPaddingStyle="compact"
    numberOfColumns={1}
    dividerStyle="horizontal"
    headerData={{
      cells: [
        { id: 'header-name', key: 'name', children: 'Name' },
        { id: 'header-address', key: 'address', children: 'Address' },
        { id: 'header-phone_number', key: 'phone_number', children: 'Phone Number' },
      ],
    }}
    bodyData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              { key: 'cell-0', children: 'John Smith' },
              { key: 'cell-1', children: '123 Adams Drive' },
              { key: 'cell-2', children: '111-222-3333' },
            ],
          },
          {
            key: 'row-1',
            cells: [
              { key: 'cell-0', children: 'Jane Smith' },
              { key: 'cell-1', children: '321 Drive Street' },
              { key: 'cell-2', children: '111-222-3333' },
            ],
          },
          {
            key: 'row-2',
            cells: [
              { key: 'cell-0', children: 'Dave Smith' },
              { key: 'cell-1', children: '213 Raymond Road' },
              { key: 'cell-2', children: '111-222-3333' },
            ],
          },
        ],
      },
    ]}
  />
);

export default PaddingTable;
