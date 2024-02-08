import React from 'react';
import Section from '../../src/subcomponents/Section';
import Row from '../../src/subcomponents/Row';

// Source data for tests
const tableData = {
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

describe('Section', () => {
  it('verifies that the table created is consistent with the rows and overflowColumns props', () => {
    const wrapper = enzyme.shallow(
      <Section
        id="test-section"
        tableId="test-table"
        text="Test Section"
        sectionRowIndex={1}
        displayedColumns={tableData.cols}
        rows={tableData.rows}
      />,
    );

    // The number of rows should match the given data.
    expect(wrapper.find(Row)).toHaveLength(tableData.rows.length);
  });

  it('verifies the rows are created with the right props', () => {
    const verifyRow = (rowIndex, rowComponent, data, overflowColumns) => {
      expect(rowComponent.props.displayedColumns).toEqual(overflowColumns);
      expect(rowComponent.props.rowSelectionMode).toBeUndefined();
      expect(rowComponent.props.tableId).toBe('test-table');
      expect(rowComponent.key).toEqual(data.id);
      expect(rowComponent.props.onCellSelect).toBeUndefined();
      expect(rowComponent.props.rowHeaderIndex).toEqual(0);
      expect(rowComponent.props.rowIndex).toEqual(rowIndex + 2);
      expect(rowComponent.props.cells).toEqual(data.cells);
    };

    const wrapper = enzyme.shallow(
      <Section
        id="test-section"
        tableId="test-table"
        sectionRowIndex={1}
        text="Test Section"
        displayedColumns={tableData.cols}
        rows={tableData.rows}
      />,
    );

    const rows = wrapper.find(Row);
    expect(rows).toHaveLength(tableData.rows.length);
    verifyRow(0, rows.get(0), tableData.rows[0], tableData.cols);
    verifyRow(1, rows.get(1), tableData.rows[1], tableData.cols);
    verifyRow(2, rows.get(2), tableData.rows[2], tableData.cols);
  });

  it('verifies the rows receive the correct props when table is zebra striped', () => {
    const wrapper = enzyme.shallow(
      <Section
        id="test-section"
        tableId="test-table"
        sectionRowIndex={1}
        text="Test Section"
        displayedColumns={tableData.cols}
        rows={tableData.rows}
        isTableStriped
      />,
    );

    const testRow = wrapper.find(Row).at(0);
    expect(testRow.props().isTableStriped).toBe(true);
    expect(testRow.props().tableId).toBe('test-table');
  });
});
