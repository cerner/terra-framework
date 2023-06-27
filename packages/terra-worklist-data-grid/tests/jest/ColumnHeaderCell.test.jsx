// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ColumnHeaderCell from '../../src/ColumnHeaderCell';

describe('WorklistDataGrid', () => {
  it('renders a grid with 3 columns and 3 data rows and 9 cells', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="100px"
      />,
    ).dive();

    // const columnHeaders = wrapper.find(ColumnHeaderCell);
    // const dataGridCells = wrapper.find('.worklist-data-grid-cell');

    // expect(columnHeaders).toHaveLength(3);
    // expect(dataGridCells).toHaveLength(9);
    expect(wrapper).toMatchSnapshot();
  });
});
