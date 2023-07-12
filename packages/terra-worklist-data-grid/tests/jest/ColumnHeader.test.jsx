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
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('render a column header with an active resize column', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = shallowWithIntl(
      <ColumnHeader
        activeResizeIndex={0}
        columns={columns}
        headerHeight="3rem"
        tableHeight={500}
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells).toHaveLength(2);
    expect(columnHeaderCells.first().props().activeResizeColumn).toBeTruthy();
    expect(columnHeaderCells.at(1).props().activeResizeColumn).toBeFalsy();

    expect(wrapper).toMatchSnapshot();
  });

  it('render a column header with tableHeight prop', () => {
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
        headerHeight="3rem"
        tableHeight={500}
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells.first().props().tableHeight).toBe(500);

    expect(wrapper).toMatchSnapshot();
  });

  it('render a column header with callbacks', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const mockColumnSelect = jest.fn();
    const mockResizeMouseDown = jest.fn();

    const wrapper = shallowWithIntl(
      <ColumnHeader
        columns={columns}
        headerHeight="3rem"
        tableHeight={500}
        onColumnSelect={mockColumnSelect}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    const columnHeaderCell = columnHeader.find(ColumnHeaderCell).first();
    expect(columnHeaderCell.props().tableHeight).toBe(500);
    expect(columnHeaderCell.props().onColumnSelect).toBe(mockColumnSelect);
    expect(columnHeaderCell.props().onResizeMouseDown).toBe(mockResizeMouseDown);

    expect(wrapper).toMatchSnapshot();
  });
});
