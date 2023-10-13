import React from 'react';
import FlowsheetDataGrid from '../../src/FlowsheetDataGrid';

// Source data for tests
const dataFile = {
  cols: [
    { id: 'Column-0', displayName: 'Vitals', isResizable: true },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17', isResizable: true },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '' },
        { content: '66' },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9' },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28' },
      ],
    },
    {
      id: '4',
      cells: [
        { content: 'Oxygen Flow Rate (L/min)' },
        { content: '63' },
        { content: '47' },
      ],
    },
  ],
};

describe('FlowsheetDataGrid', () => {
  it('renders the row header column as pinned and remaining columns as overflow and all columns as not resizable', () => {
    const wrapper = shallow(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
      />,
    );

    const dataGrid = wrapper.find('#test-terra-flowsheet-data-grid');
    const pinnedColumns = dataGrid.prop('pinnedColumns');
    expect(pinnedColumns).toEqual(
      [
        {
          displayName: 'Vitals',
          id: 'Column-0',
          isResizable: false,
        },
      ],
    );

    const overflowColumns = dataGrid.prop('overflowColumns');
    expect(overflowColumns).toEqual(
      [
        {
          displayName: 'March 16',
          id: 'Column-1',
          isResizable: false,
        },
        {
          displayName: 'March 17',
          id: 'Column-2',
          isResizable: false,
        },
      ],
    );

    expect(dataGrid.prop('id')).toEqual('test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('ariaLabel')).toEqual('Test Flowsheet Data Grid');
    expect(dataGrid.prop('ariaLabelledBy')).toBeUndefined();
    expect(dataGrid.prop('rowHeaderIndex')).toEqual(0);
    expect(dataGrid.prop('defaultColumnWidth')).toEqual(200);
    expect(dataGrid.prop('columnHeaderHeight')).toEqual('2.5rem');
    expect(dataGrid.prop('rowHeight')).toEqual('2.5rem');

    expect(wrapper).toMatchSnapshot();
  });
});
