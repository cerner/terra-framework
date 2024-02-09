import React from 'react';
import IconUp from 'terra-icon/lib/icon/IconUp';
import IconDown from 'terra-icon/lib/icon/IconDown';
import IconError from 'terra-icon/lib/icon/IconError';
import { IntlProvider } from 'react-intl';
import ColumnHeaderCell from '../../src/subcomponents/ColumnHeaderCell';
import ColumnContext from '../../src/utils/ColumnContext';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterAll(() => {
  console.error.mockRestore(); // eslint-disable-line no-console
  console.warn.mockRestore(); // eslint-disable-line no-console
});

describe('ColumnHeaderCell', () => {
  it('renders a default column header cell', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      isSelectable: true,
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals');
  });

  it('renders a column header cell with ascending sort', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      sortIndicator: 'ascending',
      isSelectable: true,
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals, Terra.table.sort-ascending');
  });

  it('renders a column header cell with descending sort', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      sortIndicator: 'descending',
      isSelectable: true,
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconDown)).toHaveLength(1);
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals, Terra.table.sort-descending');
  });

  it('renders a column header cell with error', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      hasError: true,
      isSelectable: true,
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconError)).toHaveLength(1);
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals, Terra.table.columnError');
  });

  it('renders a column header cell with ascending sort and error', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      sortIndicator: 'ascending',
      hasError: true,
      isSelectable: true,
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals, Terra.table.columnError, Terra.table.sort-ascending');
  });

  it('renders a column header cell with onColumnSelect callback', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      sortIndicator: 'ascending',
      hasError: true,
      isSelectable: true,
    };

    const mockClick = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
          onColumnSelect={mockClick}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header.selectable');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().onMouseDown).toBeDefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container[role="button"]');
    expect(headerContainer.props().tabIndex).toBe(0);
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals, Terra.table.columnError, Terra.table.sort-ascending');
  });

  it('renders a column header cell with onColumnSelect callback but not selectable', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      sortIndicator: 'ascending',
      hasError: true,
      isSelectable: false,
    };

    const mockColumnSelect = jest.fn();

    const wrapper = enzymeIntl.mountWithIntl(
      <IntlProvider locale="en">
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
          onColumnSelect={mockColumnSelect}
        />
      </IntlProvider>,
    );

    const columnHeader = wrapper.find('.column-header:not(selectable)');
    expect(columnHeader).toHaveLength(1);
    expect(columnHeader.key()).toBe('Column-0');
    expect(columnHeader.props().id).toBe('test-table-Column-0');
    expect(columnHeader.props().role).toBe('columnheader');
    expect(columnHeader.props().scope).toBe('col');
    expect(columnHeader.props().tabIndex).toEqual(undefined);
    expect(columnHeader.props().onMouseDown).toBeUndefined();
    expect(columnHeader.props().style.width).toBe('100px');
    expect(columnHeader.props().style.height).toBe('150px');
    expect(columnHeader.props().title).toBe('Vitals');

    const headerContainer = columnHeader.find('.header-container');
    expect(headerContainer.props().tabIndex).toBeUndefined();
    expect(headerContainer.find('.display-text').text().trim()).toBe('Vitals');
    expect(headerContainer.find(IconUp)).toHaveLength(1);
    expect(headerContainer.find(IconError)).toHaveLength(1);
    expect(headerContainer.find('VisuallyHiddenText').text()).toBe('Vitals, Terra.table.columnError, Terra.table.sort-ascending');
  });

  it('renders a pinned column header cell', () => {
    const column = {
      id: 'Column-0',
      displayName: 'Vitals',
      sortIndicator: 'ascending',
      hasError: true,
    };

    const wrapper = enzymeIntl.mountWithIntl(
      <ColumnContext.Provider value={{ pinnedColumnOffsets: [0] }}>
        <ColumnHeaderCell
          tableId="test-table"
          columnIndex={0}
          width={100}
          headerHeight="150px"
          {...column}
        />
      </ColumnContext.Provider>,
    );

    expect(wrapper.find('.pinned')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls a custom column select callback function on mouse down', () => {
    const mockOnColumnSelect = jest.fn();
    const wrapper = enzymeIntl.mountWithIntl(
      <ColumnHeaderCell
        onColumnSelect={mockOnColumnSelect}
        isSelectable
      />,
    );
    wrapper.find('.column-header').simulate('mousedown');

    // Validate mock function was called from simulated onMouseDown event
    expect(mockOnColumnSelect).toHaveBeenCalled();
  });

  it('verifes that the custom column select callback is not called on mouse down when not selectable', () => {
    const mockOnColumnSelect = jest.fn();
    const wrapper = enzymeIntl.mountWithIntl(
      <ColumnHeaderCell
        onColumnSelect={mockOnColumnSelect}
      />,
    );
    wrapper.find('.column-header').simulate('mousedown');

    // Validate mock function was called from simulated onMouseDown event
    expect(mockOnColumnSelect).not.toHaveBeenCalled();
  });
});
