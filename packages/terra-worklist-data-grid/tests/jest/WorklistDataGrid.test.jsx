// eslint-disable no-console
import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
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

describe('WorklistDataGrid', () => {
  it('verifies that the grid created is consistent with the rows and overflowColumns props', () => {
    const wrapper = shallowWithIntl(
      <WorklistDataGrid
        id="test-terra-worklist-data-grid"
        overflowColumns={dataFile.cols}
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

  describe('with pinned columns', () => {
    it('pins row header column', () => {
      // expect pinned columns length === 1
    });

    it('pins both the row header column and row selection column', () => {
      // expect pinned columns length === 2
    });

    it('pins all pinnedColumns when row selection mode is off', () => {
      // expect pinned columns length === pinnedColumns + 1
    });

    it('pins all pinnedColumns when row selection mode is on', () => {
      // expect pinned columns length === pinnedColumns + 2
    });
  });

  fdescribe('Error handling - prop types', () => {
    beforeAll(()=>{
      jest.spyOn(console, "error").mockImplementation();
    })
    afterAll(()=>{
      console.error.mockRestore();
    });

    it('throws an error if rowHeaderIndex is not an integer', () => {
      shallowWithIntl(
        <WorklistDataGrid
          id="test-terra-worklist-data-grid"
          rowHeaderIndex="2"
          rows={dataFile.rows}
        />,
      ).dive();

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_NOT_AN_INTEGER));
    });

    it('throws an error if rowHeaderIndex is not a positive integer', () => {
      shallowWithIntl(
        <WorklistDataGrid
          id="test-terra-worklist-data-grid"
          rowHeaderIndex={-1}
          rows={dataFile.rows}
        />,
      ).dive();

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_LESS_THAN_ZERO));
    });

    it('throws an error if rowHeaderIndex is greater than the length of pinned columns', () => {
      shallowWithIntl(
        <WorklistDataGrid
          id="test-terra-worklist-data-grid"
          rowHeaderIndex={2}
          pinnedColumns={dataFile.cols.slice(0,2)}
          overflowColumns={dataFile.cols.slice(2)}
          rows={dataFile.rows}
        />,
      ).dive();

      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(ERRORS.ROW_HEADER_INDEX_EXCEEDS_PINNED));
    });
  });
});
