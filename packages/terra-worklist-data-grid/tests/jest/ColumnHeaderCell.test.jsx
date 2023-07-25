/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable no-console
import React from 'react';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';
import ColumnContext from '../../src/utils/ColumnContext';

describe('ColumnHeaderCell', () => {
  it('renders a default column header cell', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.children()).toHaveLength(1);
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header cell with ascending sort', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header cell with descending sort', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'descending',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props()['aria-sort']).toBe('descending');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconDown)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header cell with error', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      hasError: true,
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props()['aria-sort']).toBeUndefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header cell with ascending sort and error', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
      hasError: true,
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header cell with onColumnSelect callback', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
      hasError: true,
    };

    const mockClick = jest.fn();

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
        onColumnSelect={mockClick}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().onMouseDown).toBeDefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a column header cell with onColumnSelect callback but not selectable', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
      hasError: true,
      isSelectable: false,
    };

    const onColumnSelect = () => {};

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        columnIndex={0}
        width={100}
        headerHeight="150px"
        {...column}
        onColumnSelect={onColumnSelect}
      />
    ).dive();

    const columnHeader = wrapper.find('.column-header:not(selectable)');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(-1);
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().onMouseDown).toBeUndefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('span').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a pinned column header cell', () => {
    jest.spyOn(console, 'error').mockImplementation();

    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
      hasError: true,
    };

    const columnContextValues = {
      pinnedColumnsLength: 1,
      pinnedColumnOffsets: [0],
      pinnedColumnsTotalWidth: 100,
    }

    const wrapper = mountWithIntl(
      <ColumnContext.Provider value={{
        pinnedColumnsLength: 1,
        pinnedColumnOffsets: [0],
        pinnedColumnsTotalWidth: 100,
      }}>
        <ColumnHeaderCell
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </ColumnContext.Provider>
    );

    expect(wrapper.find('.pinned')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    console.error.mockRestore();
  });
});
