// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import WorklistDataGrid from '../../src/WorklistDataGrid';

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
        { content: '68' },
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

    const columnHeaders = wrapper.find('.worklist-data-grid-column-header');
    const dataGridCells = wrapper.find('.worklist-data-grid-cell');

    expect(columnHeaders).toHaveLength(3);
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

    expect(selectableCells).toHaveLength(8);
    expect(selectableMaskedCells).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets the key prop for columns', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    const column = wrapper.find('.worklist-data-grid-column-header').first();
    expect(column.key()).toEqual('Column-0');
  });

  it('fails if the id prop is not set', () => {
    jest.spyOn(console, 'error').mockImplementation();

    // eslint-disable-next-line no-unused-vars
    const wrapper = shallowWithIntl(<WorklistDataGrid />);
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('The prop `id` is marked as required'));

    console.error.mockRestore();
  });
});
