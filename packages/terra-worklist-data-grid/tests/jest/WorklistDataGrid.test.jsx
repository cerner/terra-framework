// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import WorklistDataGrid from '../../src/WorklistDataGrid';
import ColumnHeader from '../../src/subcomponents/ColumnHeader';
import Row from '../../src/subcomponents/Row';

import ERRORS from '../../src/utils/constants';

// Source data for tests
const dataFile = {
  cols: [
    { id: 'Column-0', displayName: ' Vitals' },
    { id: 'Column-1', displayName: 'March 16' },
    { id: 'Column-2', displayName: 'March 17', isSelectable: false },
  ],
  rows: [
    {
      id: '1',
      cells: [
        { content: 'Heart Rate Monitored (bpm)' },
        { content: '' },
        { content: '66', isMasked: true },
      ],
    },
    {
      id: '2',
      cells: [
        { content: 'Temperature Oral (degC)' },
        { content: '36.7' },
        { content: '36.9', isMasked: true },
      ],
    },
    {
      id: '3',
      cells: [
        { content: 'Cardiac Index (L/min/m2)' },
        { content: '2.25' },
        { content: '2.28', isMasked: true },
      ],
    },
  ],
};

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation();
  jest.spyOn(console, 'warn').mockImplementation();
});

afterEach(() => {
  console.error.mockClear();
  console.warn.mockClear();

});

afterAll(() => {
  console.error.mockRestore();
  console.warn.mockRestore();
});

describe('basic grid', () => {
  it('verifies that the grid created is consistent with the rows and overflowColumns props', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
      />,
    ).dive();

    // One row used for the header.
    const columnHeader = wrapper.find(ColumnHeader);
    expect(columnHeader).toHaveLength(1);

    // The number of rows should match the given data.
    expect(wrapper.find(Row)).toHaveLength(dataFile.rows.length);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('with pinned columns', () => {
  it('sets pinnedColumns as pinned', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(2 * 4);
  });

  it('sets row selection column as pinned', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rows={dataFile.rows}
        hasSelectableRows
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(3 * 4);
  });

  it('pins row selection column if pinnedColumns is undefined', () => {
    const wrapper = mountWithIntl(
      <WorklistDataGrid
        id="sdfdss"
        overflowColumns={dataFile.cols}
        rows={dataFile.rows}
        hasSelectableRows
      />,
    );

    const pinnedColumnHeaderCells = wrapper.find('.pinned');

    expect(pinnedColumnHeaderCells).toHaveLength(1 * 4);
    expect(console.warn).toHaveBeenCalledWith(expect.stringContaining(ERRORS.PINNED_COLUMNS_UNDEFINED));
  });
});

describe('Error handling - prop types', () => {
  it('throws an error if rowHeaderIndex is not an integer', () => {
    shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        rows={dataFile.rows}
        rowHeaderIndex="2"
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER));
  });

  it('throws an error if rowHeaderIndex is not a positive integer', () => {
    shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        rows={dataFile.rows}
        rowHeaderIndex={-1}
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO));
  });

  it('throws an error if rowHeaderIndex is greater than the length of pinned columns', () => {
    shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        pinnedColumns={dataFile.cols.slice(0, 2)}
        overflowColumns={dataFile.cols.slice(2)}
        rowHeaderIndex={2}
        rows={dataFile.rows}
      />,
    ).dive();

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED));
  });
});
