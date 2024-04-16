/* eslint-disable react/forbid-dom-props */
import React, { useRef, useEffect } from 'react';
import Table from 'terra-table';

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const TruncatedText = () => {
  const cellContentRef = useRef(null);
  useEffect(() => {
    if (cellContentRef.current) {
      const cell = cellContentRef.current.parentElement;
      const td = cell?.parentElement;
      if (cell && td) {
        cell.setAttribute('style', 'white-space: nowrap; text-overflow: ellipsis; overflow: hidden;');
        td.setAttribute('style', 'max-width: 1px;');
      }
    }
  }, [cellContentRef]);
  return (<span ref={cellContentRef}>{longText}</span>);
};

const tableData = {
  cols: [
    { id: 'Column-0', displayName: 'Patient', width: '35%' },
    { id: 'Column-1', displayName: 'Location', width: '25%' },
    { id: 'Column-2', displayName: 'Illness Severity', width: '15%' },
    { id: 'Column-3', displayName: 'Visit', width: '25%' },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Fleck, Arthur' },
        { content: '1007-MTN' },
        { content: <TruncatedText /> },
        { content: 'Inpatient, 2 months' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Wayne, Bruce' },
        { content: '1007-MTN-DR' },
        { content: 'Stable' },
        { content: 'Outpatient, 2 days' },
      ],
    },
  ],
};

const AutoLayoutTable = () => (
  <Table
    id="my-table-id"
    isAutoLayout
    overflowColumns={tableData.cols}
    rows={tableData.rows}
    ariaLabel="Table"
  />
);

export default AutoLayoutTable;
