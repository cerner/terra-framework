/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable no-console
import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';
import ColumnHeader from '../../src/ColumnHeader';
import ColumnHeaderCell from '../../src/ColumnHeaderCell';

describe('ColumnHeader', () => {
  it('render a default column header', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = shallowWithIntl(
      <ColumnHeader
        columns={columns}
        columnWidths={['2.5rem', '2.5rem']}
        headerHeight="3rem"
        tableHeight="500px"
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });
});
