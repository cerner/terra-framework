import React from 'react';
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

const sectionData = [
  {
    id: 'section-0',
    text: 'Test Section',
    rows: dataFile.rows.slice(0, 2),
  },
  {
    id: 'section-1',
    text: 'Test Section #2',
    rows: dataFile.rows.slice(2),
  },
];

const mockMouseDownEvent = {
  type: 'mousedown',
};

const mockKeyDownEvent = {
  type: 'keydown',
};

describe('FlowsheetDataGrid', () => {
  it('renders the row header column as pinned and remaining columns as overflow, all columns as not resizable or selectable and all row cells as selectable', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        rowHeight="2.5rem"
        ariaLabel="Test Flowsheet Data Grid"
      />,
    ).shallow();

    const expectedPinnedColumns = [
      {
        displayName: 'Vitals',
        id: 'Column-0',
        isResizable: false,
        isSelectable: false,
      },
    ];

    const expectedOverflowColumns = [
      {
        displayName: 'March 16',
        id: 'Column-1',
        isResizable: false,
        isSelectable: false,
      },
      {
        displayName: 'March 17',
        id: 'Column-2',
        isResizable: false,
        isSelectable: false,
      },
    ];

    const expectedRows = [
      {
        id: '1',
        cells: [
          { content: 'Heart Rate Monitored (bpm)', isSelectable: true },
          { content: '65', isSelectable: true },
          { content: '66', isSelectable: true },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Temperature Oral (degC)', isSelectable: true },
          { content: '36.7', isSelectable: true },
          { content: '36.9', isSelectable: true },
        ],
      },
      {
        id: '3',
        cells: [
          { content: 'Cardiac Index (L/min/m2)', isSelectable: true },
          { content: '2.25', isSelectable: true },
          { content: '2.28', isSelectable: true },
        ],
      },
      {
        id: '4',
        cells: [
          { content: 'Oxygen Flow Rate (L/min)', isSelectable: true },
          { content: '63', isSelectable: true },
          { content: '47', isSelectable: true },
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
          { content: 'Heart Rate Monitored (bpm)', isSelectable: true },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
            isSelectable: true,
          },
          { content: '66', isSelectable: true },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Temperature Oral (degC)', isSelectable: true },
          { content: '36.7', isSelectable: true },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
            isSelectable: true,
          },
        ],
      },
      {
        id: '3',
        cells: [
          { content: 'Cardiac Index (L/min/m2)', isSelectable: true },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
            isSelectable: true,
          },
          { content: '2.28', isSelectable: true },
        ],
      },
      {
        id: '4',
        cells: [
          { content: '', isSelectable: true },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
            isSelectable: true,
          },
          {
            content: (
              <>
                <span aria-hidden>Terra.flowsheetDataGrid.no-result-display</span>
                <VisuallyHiddenText text="Terra.flowsheetDataGrid.no-result" />
              </>
            ),
            isSelectable: true,
          },
        ],
      },
    ];

    const wrapper = enzymeIntl.shallowWithIntl(
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
    const wrapper = enzymeIntl.mountWithIntl(
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

    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies single cell selection when Space is pressed on an unselected cell', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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

    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockKeyDownEvent));
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies Shift+Click selects a single cell when no cells are initially selected', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '4',
      columnId: 'Column-2',
      sectionId: '',
      columnIndex: 2,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });

  it('verifies Shift+Space selects a single cell when no cells are initially selected', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '4',
      columnId: 'Column-2',
      sectionId: '',
      columnIndex: 2,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockKeyDownEvent));
    expect(mockOnCellRangeSelect).not.toHaveBeenCalled();
  });
});

describe('Multi-cell selection', () => {
  let mockOnCellSelect = null;
  let mockOnCellRangeSelect = null;

  beforeEach(() => {
    mockOnCellSelect = jest.fn();
    mockOnCellRangeSelect = jest.fn();
  });

  it('verifies Shift+Arrow keys selects a range of cells when an anchor cell is initially clicked', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
    ]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });

  it('verifies Shift+Arrow keys selects a range of cells when an anchor cell is initially selected with Space', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const initialCell = wrapper.find('Row').at(2).find('td.selectable').at(1);
    initialCell.simulate('mouseDown');
    initialCell.simulate('keydown', { keyCode: DOWN_ARROW_KEY });

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { keyCode: SPACE_KEY });
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-2',
      columnIndex: 2,
      sectionId: '',
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: LEFT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });

  it('verifies Shift+Arrow keys selects a range of cells that does not go beyond the last selectable row and column', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    // Would go past last row
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
    ]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });
    // Would go past last column
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(4);
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });

  it('verifies Shift+Arrow keys selects a range of cells that does not include row or column headers', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));

    // Would select row header
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: LEFT_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([{ rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' }]);

    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    // Would select column header
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(4);
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '1', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '2', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
    ]);
  });

  it('verifies Shift+Click selects a range of cells when an anchor cell is initially clicked', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('mouseDown', { shiftKey: true });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });

  it('verifies Shift+Space selects a range of cells when an anchor cell is initially clicked', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockMouseDownEvent));

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: SPACE_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });

  it('verifies Shift+Click selects a range of cells when an anchor cell is initially selected with Space', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockKeyDownEvent));

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('mouseDown', { shiftKey: true });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });

  it('verifies Shift+Space selects a range of cells when an anchor cell is initially selected with Space', () => {
    const wrapper = enzymeIntl.mountWithIntl(
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
    expect(mockOnCellSelect).toHaveBeenCalledWith({
      rowId: '3',
      columnId: 'Column-1',
      sectionId: '',
      columnIndex: 1,
      isMetaPressed: undefined,
    }, expect.objectContaining(mockKeyDownEvent));

    selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('keydown', { shiftKey: true, keyCode: SPACE_KEY });
    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: '' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: '' },
    ]);
  });
});

describe('Row selection', () => {
  let mockOnRowSelect = null;

  beforeEach(() => {
    mockOnRowSelect = jest.fn();
  });

  it('verifies single row selection when a row header cell is clicked', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
        ariaLabel="Test Flowsheet Data Grid"
        onRowSelect={mockOnRowSelect}
      />,
    );

    const selectableCell = wrapper.find('Row').at(2).find('th.selectable').at(0);
    selectableCell.simulate('mouseDown');

    expect(mockOnRowSelect).toHaveBeenCalledWith({ rowId: '3', sectionId: '' });
  });
});

describe('Flowsheet with Sections', () => {
  let mockOnCellSelect = null;
  let mockOnCellRangeSelect = null;

  beforeEach(() => {
    mockOnCellSelect = jest.fn();
    mockOnCellRangeSelect = jest.fn();
  });

  it('verifies the cells within sections are returned in multi-cell select.', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        sections={sectionData}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const anchorCell = wrapper.find('Row').at(0).find('td.selectable').at(0);
    anchorCell.simulate('mouseDown');

    const selectableCell = wrapper.find('Row').at(1).find('td.selectable').at(1);
    selectableCell.simulate('mouseDown', { shiftKey: true });

    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '1', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '1', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
    ]);
  });

  it("verifies the selected section's cells in range are returned in multi-cell select when the anchor cell is on top in another section.", () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        sections={sectionData}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const anchorCell = wrapper.find('Row').at(0).find('td.selectable').at(0);
    anchorCell.simulate('mouseDown');

    const selectableCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    selectableCell.simulate('mouseDown', { shiftKey: true });

    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-1' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-1' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-1' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-1' },
    ]);
  });

  it("verifies the selected section's cells in range are returned in multi-cell select when the anchor cell is on bottom in another section. ", () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        sections={sectionData}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const anchorCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    anchorCell.simulate('mouseDown');

    const selectableCell = wrapper.find('Row').at(0).find('td.selectable').at(0);
    selectableCell.simulate('mouseDown', { shiftKey: true });

    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '1', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '1', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
    ]);
  });

  it('verifies the cells within sections are returned in range select.', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        sections={sectionData}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const anchorCell = wrapper.find('Row').at(0).find('td.selectable').at(0);
    anchorCell.simulate('mouseDown');

    anchorCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });

    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(2);

    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '1', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '1', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
    ]);
  });

  it("verifies the selected section's cells in range are returned in range select when the anchor cell is on top in another section.", () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        sections={sectionData}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const anchorCell = wrapper.find('Row').at(0).find('td.selectable').at(0);
    anchorCell.simulate('mouseDown');

    anchorCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: DOWN_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: RIGHT_ARROW_KEY });

    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(4);

    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '3', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-1' },
      { rowId: '3', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-1' },
      { rowId: '4', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-1' },
      { rowId: '4', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-1' },
    ]);
  });

  it("verifies the selected section's cells in range are returned in range select when the anchor cell is on bottom in another section.", () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <FlowsheetDataGrid
        id="test-terra-flowsheet-data-grid"
        columns={dataFile.cols}
        sections={sectionData}
        ariaLabel="Test Flowsheet Data Grid"
        onCellSelect={mockOnCellSelect}
        onCellRangeSelect={mockOnCellRangeSelect}
      />,
    );

    const anchorCell = wrapper.find('Row').at(3).find('td.selectable').at(1);
    anchorCell.simulate('mouseDown');

    anchorCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: UP_ARROW_KEY });
    anchorCell.simulate('keydown', { shiftKey: true, keyCode: LEFT_ARROW_KEY });

    expect(mockOnCellRangeSelect).toHaveBeenCalledTimes(4);

    expect(mockOnCellRangeSelect).toHaveBeenCalledWith([
      { rowId: '1', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '1', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 1, columnId: 'Column-1', sectionId: 'section-0' },
      { rowId: '2', columnIndex: 2, columnId: 'Column-2', sectionId: 'section-0' },
    ]);
  });
});
