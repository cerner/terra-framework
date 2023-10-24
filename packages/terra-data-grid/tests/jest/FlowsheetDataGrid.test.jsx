import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import FlowsheetDataGrid from '../../src/FlowsheetDataGrid';

const SPACE_KEY = 32;
const LEFT_ARROW_KEY = 37;
const UP_ARROW_KEY = 38;
const RIGHT_ARROW_KEY = 39;
const DOWN_ARROW_KEY = 40;

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
        { content: '65' },
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
    const wrapper = shallowWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
      />,
    ).shallow();

    const expectedPinnedColumns = [
      {
        displayName: 'Vitals',
        id: 'Column-0',
        isResizable: false,
      },
    ];

    const expectedOverflowColumns = [
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
    ];

    const expectedRows = [
      {
        id: '1',
        cells: [
          { content: 'Heart Rate Monitored (bpm)' },
          { content: '65' },
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
    ];

    const dataGrid = wrapper.find('#test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('id')).toEqual('test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('ariaLabel')).toEqual('Test Flowsheet Data Grid');
    expect(dataGrid.prop('ariaLabelledBy')).toBeUndefined();
    expect(dataGrid.prop('rows')).toEqual(expectedRows);
    expect(dataGrid.prop('rowHeaderIndex')).toEqual(0);
    expect(dataGrid.prop('pinnedColumns')).toEqual(expectedPinnedColumns);
    expect(dataGrid.prop('overflowColumns')).toEqual(expectedOverflowColumns);
    expect(dataGrid.prop('defaultColumnWidth')).toEqual(200);
    expect(dataGrid.prop('columnHeaderHeight')).toEqual('2.5rem');
    expect(dataGrid.prop('rowHeight')).toEqual('2.5rem');

    expect(wrapper).toMatchSnapshot();
  });

  it('replaces non-header empty, null, or "--" cell contents with a "No results" visual indicator and hidden text', () => {
    const updatedDataFile = {
      ...dataFile,
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
            { content: null },
          ],
        },
        {
          id: '3',
          cells: [
            { content: 'Cardiac Index (L/min/m2)' },
            { content: '' },
            { content: '2.28' },
          ],
        },
        {
          id: '4',
          cells: [
            { content: '' },
            { content: null },
            { content: '--' },
          ],
        },
      ],
    };

    const expectedRows = [
      {
        id: '1',
        cells: [
          { content: 'Heart Rate Monitored (bpm)' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
          { content: '66' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Temperature Oral (degC)' },
          { content: '36.7' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
        ],
      },
      {
        id: '3',
        cells: [
          { content: 'Cardiac Index (L/min/m2)' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
          { content: '2.28' },
        ],
      },
      {
        id: '4',
        cells: [
          { content: '' },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
          },
        ],
      },
    ];

    const wrapper = shallowWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={updatedDataFile.cols}
        rows={updatedDataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
      />,
    ).shallow();

    const dataGrid = wrapper.find('#test-terra-flowsheet-data-grid');
    expect(dataGrid.prop('rows')).toEqual(expectedRows);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('Single cell selection', () => {
  let mockOnCellSelect = null;
  let mockOnCellRangeSelect = null;

  beforeEach(() => {
    mockOnCellSelect = jest.fn();
    mockOnCellRangeSelect = jest.fn();
  });

  it('verifies single cell selection when an unselected cell is clicked', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown');

    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies single cell selection when Space is pressed on an unselected cell', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });

    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies single cell de-selection when a selected cell is clicked', () => {
    const updatedDataFile = {
      ...dataFile,
      rows: [
        ...dataFile.rows.slice(0, 3),
        {
          id: '4',
          cells: [
            { content: 'Oxygen Flow Rate (L/min)' },
            { content: '63', isSelected: true },
            { content: '47' },
          ],
        },
      ],
    };

    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={updatedDataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown');

    expect(mockOnCellSelect).toHaveBeenCalledWith('4', 'Column-1');
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies single cell de-selection when Space is pressed on a selected cell', () => {
    const updatedDataFile = {
      ...dataFile,
      rows: [
        ...dataFile.rows.slice(0, 3),
        {
          id: '4',
          cells: [
            { content: 'Oxygen Flow Rate (L/min)' },
            { content: '63', isSelected: true },
            { content: '47' },
          ],
        },
      ],
    };

    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={updatedDataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(0);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });

    expect(mockOnCellSelect).toHaveBeenCalledWith('4', 'Column-1');
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies single cell selection does not occur when an unselectable cell is clicked', () => {
    const updatedDataFile = {
      ...dataFile,
      rows: [
        ...dataFile.rows.slice(0, 3),
        {
          id: '4',
          cells: [
            { content: 'Oxygen Flow Rate (L/min)' },
            { content: '63', isSelectable: false },
            { content: '47' },
          ],
        },
      ],
    };

    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={updatedDataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td:not(.selectable)').at(0);
    selectableCell.simulate('mouseDown');

    expect(mockOnCellSelect).not.toHaveBeenCalled();
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies single cell selection does not occur when Space is pressed on an unselectable cell', () => {
    const updatedDataFile = {
      ...dataFile,
      rows: [
        ...dataFile.rows.slice(0, 3),
        {
          id: '4',
          cells: [
            { content: 'Oxygen Flow Rate (L/min)' },
            { content: '63', isSelectable: false },
            { content: '47' },
          ],
        },
      ],
    };

    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={updatedDataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td:not(.selectable)').at(0);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });

    expect(mockOnCellSelect).not.toHaveBeenCalled();
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies Shift+Arrow keys selects a range of cells when an anchor cell is initially clicked', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown');
    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '3', columnId: 'Column-1' }, { rowId: '4', columnId: 'Column-1' }]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-2' },
      { rowId: '4', columnId: 'Column-1' },
      { rowId: '4', columnId: 'Column-2' },
    ]);
  });

  it('verifies Shift+Arrow keys selects a range of cells when an anchor cell is initially selected with Space', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });
    expect(mockOnCellSelect).toHaveBeenCalledWith('4', 'Column-2');

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: LEFT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '4', columnId: 'Column-1' }, { rowId: '4', columnId: 'Column-2' }]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-2' },
      { rowId: '4', columnId: 'Column-1' },
      { rowId: '4', columnId: 'Column-2' },
    ]);
  });

  it('verifies Shift+Arrow keys selects a range of cells that does not go beyond the last selectable row and column', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown');
    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    // Would go past last row
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '3', columnId: 'Column-1' }, { rowId: '4', columnId: 'Column-1' }]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });
    // Would go past last column
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(4);
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-2' },
      { rowId: '4', columnId: 'Column-1' },
      { rowId: '4', columnId: 'Column-2' },
    ]);
  });

  it('verifies Shift+Arrow keys selects a range of cells that does not include row or column headers', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown');
    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');

    // Would select row header
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: LEFT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '3', columnId: 'Column-1' }]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    // Would select column header
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(4);
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '1', columnId: 'Column-1' },
      { rowId: '2', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-1' },
    ]);
  });

  it('verifies Shift+Space selects a range of cells when an anchor cell is initially clicked', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    let selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown');
    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: SPACE_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-2' },
      { rowId: '4', columnId: 'Column-1' },
      { rowId: '4', columnId: 'Column-2' },
    ]);
  });

  it('verifies Shift+Click selects a range of cells when an anchor cell is initially selected with Space', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    let selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });
    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('mouseDown', { shiftKey: true });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-2' },
      { rowId: '4', columnId: 'Column-1' },
      { rowId: '4', columnId: 'Column-2' },
    ]);
  });

  it('verifies Shift+Space selects a range of cells when an anchor cell is initially selected with Space', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    let selectableCell = wrapper.find('Row').at(2).find('td.selectable').at(0);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });
    expect(mockOnCellSelect).toHaveBeenCalledWith('3', 'Column-1');

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: SPACE_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnId: 'Column-1' },
      { rowId: '3', columnId: 'Column-2' },
      { rowId: '4', columnId: 'Column-1' },
      { rowId: '4', columnId: 'Column-2' },
    ]);
  });

  it('verifies Shift+Click selects a range of cells when the selected range is only the anchor cell', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('mouseDown', { shiftKey: true });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '4', columnId: 'Column-2' }]);
  });

  it('verifies Shift+Space selects a range of cells when the selected range is only the anchor cell', () => {
    const wrapper = mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: SPACE_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '4', columnId: 'Column-2' }]);
  });
});
