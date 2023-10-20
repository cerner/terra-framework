import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import DataGrid from '../../src/DataGrid';

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
        { content: 'Heart Rate Monitored (bpm)', isSelectable: false },
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
    {
      id: '4',
      isSelected: true,
      cells: [
        { content: 'Oxygen Flow Rate (L/min)' },
        { content: '63' },
        { content: '47' },
      ],
    },
  ],
};

describe('DataGrid', () => {
  it('verifies that the grid created is consistent with the rows and overflowColumns props', () => {
    const wrapper = mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
      />,
    );

    // One row used for the header.
    const columnHeader = wrapper.find('thead tr');
    expect(columnHeader).toHaveLength(1);

    // The number of rows should match the given data.
    expect(wrapper.find('tbody tr')).toHaveLength(dataFile.rows.length);
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies row selection column header selection', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        hasSelectableRows
        rows={dataFile.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeader = wrapper.find('th.selectable').first();

    // Simulate onMouseDown event on row selection column header
    columnHeader.simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a masked cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onCellSelect={mockCellSelect}
      />,
    );

    // Find column headers
    const maskedCell = wrapper.find('.masked').first();

    // Simulate onMouseDown event on row selection column header
    maskedCell.simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback not is triggered when space is pressed on a non-selectable cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onCellSelect={mockCellSelect}
      />,
    );

    // Find column headers
    const nonSelectableCell = wrapper.find('th:not(.selectable)').first();

    // Simulate onMouseDown event on row selection column header
    nonSelectableCell.simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('with pinned columns', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation();
    jest.spyOn(console, 'warn').mockImplementation();
  });

  afterEach(() => {
    console.error.mockClear(); // eslint-disable-line no-console
    console.warn.mockClear(); // eslint-disable-line no-console
  });

  afterAll(() => {
    console.error.mockRestore(); // eslint-disable-line no-console
    console.warn.mockRestore(); // eslint-disable-line no-console
  });

  it('sets pinnedColumns as pinned', () => {
    const pinnedColumns = dataFile.cols.slice(0, 2);

    const wrapper = mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={pinnedColumns}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(pinnedColumns.length * (dataFile.rows.length + 1));
  });

  it('sets row selection column as pinned', () => {
    const pinnedColumns = dataFile.cols.slice(0, 2);

    const wrapper = mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={pinnedColumns}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength((pinnedColumns.length + 1) * (dataFile.rows.length + 1));
  });

  it('pins row selection column if pinnedColumns is undefined', () => {
    const wrapper = mountWithIntl(
      <DataGrid
        id="sdfdss"
        overflowColumns={dataFile.cols}
        rows={dataFile.rows}
        hasSelectableRows
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(dataFile.rows.length + 1);
  });
});
