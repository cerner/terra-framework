import React from 'react';

import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';

describe('ColumnHeader', () => {
  it('renders a default column header', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = enzyme.shallow(
      <ColumnHeader
        tableId="test-table"
        columns={columns}
        columnWidths={['2.5rem', '2.5rem']}
        headerHeight="3rem"
      />,
    );

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');
    expect(columnHeader.props()['data-row-id']).toBe('test-table-header-row');
    expect(columnHeader.props()['aria-rowindex']).toBe(1);

    //  Validate ColumnHeaderCell React component
    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header with an active resize column', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = enzyme.shallow(
      <ColumnHeader
        tableId="test-table"
        activeResizeIndex={0}
        columns={columns}
        headerHeight="3rem"
        tableHeight={500}
      />,
    );

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');
    expect(columnHeader.props()['data-row-id']).toBe('test-table-header-row');
    expect(columnHeader.props()['aria-rowindex']).toBe(1);

    // Validate ColumnHeaderCell React component
    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells).toHaveLength(2);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header with tableHeight prop', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = enzyme.shallow(
      <ColumnHeader
        tableId="test-table"
        columns={columns}
        headerHeight="3rem"
        tableHeight={500}
      />,
    );

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');
    expect(columnHeader.props()['data-row-id']).toBe('test-table-header-row');
    expect(columnHeader.props()['aria-rowindex']).toBe(1);

    // Validate ColumnHeaderCell React component
    const columnHeaderCells = columnHeader.find(ColumnHeaderCell);
    expect(columnHeaderCells.first().props().tableHeight).toBe(500);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header with callbacks', () => {
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

    const wrapper = enzyme.shallow(
      <ColumnHeader
        tableId="test-table"
        columns={columns}
        headerHeight="3rem"
        tableHeight={500}
        onColumnSelect={mockColumnSelect}
        onResizeMouseDown={mockResizeMouseDown}
      />,
    );

    // Validate column header row container
    const columnHeader = wrapper.find('.column-header-row');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props().height).toBe('3rem');
    expect(columnHeader.props()['data-row-id']).toBe('test-table-header-row');
    expect(columnHeader.props()['aria-rowindex']).toBe(1);

    // Validate ColumnHeaderCell React component
    const columnHeaderCell = columnHeader.find(ColumnHeaderCell).first();
    expect(columnHeaderCell.props().tableHeight).toBe(500);
    expect(columnHeaderCell.props().tableId).toBe('test-table');
    expect(columnHeaderCell.props().onColumnSelect).toBe(mockColumnSelect);
    expect(columnHeaderCell.props().onResizeMouseDown).toBe(mockResizeMouseDown);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that the hasVisibleColumnHeaders prop hides the table column headers when set to false', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = enzyme.shallow(
      <ColumnHeader
        tableId="test-table"
        columns={columns}
        hasVisibleColumnHeaders={false}
        headerHeight="3rem"
      />,
    );

    // Verify that column headers are not present
    const columnHeader = wrapper.find('.hidden');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.props()['data-row-id']).toBe('test-table-header-row');
    expect(columnHeader.props()['aria-rowindex']).toBe(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that the column headers are not hidden when the hasColumnHeader is true', () => {
    const columns = [{
      id: 'Column-0',
      displayName: ' Vitals',
    }, {
      id: 'Column-1',
      displayName: ' Patient',
    }];

    const wrapper = enzyme.shallow(
      <ColumnHeader
        tableId="test-table"
        columns={columns}
        headerHeight="3rem"
        hasVisibleColumnHeaders
      />,
    );

    // Verify that column headers are present
    const columnHeader = wrapper.find('.hidden');
    expect(columnHeader).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });
});
