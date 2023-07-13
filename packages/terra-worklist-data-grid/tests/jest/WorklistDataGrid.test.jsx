// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import WorklistDataGrid from '../../src/WorklistDataGrid';
import ColumnHeader from '../../src/ColumnHeader';

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
  it('renders a grid with 3 columns and 3 data rows and 9 cells', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    const columnHeader = wrapper.find(ColumnHeader);
    const dataGridCells = wrapper.find('.worklist-data-grid-cell');

    expect(columnHeader).toHaveLength(1);
    expect(dataGridCells).toHaveLength(9);
    expect(wrapper).toMatchSnapshot();
  });

  it('test masked cells', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    // Test masked cells
    const maskedCells = wrapper.find('.masked');

    expect(maskedCells).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a grid with selectable cells', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    // Test selectable cells for hover and selection actions
    const selectableCells = wrapper.find('.selectable');
    const selectableMaskedCells = wrapper.find('.masked.selectable');

    expect(selectableCells).toHaveLength(6);
    expect(selectableMaskedCells).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('fails if the id prop is not set', () => {
    jest.spyOn(console, 'error').mockImplementation();

    // eslint-disable-next-line no-unused-vars
    const wrapper = shallowWithIntl(<WorklistDataGrid />);
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('The prop `id` is marked as required')); // eslint-disable-line no-console

    console.error.mockRestore(); // eslint-disable-line no-console
  });

  it('sets the .blank class to an empty cell', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    const blankCells = wrapper.find('.blank');
    expect(blankCells).toHaveLength(1);
    expect(blankCells.first().children()).toHaveLength(0);
  });
});
