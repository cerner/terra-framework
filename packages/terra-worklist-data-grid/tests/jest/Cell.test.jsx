import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Cell from '../../src/subcomponents/Cell';

describe('Cell', () => {
  it('renders a row header cell', () => {
    const wrapper = shallowWithIntl(
      <Cell
        rowId="RowID"
        columnId="ColumnId"
        coordinates={{ row: 1, col: 2 }}
        key="key"
        isTabStop={false}
        isSelected={false}
        cell={{ content: 'Data in cell' }}
        isRowHeader
        onCellSelect={jest.fn}
      />,
    ).dive();

    expect(wrapper.find('th')).toHaveLength(1); // Th when row header.
    expect(wrapper.find('td')).toHaveLength(0); // There should be no th since this is row header.
    expect(wrapper).toMatchSnapshot();

    const cellContent = wrapper.find('th').find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');
  });

  it('renders a non row header cell', () => {
    const wrapper = shallowWithIntl(
      <Cell
        rowId="RowID"
        columnId="ColumnId"
        coordinates={{ row: 1, col: 2 }}
        key="key"
        isTabStop={false}
        isSelected={false}
        cell={{ content: 'Data in cell' }}
        isRowHeader={false}
        onCellSelect={jest.fn}
      />,
    ).dive();

    const normalCell = wrapper.find('td');
    expect(normalCell).toHaveLength(1); // Th when non row header.
    expect(wrapper.find('th')).toHaveLength(0); // There should be no td since this is a row header.

    const cellContent = normalCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a mask cell', () => {
    const wrapper = shallowWithIntl(
      <Cell
        rowId="RowID"
        columnId="ColumnId"
        coordinates={{ row: 1, col: 2 }}
        key="key"
        cell={{ isMasked: true, content: 'Data in cell' }}
        onCellSelect={jest.fn}
      />,
    ).dive();

    const maskedCell = wrapper.find('td.masked');
    expect(maskedCell).toHaveLength(1);

    const cellContent = maskedCell.find('div'); // The content div is not present.
    expect(cellContent).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a selectable cell', () => {
    const wrapper = shallowWithIntl(
      <Cell
        rowId="RowID"
        columnId="ColumnId"
        coordinates={{ row: 1, col: 2 }}
        key="key"
        cell={{ isSelectable: true, content: 'Data in cell' }}
        onCellSelect={jest.fn}
      />,
    ).dive();

    const selectableCell = wrapper.find('td.selectable');
    expect(selectableCell).toHaveLength(1);

    const cellContent = selectableCell.find('div');
    expect(cellContent).toHaveLength(1);
    expect(cellContent.text()).toEqual('Data in cell');

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a blank cell', () => {
    const wrapper = shallowWithIntl(
      <Cell
        rowId="RowID"
        columnId="ColumnId"
        coordinates={{ row: 1, col: 2 }}
        key="key"
        cell={{ content: '' }}
        onCellSelect={jest.fn}
      />,
    ).dive();

    const blankCell = wrapper.find('td.blank');
    expect(blankCell).toHaveLength(1);

    const cellContent = blankCell.find('div');
    expect(cellContent).toHaveLength(0);

    expect(wrapper).toMatchSnapshot();
  });
});

