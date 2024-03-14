import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DataGrid from '../../src/DataGrid';

// Source data for tests
const dataFile = {
  cols: [
    {
      id: 'Column-0', displayName: ' Vitals', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-1', displayName: 'March 16', isSelectable: true, isResizable: true,
    },
    {
      id: 'Column-2', displayName: 'March 17', isSelectable: false, isResizable: true,
    },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)', isSelectable: false },
        { content: '', isSelectable: true },
        { content: '66', isMasked: true, isSelectable: true },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)', isSelectable: true },
        { content: '36.7', isSelectable: true },
        { content: '36.9', isMasked: true, isSelectable: true },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)', isSelectable: true },
        { content: '2.25', isSelectable: true },
        { content: '2.28', isMasked: true, isSelectable: true },
      ],
    },
    {
      id: '4',
      isSelected: true,
      cells: [
        { content: 'Oxygen Flow Rate (L/min)', isSelectable: true },
        { content: '63', isSelectable: true },
        { content: '47', isSelectable: true },
      ],
    },
  ],
};

let mockSpyUuid;
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
  mockSpyUuid.mockRestore();
});

describe('DataGrid', () => {
  it('verifies that the grid created is consistent with the rows and overflowColumns props', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
      />,
    );

    // One row used for the header.

    const columnHeader = wrapper.find('ColumnHeader');
    expect(columnHeader).toHaveLength(1);

    // The number of rows should match the given data.
    expect(wrapper.find('Row')).toHaveLength(dataFile.rows.length);
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies the rows are created with the right props', () => {
    const verifyRow = (rowIndex, rowComponent, data, overflowColumns) => {
      expect(rowComponent.props.displayedColumns).toEqual(overflowColumns);
      expect(rowComponent.props.rowSelectionMode).toBeUndefined();
      expect(rowComponent.key).toEqual(data.id);
      expect(rowComponent.props.onCellSelect).toBeDefined();
      expect(rowComponent.props.rowHeaderIndex).toEqual(0);
      expect(rowComponent.props.rowIndex).toEqual(rowIndex + 2);
      expect(rowComponent.props.cells).toEqual(data.cells);
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        overflowColumns={dataFile.cols}
        rows={dataFile.rows}
      />,
    );

    const rows = wrapper.find('Row');
    expect(rows).toHaveLength(dataFile.rows.length);

    verifyRow(0, rows.get(0), dataFile.rows[0], dataFile.cols);
    verifyRow(1, rows.get(1), dataFile.rows[1], dataFile.cols);
    verifyRow(2, rows.get(2), dataFile.rows[2], dataFile.cols);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies row selection column header selection', () => {
    const mockOnRowSelectionHeaderColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        hasSelectableRows
        rows={dataFile.rows}
        onRowSelectionHeaderSelect={mockOnRowSelectionHeaderColumnSelect}
      />,
    );

    // Find column headers
    const columnHeader = wrapper.find('ColumnHeaderCell');

    // Simulate onMouseDown event on row selection column header
    columnHeader.at(0).simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockOnRowSelectionHeaderColumnSelect).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a masked cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onCellSelect={mockCellSelect}
      />,
    );

    // Find column headers
    const maskedCell = wrapper.find('Row').at(0).find('.masked');

    // Simulate onMouseDown event on row selection column header
    maskedCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a non-selectable cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <DataGrid
        id="test-terra-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onCellSelect={mockCellSelect}
      />,
    );

    // Find column headers
    const nonSelectableCell = wrapper.find('Row').at(0).find('th:not(.selectable)');

    // Simulate onMouseDown event on row selection column header
    nonSelectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();
  });
});

describe('with pinned columns', () => {
  it('sets pinnedColumns as pinned', () => {
    const pinnedColumns = dataFile.cols.slice(0, 2);

    const wrapper = enzymeIntl.mountWithIntl(
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

    const wrapper = enzymeIntl.mountWithIntl(
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
    const wrapper = enzymeIntl.mountWithIntl(
      <DataGrid
        id="sdfdss"
        overflowColumns={dataFile.cols}
        rows={dataFile.rows}
        hasSelectableRows
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(1 * (dataFile.rows.length + 1));
  });
});
