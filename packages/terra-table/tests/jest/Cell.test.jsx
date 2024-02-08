import React from 'react';
import { IntlProvider } from 'react-intl';

import VisuallyHiddenText from 'terra-visually-hidden-text';
import GridContext, { GridConstants } from '../../src/utils/GridContext';
import Cell from '../../src/subcomponents/Cell';
import ColumnContext from '../../src/utils/ColumnContext';

const originalOffsetHeight = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'offsetHeight',
);
const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');
beforeAll(() => {
  // Define offsetHeight for HTML elements
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    value: 44,
  });

  // Define offsetWidth for HTML elements
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true, value: 100,
  });
});

afterAll(() => {
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
});

describe('Cell', () => {
  it('verifies that only a row header cell (<th>) is created when isRowHeader prop is true', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isSelected={false}
          isRowHeader
          onCellSelect={jest.fn}
          height="50px"
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    expect(wrapper.find('th')).toHaveLength(1); // Th when row header.
    expect(wrapper.find('td')).toHaveLength(0); // There should be no th since this is row header.
    expect(wrapper).toMatchSnapshot();

    const cellContent = wrapper.find('th').find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');
  });

  it('verifies that only a regular cell(<td>) is created when isRowHeader prop is false', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isSelected={false}
          isRowHeader={false}
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const normalCell = wrapper.find('td');
    expect(normalCell).toHaveLength(1); // Th when non row header.
    expect(wrapper.find('th')).toHaveLength(0); // There should be no td since this is a row header.

    const cellContent = normalCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');
    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that the cell rendered is marked selectable when isSelectable prop is true', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isSelectable
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const selectableCell = wrapper.find('td.selectable');
    expect(selectableCell).toHaveLength(1); // Cell should have been styled selectable.

    const cellContent = selectableCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that the cell rendered is marked blank when the cell content is empty', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          onCellSelect={jest.fn}
        />
      </IntlProvider>,
    ).dive().dive();

    const blankCell = wrapper.find('td.blank');
    expect(blankCell).toHaveLength(1);

    const cellContent = blankCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.blank');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that a selected cell has the correct styles when isSelected prop is true', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isSelected
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const selectedCell = wrapper.find('td.selected');
    expect(selectedCell).toHaveLength(1); // Cell should have been styled selected.

    expect(wrapper.find('td').prop('aria-selected')).toBe(true);
    expect(wrapper.find('td').prop('aria-label')).toBe('Some Label Here');

    const cellContent = selectedCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that a table cell does not have a FocusTrap element', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const focusTrapComponent = wrapper.find('FocusTrap');
    expect(focusTrapComponent).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that a grid cell has a FocusTrap element', () => {
    jest.spyOn(console, 'error').mockImplementation(); // eslint-disable-line no-console

    const wrapper = enzymeIntl.mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={0}
          tableId="test-table"
          key="key"
        >
          <button type="button">Button</button>
        </Cell>
      </GridContext.Provider>, { attachTo: document.body },
    );

    const focusTrapComponent = wrapper.find('FocusTrap');
    expect(focusTrapComponent).toHaveLength(1);

    const visuallyHiddenText = wrapper.find(VisuallyHiddenText);
    expect(visuallyHiddenText).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    console.error.mockRestore(); // eslint-disable-line no-console
  });

  it('verifies that a grid cell without a focusale element does not have visually hidden text', () => {
    jest.spyOn(console, 'error').mockImplementation(); // eslint-disable-line no-console

    const wrapper = enzymeIntl.mountWithIntl(
      <GridContext.Provider value={{ role: GridConstants.GRID }}>
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={0}
          tableId="test-table"
          key="key"
        >
          Data in cell
        </Cell>
      </GridContext.Provider>,
    );

    const focusTrapComponent = wrapper.find('FocusTrap');
    expect(focusTrapComponent).toHaveLength(1);

    const visuallyHiddenText = wrapper.find(VisuallyHiddenText);
    expect(visuallyHiddenText).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();

    console.error.mockRestore(); // eslint-disable-line no-console
  });

  it('verifies that a cell has the correct styles and no content when isMasked prop is true', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isMasked
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const maskedCell = wrapper.find('td.masked');
    expect(maskedCell).toHaveLength(1);

    const cellContent = maskedCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.maskedCell');
    expect(cellContent).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies that a cell has renders that masked label text, when provided', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isMasked
          maskedLabel="MaskedLabel"
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const maskedCell = wrapper.find('td.masked');
    expect(maskedCell).toHaveLength(1);

    const cellContent = maskedCell.find('div');
    expect(cellContent.text()).toBe('MaskedLabel');
    expect(cellContent).toHaveLength(1);

    expect(wrapper).toMatchSnapshot();
  });

  it('verifies mask takes precedence when cell is masked, selectable and selected', () => {
    const wrapper = enzymeIntl.shallowWithIntl(
      <IntlProvider locale="en">
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          ariaLabel="Some Label Here"
          rowIndex={1}
          columnIndex={2}
          tableId="test-table"
          key="key"
          isSelected
          isMasked
          isSelectable
          onCellSelect={jest.fn}
        >
          Data in cell
        </Cell>
      </IntlProvider>,
    ).dive().dive();

    const maskedCell = wrapper.find('td.masked');
    expect(maskedCell).toHaveLength(1);

    const cellContent = maskedCell.find('div');
    expect(cellContent.text()).toBe('Terra.table.maskedCell');

    // Verify other styles not applied.
    expect(wrapper.find('td.selected')).toHaveLength(0); // Cell should not be styled selected since it is masked.
    expect(wrapper.find('td.selectable')).toHaveLength(0); // Cell should not be styled selectable since it is masked.

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a pinned cell', () => {
    jest.spyOn(console, 'error').mockImplementation(); // eslint-disable-line no-console

    const wrapper = enzymeIntl.mountWithIntl(
      <ColumnContext.Provider value={{ pinnedColumnOffsets: [0] }}>
        <Cell
          rowId="RowID"
          columnId="ColumnId"
          rowIndex={1}
          columnIndex={0}
          tableId="test-table"
          key="key"
          isSelected={false}
          isRowHeader
          onCellSelect={jest.fn}
          height="50px"
        >
          Pinned cell data
        </Cell>
      </ColumnContext.Provider>,
    );

    expect(wrapper.find('.pinned')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();

    console.error.mockRestore(); // eslint-disable-line no-console
  });
});

