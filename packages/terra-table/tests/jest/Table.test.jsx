import React from 'react';
import { IntlProvider } from 'react-intl';

import { v4 as uuidv4 } from 'uuid';

import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';
import Section from '../../src/subcomponents/Section';
import GridContext, { GridConstants } from '../../src/utils/GridContext';
import ERRORS from '../../src/utils/constants';
import Row from '../../src/subcomponents/Row';
import Table from '../../src/Table';
import Cell from '../../src/subcomponents/Cell';

// Source data for tests
const tableData = {
  cols: [
    { id: 'Column-0', displayName: ' Vitals', isSelectable: true },
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

// valid action
const action = {
  label: 'Column-action',
  onClick: jest.fn(),
};

const tableSectionData = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true,
    },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },

  ],
  colsWithActions: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true, action,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true,
    },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },

  ],
  sections: [{
    id: 'section-0',
    text: 'Test Section',
    rows: [
      {
        id: '1',
        cells: [
          { content: 'Fleck, Arthur' },
          { content: '1007-MTN' },
          { content: 'Unstable' },
          { content: 'Inpatient, 2 months' },
          { content: '' },
          { content: 'Quinzell, Harleen' },
        ],
      },
      {
        id: '2',
        cells: [
          { content: 'Wayne, Bruce' },
          { content: '1007-MTN-DR' },
          { content: 'Stable' },
          { content: 'Outpatient, 2 days' },
          { content: 'Phytochemicals' },
          { content: 'Grayson, Richard' },
        ],
      },
    ],
  },
  {
    id: 'section-1',
    text: 'Test Section #2',
    rows: [
      {
        id: '3',
        cells: [
          { content: 'Parker, Peter' },
          { content: '1007-MTN' },
          { content: 'Unstable' },
          { content: 'Inpatient, 2 months' },
          { content: '' },
          { content: 'Octopus, Doctor' },
        ],
      },
      {
        id: '4',
        cells: [
          { content: 'Stark, Tony' },
          { content: '1007-MTN-DR' },
          { content: 'Stable' },
          { content: 'Outpatient, 2 days' },
          { content: 'Phytochemicals' },
          { content: 'America, Captain' },
        ],
      },
    ],
  }],
};

const tableSubSectionData = {
  cols: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true,
    },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
  ],
  colsWithActions: [
    {
      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true, action,
    },
    {
      id: 'Column-1', displayName: 'Location', isSelectable: true,
    },
    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },
    { id: 'Column-3', displayName: 'Visit' },
    { id: 'Column-4', displayName: 'Allergy' },
    { id: 'Column-5', displayName: 'Primary Contact' },
  ],
  sections: [
    {
      id: 'section-0',
      text: 'Test Section',
      subsections: [
        {
          id: 'subsection-0',
          text: 'Test SubSection',
          rows: [
            {
              id: '1',
              cells: [
                { content: 'Fleck, Arthur' },
                { content: '1007-MTN' },
                { content: 'Unstable' },
                { content: 'Inpatient, 2 months' },
                { content: '' },
                { content: 'Quinzell, Harleen' },
              ],
            },
            {
              id: '2',
              cells: [
                { content: 'Wayne, Bruce' },
                { content: '1007-MTN-DR' },
                { content: 'Stable' },
                { content: 'Outpatient, 2 days' },
                { content: 'Phytochemicals' },
                { content: 'Grayson, Richard' },
              ],
            },
          ],
        },
        {
          id: 'subsection-1',
          text: 'Test SubSection #2',
          rows: [
            {
              id: '3',
              cells: [
                { content: 'Parker, Peter' },
                { content: '1007-MTN' },
                { content: 'Unstable' },
                { content: 'Inpatient, 2 months' },
                { content: '' },
                { content: 'Octopus, Doctor' },
              ],
            },
            {
              id: '4',
              cells: [
                { content: 'Stark, Tony' },
                { content: '1007-MTN-DR' },
                { content: 'Stable' },
                { content: 'Outpatient, 2 days' },
                { content: 'Phytochemicals' },
                { content: 'America, Captain' },
              ],
            },
          ],
        },
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

afterEach(() => {
  console.error.mockClear(); // eslint-disable-line no-console
  console.warn.mockClear(); // eslint-disable-line no-console
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
  mockSpyUuid.mockRestore();
});

describe('Table', () => {
  it('verifies that the table created has a column header', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Table
          id="test-terra-table"
          pinnedColumns={tableData.cols.slice(0, 2)}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
        />
      </IntlProvider>,
    ).dive().dive();

    // One row used for the header.
    const columnHeader = wrapper.find(ColumnHeader);
    expect(columnHeader).toHaveLength(1);
  });

  it('verifies that the table created has no row headers', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rows={tableData.rows}
        rowHeaderIndex={-1}
      />,
    );

    const firstRow = wrapper.find(Row).at(0);
    const firstCell = firstRow.find(Cell).at(0);
    expect(firstCell.props().isRowHeader).toEqual(false);
  });

  it('verifies row selection column header selection', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowSelectionMode="multiple"
        rows={tableData.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeaderCell = wrapper.find(ColumnHeaderCell).at(0);
    expect(columnHeaderCell.props().id).toBe('table-rowSelectionColumn-headerCell');

    // Simulate onMouseDown event on row selection column header
    columnHeaderCell.simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).not.toHaveBeenCalled();

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies column selection header callback for table context', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowSelectionMode="multiple"
        rows={tableData.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeaderCell = wrapper.find(ColumnHeaderCell).at(1);

    // Simulate onMouseDown event on the column header
    columnHeaderCell.simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).toHaveBeenCalledWith('Column-0');
  });

  it('verifies column selection via spacebar for table context', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowSelectionMode="multiple"
        rows={tableData.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeaderCell = wrapper.find(ColumnHeaderCell).at(1);

    // Simulate onKeyDown event on column header
    columnHeaderCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).toHaveBeenCalledWith('Column-0');
  });

  it('verifies column selection header callback for non-selectable header in table context', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowSelectionMode="multiple"
        rows={tableData.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeaderCell = wrapper.find(ColumnHeaderCell).at(2);

    // Simulate onMouseDown event on the column header
    columnHeaderCell.simulate('mouseDown');

    // Validate mock function was not called from simulated click event
    expect(mockColumnSelect).not.toHaveBeenCalled();
  });

  it('verifies column selection via spacebar for non-selectable header in table context', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowSelectionMode="multiple"
        rows={tableData.rows}
        onColumnSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeaderCell = wrapper.find(ColumnHeaderCell).at(2);

    // Simulate onKeyDown event on column header
    columnHeaderCell.simulate('keydown', { keyCode: 32 });

    // Validate mock function was not called from simulated click event
    expect(mockColumnSelect).not.toHaveBeenCalled();
  });

  it('verifies ARIA attributes for a table with sections', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSectionData.cols}
        sections={tableSectionData.sections}
      />,
    );

    // Validate table properties
    const table = wrapper.find('table');
    expect(table.props().id).toBe('test-terra-table');
    expect(table.props().role).toBe('table');
    expect(table.props()['aria-rowcount']).toBe(7);

    // Validate column header id attribute
    const columnHeaderCell = wrapper.find('.column-header').at(0);
    expect(columnHeaderCell.props().id).toBe('test-terra-table-Column-0-headerCell');

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate section header row of the first section
    const section1HeaderRow = section1.find('.header-row');
    expect(section1HeaderRow.props()['aria-rowindex']).toBe(2);

    // Validate table header element of the first section
    const sectionHeader1 = section1HeaderRow.find('th');
    expect(sectionHeader1.props().id).toBe('test-terra-table-section-0');
    expect(sectionHeader1.props().colSpan).toBe(tableSectionData.cols.length);
    expect(sectionHeader1.props().scope).toBe('col');

    // Validate rows of the first section
    const section1Row1 = section1.find('.row').at(0);

    expect(section1Row1.props()['aria-rowindex']).toBe(3);
    expect(section1Row1.props()['data-row-id']).toBe('1');
    const section1Row2 = section1.find('.row').at(1);
    expect(section1Row2.props()['aria-rowindex']).toBe(4);
    expect(section1Row2.props()['data-row-id']).toBe('2');

    // Validate cells of the first row
    const row1Cell1 = section1Row1.find('.cell').at(0);
    expect(row1Cell1.props().headers).toBe('test-terra-table-section-0 test-terra-table-Column-0-headerCell');
    expect(row1Cell1.props().id).toBe('test-terra-table-rowheader-1');
    const row1Cell2 = section1Row1.find('.cell').at(1);
    expect(row1Cell2.props().headers).toBe('test-terra-table-section-0 test-terra-table-rowheader-1 test-terra-table-Column-1-headerCell');

    // Retrieve second section
    const section2 = tableSections.at(1);

    // Validate section header row of the second section
    const section2HeaderRow = section2.find('.header-row');
    expect(section2HeaderRow.props()['aria-rowindex']).toBe(5);

    // Validate table header element of the second section
    const sectionHeader2 = section2HeaderRow.find('th');
    expect(sectionHeader2.props().id).toBe('test-terra-table-section-1');
    expect(sectionHeader2.props().colSpan).toBe(tableSectionData.cols.length);
    expect(sectionHeader2.props().scope).toBe('col');

    // Validate rows of the second section
    const section2Row1 = section2.find('.row').at(0);
    expect(section2Row1.props()['aria-rowindex']).toBe(6);
    expect(section2Row1.props()['data-row-id']).toBe('3');
    const section2Row2 = section2.find('.row').at(1);
    expect(section2Row2.props()['aria-rowindex']).toBe(7);
    expect(section2Row2.props()['data-row-id']).toBe('4');

    // Validate cells of the first row
    const section2Row1Cell1 = section2Row1.find('.cell').at(0);
    expect(section2Row1Cell1.props().headers).toBe('test-terra-table-section-1 test-terra-table-Column-0-headerCell');
    expect(section2Row1Cell1.props().id).toBe('test-terra-table-rowheader-3');
    const section2Row1Cell2 = section2Row1.find('.cell').at(1);
    expect(section2Row1Cell2.props().headers).toBe('test-terra-table-section-1 test-terra-table-rowheader-3 test-terra-table-Column-1-headerCell');
  });

  it('verifies ARIA attributes for a table with subsections', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSubSectionData.cols}
        sections={tableSubSectionData.sections}
      />,
    );

    // Validate table properties
    const table = wrapper.find('table');
    expect(table.props().id).toBe('test-terra-table');
    expect(table.props().role).toBe('table');
    expect(table.props()['aria-rowcount']).toBe(8);

    // Validate column header id attribute
    const columnHeaderCell = wrapper.find('.column-header').at(0);
    expect(columnHeaderCell.props().id).toBe('test-terra-table-Column-0-headerCell');

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate section header row of the first section
    const section1HeaderRow = section1.find('.header-row');
    expect(section1HeaderRow.at(0).props()['aria-rowindex']).toBe(2);
    expect(section1HeaderRow.at(1).props()['aria-rowindex']).toBe(3);
    expect(section1HeaderRow.at(2).props()['aria-rowindex']).toBe(6);

    // Validate table header element of the first section
    const sectionHeader1 = section1HeaderRow.find('th');
    expect(sectionHeader1.at(0).props().id).toBe('test-terra-table-section-0');
    expect(sectionHeader1.at(0).props().colSpan).toBe(tableSectionData.cols.length);
    expect(sectionHeader1.at(0).props().scope).toBe('col');
    // Validate table header element of the first subsection
    expect(sectionHeader1.at(1).props().id).toBe('test-terra-table-subsection-0');
    expect(sectionHeader1.at(1).props().colSpan).toBe(tableSectionData.cols.length);
    expect(sectionHeader1.at(1).props().scope).toBe('col');
    // Validate table header element of the 2nd subsection
    expect(sectionHeader1.at(2).props().id).toBe('test-terra-table-subsection-1');
    expect(sectionHeader1.at(2).props().colSpan).toBe(tableSectionData.cols.length);
    expect(sectionHeader1.at(2).props().scope).toBe('col');

    // Validate rows of the first subsection
    const section1Row1 = section1.find('.row').at(0);

    expect(section1Row1.props()['aria-rowindex']).toBe(4);
    expect(section1Row1.props()['data-row-id']).toBe('1');
    const section1Row2 = section1.find('.row').at(1);
    expect(section1Row2.props()['aria-rowindex']).toBe(5);
    expect(section1Row2.props()['data-row-id']).toBe('2');

    // Validate cells of the first row
    const row1Cell1 = section1Row1.find('.cell').at(0);
    expect(row1Cell1.props().headers).toBe('test-terra-table-section-0 test-terra-table-Column-0-headerCell');
    expect(row1Cell1.props().id).toBe('test-terra-table-rowheader-1');
    const row1Cell2 = section1Row1.find('.cell').at(1);
    expect(row1Cell2.props().headers).toBe('test-terra-table-section-0 test-terra-table-rowheader-1 test-terra-table-Column-1-headerCell');

    // Validate rows of the second subsection
    const section1Row3 = section1.find('.row').at(2);

    expect(section1Row3.props()['aria-rowindex']).toBe(7);
    expect(section1Row3.props()['data-row-id']).toBe('3');
    const section1Row4 = section1.find('.row').at(3);
    expect(section1Row4.props()['aria-rowindex']).toBe(8);
    expect(section1Row4.props()['data-row-id']).toBe('4');
  });

  it('verifies ARIA rowcount and rowindex attributes for a table with header actions (with sections)', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSectionData.colsWithActions}
        sections={tableSectionData.sections}
      />,
    );

    // Validate table properties
    const table = wrapper.find('table');
    expect(table.props()['aria-rowcount']).toBe(8);

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate section header rowindex was increased by one per actions header
    const section1HeaderRow = section1.find('.header-row');
    expect(section1HeaderRow.props()['aria-rowindex']).toBe(3);

    // Validate that aria-rowindexes of the first section were increased by 1 per action row
    const section1Row1 = section1.find('.row').at(0);
    expect(section1Row1.props()['aria-rowindex']).toBe(4);
    expect(section1Row1.props()['data-row-id']).toBe('1');
    const section1Row2 = section1.find('.row').at(1);
    expect(section1Row2.props()['aria-rowindex']).toBe(5);
    expect(section1Row2.props()['data-row-id']).toBe('2');

    // Retrieve second section
    const section2 = tableSections.at(1);

    // Validate section header rowindex was increased by one per actions header
    const section2HeaderRow = section2.find('.header-row');
    expect(section2HeaderRow.props()['aria-rowindex']).toBe(6);

    // Validate that aria-rowindexes of the second section were increased by 1 per action row
    const section2Row1 = section2.find('.row').at(0);
    expect(section2Row1.props()['aria-rowindex']).toBe(7);
    expect(section2Row1.props()['data-row-id']).toBe('3');
    const section2Row2 = section2.find('.row').at(1);
    expect(section2Row2.props()['aria-rowindex']).toBe(8);
    expect(section2Row2.props()['data-row-id']).toBe('4');
  });

  it('verifies ARIA rowcount and rowindex attributes for a table with hidden headers (with sections)', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSectionData.colsWithActions}
        sections={tableSectionData.sections}
        hasVisibleColumnHeaders={false}
      />,
    );

    // Validate table properties
    const table = wrapper.find('table');
    expect(table.props()['aria-rowcount']).toBe(6);

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate section header rowindex was decreased by one per hidden header
    const section1HeaderRow = section1.find('.header-row');
    expect(section1HeaderRow.props()['aria-rowindex']).toBe(1);

    // Validate that aria-rowindexes of the first section were was decreased by one per hidden header
    const section1Row1 = section1.find('.row').at(0);
    expect(section1Row1.props()['aria-rowindex']).toBe(2);
    expect(section1Row1.props()['data-row-id']).toBe('1');
    const section1Row2 = section1.find('.row').at(1);
    expect(section1Row2.props()['aria-rowindex']).toBe(3);
    expect(section1Row2.props()['data-row-id']).toBe('2');

    // Retrieve second section
    const section2 = tableSections.at(1);

    // Validate section header rowindex was was decreased by one per hidden header
    const section2HeaderRow = section2.find('.header-row');
    expect(section2HeaderRow.props()['aria-rowindex']).toBe(4);

    // Validate that aria-rowindexes of the second section were was decreased by one per hidden header
    const section2Row1 = section2.find('.row').at(0);
    expect(section2Row1.props()['aria-rowindex']).toBe(5);
    expect(section2Row1.props()['data-row-id']).toBe('3');
    const section2Row2 = section2.find('.row').at(1);
    expect(section2Row2.props()['aria-rowindex']).toBe(6);
    expect(section2Row2.props()['data-row-id']).toBe('4');
  });

  it('verifies ARIA attributes for a table without sections', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSectionData.cols}
        rows={tableData.rows}
      />,
    );

    // Validate table properties
    const table = wrapper.find('table');
    expect(table.props().id).toBe('test-terra-table');
    expect(table.props().role).toBe('table');
    expect(table.props()['aria-rowcount']).toBe(5);

    // Validate column header id attribute
    const columnHeaderCell = wrapper.find('.column-header').at(0);
    expect(columnHeaderCell.props().id).toBe('test-terra-table-Column-0-headerCell');

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate section header row of the first section
    const section1HeaderRow = section1.find('.header-row');
    expect(section1HeaderRow).toHaveLength(0);

    // Validate rows of the first section
    const row1 = section1.find('.row').at(0);
    expect(row1.props()['aria-rowindex']).toBe(2);
    expect(row1.props()['data-row-id']).toBe('1');
    const row2 = section1.find('.row').at(1);
    expect(row2.props()['aria-rowindex']).toBe(3);
    expect(row2.props()['data-row-id']).toBe('2');
    const row3 = section1.find('.row').at(2);
    expect(row3.props()['aria-rowindex']).toBe(4);
    expect(row3.props()['data-row-id']).toBe('3');
    const row4 = section1.find('.row').at(3);
    expect(row4.props()['aria-rowindex']).toBe(5);
    expect(row4.props()['data-row-id']).toBe('4');

    // Validate cells of the first row
    const row1Cell1 = row1.find('.cell').at(0);
    expect(row1Cell1.props().headers).toBe('test-terra-table-Column-0-headerCell');
    expect(row1Cell1.props().id).toBe('test-terra-table-rowheader-1');
    const row1Cell2 = row1.find('.cell').at(1);
    expect(row1Cell2.props().headers).toBe('test-terra-table-rowheader-1 test-terra-table-Column-1-headerCell');

    // Validate cells of the second row
    const row2Cell1 = row2.find('.cell').at(0);
    expect(row2Cell1.props().headers).toBe('test-terra-table-Column-0-headerCell');
    expect(row2Cell1.props().id).toBe('test-terra-table-rowheader-2');
    const row2Cell2 = row2.find('.cell').at(1);
    expect(row2Cell2.props().headers).toBe('test-terra-table-rowheader-2 test-terra-table-Column-1-headerCell');
  });

  it('verifies ARIA rowcount and rowindex attributes for a table with header actions (no sections)', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSectionData.colsWithActions}
        rows={tableData.rows}
      />,
    );

    // Validate aria-rowcount was increased by 1 per action row
    const table = wrapper.find('table');
    expect(table.props()['aria-rowcount']).toBe(6);

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate that aria-rowindexes were increased by 1 per action row
    const row1 = section1.find('.row').at(0);
    expect(row1.props()['aria-rowindex']).toBe(3);
    expect(row1.props()['data-row-id']).toBe('1');
    const row2 = section1.find('.row').at(1);
    expect(row2.props()['aria-rowindex']).toBe(4);
    expect(row2.props()['data-row-id']).toBe('2');
    const row3 = section1.find('.row').at(2);
    expect(row3.props()['aria-rowindex']).toBe(5);
    expect(row3.props()['data-row-id']).toBe('3');
    const row4 = section1.find('.row').at(3);
    expect(row4.props()['aria-rowindex']).toBe(6);
    expect(row4.props()['data-row-id']).toBe('4');
  });

  it('verifies ARIA rowcount and rowindex attributes for a table with hidden headers (no sections)', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableSectionData.colsWithActions}
        rows={tableData.rows}
        hasVisibleColumnHeaders={false}
      />,
    );

    // Validate aria-rowcount was decreased by one per hidden header
    const table = wrapper.find('table');
    expect(table.props()['aria-rowcount']).toBe(4);

    // Retrieve first section
    const tableSections = wrapper.find(Section);
    const section1 = tableSections.at(0);

    // Validate that aria-rowindexes were decreased by one per hidden header
    const row1 = section1.find('.row').at(0);
    expect(row1.props()['aria-rowindex']).toBe(1);
    expect(row1.props()['data-row-id']).toBe('1');
    const row2 = section1.find('.row').at(1);
    expect(row2.props()['aria-rowindex']).toBe(2);
    expect(row2.props()['data-row-id']).toBe('2');
    const row3 = section1.find('.row').at(2);
    expect(row3.props()['aria-rowindex']).toBe(3);
    expect(row3.props()['data-row-id']).toBe('3');
    const row4 = section1.find('.row').at(3);
    expect(row4.props()['aria-rowindex']).toBe(4);
    expect(row4.props()['data-row-id']).toBe('4');
  });

  it('verifies row selection column header not selectable without callback', () => {
    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={tableData.cols.slice(0, 2)}
        overflowColumns={tableData.cols.slice(2)}
        rowSelectionMode="multiple"
        rows={tableData.rows}
        onRowSelectionHeaderSelect={mockColumnSelect}
      />,
    );

    // Find column headers
    const columnHeader = wrapper.find(ColumnHeaderCell);

    // Simulate onMouseDown event on row selection column header
    columnHeader.at(0).simulate('mouseDown');

    // Validate mock function was called from simulated click event
    expect(mockColumnSelect).toHaveBeenCalled();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a masked cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="test-terra-table"
          pinnedColumns={tableData.cols.slice(0, 2)}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
          onCellSelect={mockCellSelect}
        />
        ,
      </GridContext.Provider>,
    );

    // Find column headers
    const maskedCell = wrapper.find(Row).at(0).find('.masked');

    // Simulate onKeyDown event on row selection column header
    maskedCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();
  });

  it('verifies onCellSelect callback is triggered when space is pressed on a non-selectable cell', () => {
    const mockCellSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="test-terra-table"
          pinnedColumns={tableData.cols.slice(0, 2)}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
          onCellSelect={mockCellSelect}
        />
        ,
      </GridContext.Provider>,
    );

    // Find column headers
    const nonSelectableCell = wrapper.find(Row).at(0).find('th:not(.selectable)');

    // Simulate onKeyDown event on non-selectable cell
    nonSelectableCell.at(0).simulate('keydown', { keyCode: 32 });

    // Validate mock function was called from simulated click event
    expect(mockCellSelect).toHaveBeenCalled();
  });

  it('verifies that the column widths are set properly in the colgroup', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Table
          id="test-terra-table"
          overflowColumns={tableData.cols}
          rows={tableData.rows}
          defaultColumnWidth={150}
        />
      </IntlProvider>,
    ).dive().dive();

    // Verify that column headers are not present
    const column = wrapper.find('col').get(0);
    expect(column.props.style.width).toBe('150px');
  });
});

describe('with pinned columns', () => {
  it('sets pinnedColumns as pinned', () => {
    const pinnedColumns = tableData.cols.slice(0, 2);

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        pinnedColumns={pinnedColumns}
        overflowColumns={tableData.cols.slice(2)}
        rows={tableData.rows}
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(pinnedColumns.length * (tableData.rows.length + 1));
  });

  it('sets row selection column as pinned', () => {
    const pinnedColumns = tableData.cols.slice(0, 2);

    const wrapper = enzymeIntl.mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="test-terra-table"
          pinnedColumns={pinnedColumns}
          overflowColumns={tableData.cols.slice(2)}
          rows={tableData.rows}
          rowSelectionMode="multiple"
        />
        ,
      </GridContext.Provider>,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength((pinnedColumns.length + 1) * (tableData.rows.length + 1));
  });

  it('pins row selection column if pinnedColumns is undefined', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Table
          id="sdfdss"
          overflowColumns={tableData.cols}
          rows={tableData.rows}
          rowSelectionMode="multiple"
        />
        ,
      </GridContext.Provider>,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(1 * (tableData.rows.length + 1));
  });
});

describe('Row Selection', () => {
  it('verifies row selection row selection update', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <Table
          id="test-terra-table"
          overflowColumns={tableData.cols}
          rows={tableData.rows}
          rowSelectionMode="multiple"
          isStriped
        />
      </IntlProvider>,
    );

    const newRows = [...tableData.rows];
    newRows[0] = { ...tableData.rows[0] };
    newRows[0].isSelected = true;

    wrapper.setProps({ rows: newRows });

    const hiddenText = wrapper.find('.row-selection-region').at(0);
    expect(hiddenText.props().text).toBe('Terra.table.row-selection-template');
  });

  it('verifies row selection row unselected update', () => {
    // Start with two selected rows
    const initialRows = [...tableData.rows];
    initialRows[0] = { ...tableData.rows[0] };
    initialRows[0].isSelected = true;

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableData.cols}
        rows={initialRows}
        rowSelectionMode="multiple"
        isStriped
      />,
    );

    // Unselect the fourth row
    const newRows = [...initialRows];
    newRows[3] = { ...initialRows[3] };
    newRows[3].isSelected = false;

    wrapper.setProps({ rows: newRows });
    wrapper.update();

    const hiddenText = wrapper.find('.row-selection-region').at(0);
    expect(hiddenText.props().text).toBe('Terra.table.row-selection-cleared-template');
  });

  it('verifies row selection all row selection single selction', () => {
    // Start with two selected rows
    const initialRows = [...tableData.rows.slice(0, 1)];
    initialRows[0] = { ...initialRows[0] };

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableData.cols}
        rows={initialRows}
        rowSelectionMode="multiple"
        isStriped
      />,
    );

    // Select the one table row, which would be all rows in this scenario
    const newRows = [...initialRows];
    newRows[0] = { ...initialRows[0] };
    newRows[0].isSelected = true;

    wrapper.setProps({ rows: newRows });
    wrapper.update();

    const hiddenText = wrapper.find('.row-selection-region').at(0);
    expect(hiddenText.props().text).toBe('Terra.table.all-rows-selected');
  });

  it('verifies row selection all rows unselected update', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableData.cols}
        rows={tableData.rows}
        rowSelectionMode="multiple"
        isStriped
      />,
    );

    wrapper.setProps({ rows: [] });
    wrapper.update();

    const hiddenText = wrapper.find('.row-selection-region').at(0);
    expect(hiddenText.props().text).toBe('Terra.table.all-rows-unselected');
  });

  it('verifies row selection all rows unselected single unselect', () => {
    const newRows = [...tableData.rows];
    newRows[3] = { ...tableData.rows[3] };
    newRows[3].isSelected = false;

    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableData.cols}
        rows={tableData.rows}
        rowSelectionMode="multiple"
        isStriped
      />,
    );

    wrapper.setProps({ rows: newRows });
    wrapper.update();

    const hiddenText = wrapper.find('.row-selection-region').at(0);
    expect(hiddenText.props().text).toBe('Terra.table.all-rows-unselected');
  });

  it('verifies row selection header has proper visually hidden text', () => {
    const wrapper = enzymeIntl.mountWithIntl(
      <Table
        id="test-terra-table"
        overflowColumns={tableData.cols}
        rows={tableData.rows}
        rowSelectionMode="multiple"
      />,
    );

    // Validate row selection column header
    const rowSelectionHeader = wrapper.find(ColumnHeaderCell).at(0);
    const hiddenDisplay = rowSelectionHeader.find('.hidden');
    expect(hiddenDisplay).toHaveLength(1);
    expect(hiddenDisplay.text()).toBe('Terra.table.row-selection-header-display');

    // Validate column header without hidden display text
    const columnHeader = wrapper.find(ColumnHeaderCell).at(1);
    const hiddenColumnHeader = columnHeader.find('.hidden');
    expect(hiddenColumnHeader).toHaveLength(0);
  });
});

describe('Error handling - prop types', () => {
  it('throws an error if rowHeaderIndex is not an integer', () => {
    enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Table
          id="test-terra-table"
          rows={tableData.rows}
          rowHeaderIndex="2"
        />
      </IntlProvider>
      ,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER)); // eslint-disable-line no-console
  });

  it('throws an error if rowHeaderIndex is not a positive integer', () => {
    enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Table
          id="test-terra-table"
          rows={tableData.rows}
          rowHeaderIndex={-2}
        />
      </IntlProvider>,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_LESS_THAN_MINUS_ONE)); // eslint-disable-line no-console
  });

  it('throws an error if rowHeaderIndex is greater than the length of pinned columns', () => {
    enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Table
          id="test-terra-table"
          pinnedColumns={tableData.cols.slice(0, 2)}
          overflowColumns={tableData.cols.slice(2)}
          rowHeaderIndex={2}
          rows={tableData.rows}
        />
      </IntlProvider>,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED)); // eslint-disable-line no-console
  });
});
