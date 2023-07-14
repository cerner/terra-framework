/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable no-console
import React from 'react';
import { shallowWithIntl } from 'terra-enzyme-intl';
import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';

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

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    //  Validate ColumnHeaderCell React component
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

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    // Validate ColumnHeaderCell React component
    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells).toHaveLength(2);

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

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    // Validate ColumnHeaderCell React component
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

    // Create mock callback functions for testing
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

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');

    // Validate ColumnHeaderCell React component
    const columnHeaderCell = columnHeader.find(ColumnHeaderCell).first();
    expect(columnHeaderCell.props().tableHeight).toBe(500);
    expect(columnHeaderCell.props().onColumnSelect).toBe(mockColumnSelect);
    expect(columnHeaderCell.props().onResizeMouseDown).toBe(mockResizeMouseDown);

    expect(wrapper).toMatchSnapshot();
  });
});
