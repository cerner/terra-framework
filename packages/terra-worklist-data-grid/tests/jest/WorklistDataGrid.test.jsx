import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import WorklistDataGrid from '../../src/WorklistDataGrid';
import dataFile from './testData.json';

describe('WorklistDataGrid', () => {
  it('renders a grid with 3 columns and 3 data rows', () => {
    const wrapper = shallow(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    );

    const columnHeaders = wrapper.find('.worklist-data-grid-column-header');
    const rowHeaders = wrapper.find('.worklist-data-grid-row-header');

    expect(columnHeaders).toHaveLength(3);
    expect(rowHeaders).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
  });

  it('sets the key prop for columns', () => {
    const wrapper = shallow(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        columns={dataFile.cols}
        rows={dataFile.rows}
      />,
    );

    const column = wrapper.find('.worklist-data-grid-column-header').first();
    expect(column.key()).toEqual('Column-0');
  });

  it('fails if the id prop is not provided', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const wrapper = (<WorklistDataGrid />);

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('The prop `id` is marked as required'));

    console.error.mockRestore();
  });
});
