import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import WorklistDataGrid from '../../src/WorklistDataGrid';
import WorklistDataGridUtils from '../../src/utils/WorklistDataGridUtils';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';
import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import Row from '../../src/subcomponents/Row';
import ERRORS from '../../src/utils/constants';

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

describe('basic grid', () => {
  it('verifies that the grid created is consistent with the rows and overflowColumns props', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
      />,
    ).dive();

    // One row used for the header.
    const columnHeader = wrapper.find(ColumnHeader);
    expect(columnHeader).toHaveLength(1);

    // The number of rows should match the given data.
    expect(wrapper.find(Row)).toHaveLength(dataFile.rows.length);
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies the rows are created with the right props', () => {
    const verifyRow = (rowIndex, rowComponent, data, overflowColumns) => {
      expect(rowComponent.props.displayedColumns).toEqual(overflowColumns);
      expect(rowComponent.props.hasRowSelection).toBe(false);
      expect(rowComponent.key).toEqual(data.id);
      expect(rowComponent.props.onCellSelect).toBeDefined();
      expect(rowComponent.props.onRowSelect).toBeDefined();
      expect(rowComponent.props.rowHeaderIndex).toEqual(0);
      expect(rowComponent.props.rowIndex).toEqual(rowIndex + 1);
      expect(rowComponent.props.cells).toEqual(data.cells);
    };

    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        overflowColumns={dataFile.cols}
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

  it('verifies row selection column header selection', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        hasSelectableRows
        rows={dataFile.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeader = wrapper.find(ColumnHeaderCell);

    // Simulate onMouseDown event on row selection column header
    columnHeader.at(0).simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).toHaveBeenCalledWith(WorklistDataGridUtils.ROW_SELECTION_COLUMN.id);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies row selection when space is pressed on a masked cell', () => {
    const mockRowSelect = jest.fn();

    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        hasSelectableRows
        rows={dataFile.rows}
        onRowSelect={mockRowSelect}
      />,
    );

    // Find column headers
    const maskedCell = wrapper.find(Row).at(0).find('.masked');

    // Simulate onMouseDown event on row selection column header
    maskedCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }]);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback is not triggered when space is pressed on a masked cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onCellSelect={mockCellSelect}
      />,
    );

    // Find column headers
    const maskedCell = wrapper.find(Row).at(0).find('.masked');

    // Simulate onMouseDown event on row selection column header
    maskedCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies row selection when space is pressed on a non-selectable cell', () => {
    const mockRowSelect = jest.fn();

    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        hasSelectableRows
        rows={dataFile.rows}
        onRowSelect={mockRowSelect}
      />,
    );

    // Find column headers
    const nonSelectableCell = wrapper.find(Row).at(0).find('th:not(.selectable)');

    // Simulate onMouseDown event on row selection column header
    nonSelectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }]);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies onCellSelect callback is not triggered when space is pressed on a non-selectable cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onRowSelect={mockCellSelect}
      />,
    );

    // Find column headers
    const nonSelectableCell = wrapper.find(Row).at(0).find('.selectable');

    // Simulate onMouseDown event on row selection column header
    nonSelectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});

describe('with pinned columns', () => {
  it('sets pinnedColumns as pinned', () => {
    const pinnedColumns = dataFile.cols.slice(0, 2);

    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
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
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
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
      <WorklistDataGrid
        id="sdfdss"
        overflowColumns={dataFile.cols}
        rows={dataFile.rows}
        hasSelectableRows
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(1 * (dataFile.rows.length + 1));
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining(ERRORS.PINNED_COLUMNS_UNDEFINED)); // eslint-disable-line no-console
  });
});

describe('Error handling - prop types', () => {
  it('throws an error if rowHeaderIndex is not an integer', () => {
    shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        rows={dataFile.rows}
        rowHeaderIndex="2"
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER)); // eslint-disable-line no-console
  });

  it('throws an error if rowHeaderIndex is not a positive integer', () => {
    shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        rows={dataFile.rows}
        rowHeaderIndex={-1}
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO)); // eslint-disable-line no-console
  });

  it('throws an error if rowHeaderIndex is greater than the length of pinned columns', () => {
    shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rowHeaderIndex={2}
        rows={dataFile.rows}
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED)); // eslint-disable-line no-console
  });
});

describe('Row selection', () => {
  let mockOnCellSelect = null;
  let mockOnRowSelect = null;
  let mockOnEnableRowSelection = null;

  beforeEach(() => {
    mockOnCellSelect = jest.fn();
    mockOnRowSelect = jest.fn();
    mockOnEnableRowSelection = jest.fn();
  });

  it('verifies only onRowSelect is called when space is used to select a row.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    // Find and select a selectable cell in the 3rd row.
    const selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate that only the onRowSelect callback is called.
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '3', selected: true }]);
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies only onRowSelect is called when mouse is used to select a row.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    // Find and select a selectable cell in the 3rd row.
    const selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('mouseDown');

    // Validate that only the onRowSelect callback is called.
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '3', selected: true }]);
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies only onRowSelect is called when space is used to unselect a row.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    // The 4th row is selected so unselect it using space key.
    const selectableCell = wrapper.find(Row).at(3).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate that only the onRowSelect callback is called.
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '4', selected: false }]);
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies only onRowSelect is called when mouse is used to unselect a row.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    // The 4th row is selected so unselect it using mouse.
    const selectableCell = wrapper.find(Row).at(3).find('td.selectable');
    selectableCell.at(0).simulate('mouseDown');

    // Validate that only the onRowSelect callback is called.
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '4', selected: false }]);
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies callbacks when Shift+Down is used and row selection mode is not enabled.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    selectableCell.at(0).simulate('mouseDown'); // Row selection is not on so cell will be selected.
    expect(mockOnCellSelect).toHaveBeenCalledWith('1', 'Column-1'); // The first click to select the cell from which shift+Down will occur.

    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }]);
    expect(mockOnEnableRowSelection).toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies callbacks when Shift+Down is used and row selection mode is enabled.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 });

    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }]);
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies callbacks when Shift+Down more than one.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 });
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 });

    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }]);
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: true }]);
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies multiple independent ranges can be created with Shift+Down.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    // Find a cell on row 1 and use Shift+Down to create a selected range of rows.
    let selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }]);

    // Release the Shift key and Arrow Down once to get to row 3.
    selectableCell.at(0).simulate('keyup', { keyCode: 16 });
    selectableCell.at(0).simulate('keydown', { shiftKey: false, keyCode: 40 });

    // Find a cell on Row 3 and do a Shift+Down
    selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '3', selected: true }, { id: '4', selected: true }]);

    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies callbacks when Shift+Down contracts the range of selected rows.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 }); // Shift+Down starts the range
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 40 }); // Shift+Down extends the range
    selectableCell.at(0).simulate('keydown', { shiftKey: true, keyCode: 38 }); // Shift+Up contracts the range

    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }]); // range is established with 2 rows selected.
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: true }]); // range is expanded with an additional row selected.
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: false }]); // range is contracted with with one row unselected.
    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies Shift+Click honors the anchor established by row selection using space bar.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    let selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    // Select Row 1 using space.
    selectableCell.at(0).simulate('keydown', { keyCode: 32 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }]);

    // Shift+Click on row 3
    selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('mouseDown', { shiftKey: true });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: true }]);

    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies Shift+Space honors the anchor established by row selection using Mouse.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    let selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    // Select Row 1 using Mouse.
    selectableCell.at(0).simulate('mouseDown');
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }]);

    // Shift+Space on row 3
    selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('keyDown', { shiftKey: true, keyCode: 32 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: true }]);

    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies Shift+Click enables row selection when row selection is turned off.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    // Select Row 3 using Shift+Click when row selection is off.
    selectableCell.at(0).simulate('mouseDown', { shiftKey: true });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '3', selected: true }]);
    expect(mockOnEnableRowSelection).toHaveBeenCalled();

    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies Shift+Space enables row selection when row selection is turned off.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    // Select Row 3 using Shift+Space when row selection is off.
    selectableCell.at(0).simulate('keyDown', { shiftKey: true, keyCode: 32 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '3', selected: true }]);
    expect(mockOnEnableRowSelection).toHaveBeenCalled();

    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies Shift+Click establishes anchor and selects row when row selection is already enabled.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    let selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    // Select Row 1 using Shift+Click. Row is selected and anchor created.
    selectableCell.at(0).simulate('mouseDown', { shiftKey: true });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }]);

    // Shift+Click on row 3
    selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('mouseDown', { shiftKey: true });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: true }]);

    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies Shift+Space establishes anchor and selects row if row selection is already enabled.', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
        onRowSelect={mockOnRowSelect}
        onEnableRowSelection={mockOnEnableRowSelection}
        onCellSelect={mockOnCellSelect}
      />,
    );

    let selectableCell = wrapper.find(Row).at(0).find('td.selectable');
    // Select Row 1 using Shift+Space. Row is selected and anchor created.
    selectableCell.at(0).simulate('keyDown', { shiftKey: true, keyCode: 32 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }]);

    // Shift+Space on row 3
    selectableCell = wrapper.find(Row).at(2).find('td.selectable');
    selectableCell.at(0).simulate('keyDown', { shiftKey: true, keyCode: 32 });
    expect(mockOnRowSelect).toHaveBeenCalledWith([{ id: '1', selected: true }, { id: '2', selected: true }, { id: '3', selected: true }]);

    expect(mockOnEnableRowSelection).not.toHaveBeenCalled();
    expect(mockOnCellSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });
});
