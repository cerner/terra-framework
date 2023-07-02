// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import WorklistDataGrid from '../../src/WorklistDataGrid';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';
import Row from '../../src/subcomponents/Row';

// Source data for tests
const dataFile = {
  cols: [
    { id: 'Column-0', displayName: ' Vitals' },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17', isSelectable: false },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '' },
        { content: '66', isMasked: true },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9', isMasked: true },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28', isMasked: true },
      ],
    },
  ],
};
describe('WorklistDataGrid', () => {
  it('renders a grid with 1 header row and 3 data rows', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    // One row used for the header.
    const columnHeader = wrapper.find('tr');
    expect(columnHeader).toHaveLength(1);
    // Within the header row expect 3 cells.
    expect(columnHeader.find(ColumnHeaderCell)).toHaveLength(3);

    // The number of rows should match the given data.
    expect(wrapper.find(Row)).toHaveLength(dataFile.rows.length);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies the row is created with the right props', () => {
    const verifyRow = (rowIndex, row, data, columns) => {
      expect(row.props.row).toEqual(data);
      expect(row.props.displayedColumns).toEqual(columns);
      expect(row.props.hasSelectableRows).toBe(false);
      expect(row.key).toEqual(data.id);
      expect(row.props.onCellSelect).toBeDefined();
      expect(row.props.onRowSelect).toBeDefined();
      expect(row.props.rowHeaderIndex).toEqual(0);
      expect(row.props.rowIndex).toEqual(rowIndex + 1);
    };

    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    const rows = wrapper.find(Row);
    expect(rows).toHaveLength(dataFile.rows.length);
    verifyRow(0, rows.get(0), dataFile.rows[0], dataFile.cols);
    verifyRow(1, rows.get(1), dataFile.rows[1], dataFile.cols);
    verifyRow(2, rows.get(2), dataFile.rows[2], dataFile.cols);

    expect(wrapper).toMatchSnapshot();
  });
});
