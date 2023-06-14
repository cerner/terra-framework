// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import WorklistDataGrid from '../../src/WorklistDataGrid';
import dataFile from './testData.json';

describe('WorklistDataGrid', () => {
  it('renders a grid with 3 columns and 3 data rows', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    ).dive();

    const columnHeaders = wrapper.find('.worklist-data-grid-column-header');
    const rowHeaders = wrapper.find('.worklist-data-grid-cell');

    // Test masked cells
    const maskedCells = wrapper.find('.masked');

    // Test selectable cells for hover and selection actions
    const selectableCells = wrapper.find('.selectable');
    const selectableMaskedCells = wrapper.find('.masked.selectable');

    expect(columnHeaders).toHaveLength(3);
    expect(rowHeaders).toHaveLength(9);
    expect(maskedCells).toHaveLength(3);
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
