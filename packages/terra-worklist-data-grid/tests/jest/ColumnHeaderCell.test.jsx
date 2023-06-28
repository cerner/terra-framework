/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable no-console
import React from 'react';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import { shallowWithIntl } from 'terra-enzyme-intl';
import ColumnHeaderCell from '../../src/ColumnHeaderCell';

describe('ColumnHeaderCell', () => {
  it('render default column header cell', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="150px"
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.children()).toHaveLength(1);
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');

    expect(wrapper).toMatchSnapshot();
  });

  it('render column header cell with ascending sort', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="150px"
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render column header cell with descending sort', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'descending',
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="150px"
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props()['aria-sort']).toBe('descending');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconDown)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render column header cell with error', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      hasError: true,
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="150px"
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props()['aria-sort']).toBeUndefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render column header cell with ascending sort and error', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
      hasError: true,
    };

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="150px"
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render column header cell with onColumnSelect callback', () => {
    const column = {
      id: 'Column-0',
      displayName: ' Vitals',
      sortIndicator: 'ascending',
      hasError: true,
    };

    const mockClick = jest.fn();

    const wrapper = shallowWithIntl(
      <ColumnHeaderCell
        column={column}
        width="100px"
        headerHeight="150px"
        onColumnSelect={mockClick}
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().onClick).toBeDefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('render column header cell with onColumnSelect callback but not selectable', () => {
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
        column={column}
        width="100px"
        headerHeight="150px"
        onColumnSelect={onColumnSelect}
      />,
    ).dive();

    const columnHeader = wrapper.find('.column-header:not(selectable)');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toBe('-1');
    expect(columnHeader.props()['aria-sort']).toBe('ascending');
    expect(columnHeader.props().onClick).toBeUndefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.find('span[role="button"]').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });
});
